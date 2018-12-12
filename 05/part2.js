const fs = require('fs')

fs.readFile('./input.txt', function (err, data) {
    if (err) {
        throw err; 
    }

    let inputDataStr = data.toString().split('')
    console.log(main(inputDataStr))
});

const alphabet = 'abcdefghijklmnopqrstuvwxyz'.split('')

function main(input) {
    let reaction_array = input
    let shortestReaction = 0

    for (alpha of alphabet) {
        let temp_array = reaction_array.slice()

        scanning = true
        index = 0

        while (scanning) {
            // if it's the current alpha character (lower or upper) remove it
            if (temp_array[index] === alpha || temp_array[index].toLowerCase() === alpha) {
                // console.log(`removing '${alpha}' | index: ${index} | array: ${temp_array.join('')}`)
                temp_array.splice(index, 1)

                index = index - 1
                if (index < 0) {
                    index = 0
                }

                continue
            }

            let current_item = temp_array[index]
            let next_item = temp_array[index + 1]

            if (next_item === undefined) {
                scanning = false
                continue
            }

            let has_reaction = checkReaction(current_item, next_item)

            if (has_reaction) {
                temp_array.splice(index, 2)
                index = index - 1
                if (index < 0) {
                    index = 0
                }
                continue
            } else {
                index++

                if (!temp_array[index + 1]) {
                    scanning = false
                }
            }

            if (index >= temp_array.length) {
                scanning = false
            }
        }

        let length = temp_array.join('').length

        if (length < shortestReaction || shortestReaction === 0) {
            shortestReaction = length
        }

    }


    return shortestReaction
}

function checkReaction(x, y) {
    // check if they're the same letter (in lower case)
    if (x.toLowerCase() === y.toLowerCase()) {
        // if they're not both the same case
        if (x !== y) {
            return true
        }
    }
    return false
}