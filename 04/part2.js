const fs = require('fs')
const Guard = require('./Guard.js')

fs.readFile('./input.txt', function (err, data) {
    if (err) {
        throw err; 
    }

    let inputDataStr = data.toString().split('\n')
    console.log(main(inputDataStr))
});

function main(input) {
    // sort input by datetime
    let parsed_events = []
    let guards = {}
    let guards_sleeping_minutes = {}
    let current_guard_id = 0

    input.sort()

    let minute_asleep = 0
    let minute_awake = 0

    // parse out sections of each line
    for (line of input) {
        let match_groups = line.match(/\[(\d{4})-(\d{2})-(\d{2}) (\d{2}):(\d{2})] (\w+) #?(\d+|\w+)/)
        // console.log(match_groups)
        
        let minute = match_groups[5]
        let action = match_groups[6].toLowerCase()
        
        if (action === 'guard') {
            current_guard_id = parseInt(match_groups[7])

            // if we haven't logged any sleep minutes yet
            if (!(current_guard_id in guards_sleeping_minutes)) {
                guards_sleeping_minutes[current_guard_id] = {}

                for (let i = 0; i < 60; i++) {
                    guards_sleeping_minutes[current_guard_id][i] = 0
                }
            }
        } else if (action === 'falls') {
            minute_asleep = parseInt(minute)
        } else if (action === 'wakes') {
            minute_awake = parseInt(minute)
            
            for (let i = minute_asleep; i < minute_awake; i++) {
                guards_sleeping_minutes[current_guard_id][i]++
            }
        }
    }

    let laziest_minute_count = 0
    let laziest_minute = 0
    let laziest_guard = 0

    for (guard_id in guards_sleeping_minutes) {
        let minutes_asleep = Object
            .values(guards_sleeping_minutes[guard_id])
            .sort((a, b) => b - a)[0];

        if (minutes_asleep > laziest_minute_count) {
            laziest_minute_count = minutes_asleep
            laziest_minute = getKeyByValue(guards_sleeping_minutes[guard_id], laziest_minute_count)
            laziest_guard = parseInt(guard_id)
        }
    }

    return laziest_minute * laziest_guard
}

function getKeyByValue(object, value) {
    return Object.keys(object).find(key => object[key] === value);
  }