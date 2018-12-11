const fs = require('fs')

fs.readFile('./input.txt', function (err, data) {
    if (err) {
        throw err; 
    }

    let inputDataStr = data.toString().split('')
    console.log(main(inputDataStr))
});

function main(input) {
    let reaction_array = input

    scanning = true
    index = 0

    while (scanning) {
        let has_reaction = checkReaction(reaction_array[index], reaction_array[index+1])

        if (has_reaction) {
            reaction_array.splice(index, 2)
            index = 0
            continue
        } else {
            index++

            if (!reaction_array[index + 1]) {
                scanning = false
            }
        }

        if (index >= reaction_array.length) {
            scanning = false
        }
    }


    return reaction_array.join('')
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