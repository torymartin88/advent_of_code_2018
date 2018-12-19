const fs = require('fs')

fs.readFile('./input.txt', function (err, data) {
    if (err) {
        throw err; 
    }

    let inputDataStr = data.toString().split('\n')
    let inputArray = inputDataStr.map(x => x.split(''))
    console.log(main(inputArray))
});

/* grid for purposes of search
    0 1 2
    3 - 4
    5 6 7
*/
const searchCoords = [
    [-1, -1], [0, -1], [1, -1],
    [-1,  0],          [1,  0],
    [-1,  1], [0,  1], [1,  1],
]

function main(input) {
    var output = input
    let snapshots = []

    for (let i = 0; i < 552; i++) {
        let temp = processTick(output)
        let tempStr = JSON.stringify(temp)

        if (snapshots.includes(tempStr)) { 
            console.log('Period')
            console.log(`Found ${i} as a repeat of ${snapshots.indexOf(tempStr)}`)
        }
        
        snapshots.push(tempStr)
        output = temp
    }

    return countOutput(output)
}


function processTick(input) {
    let output = JSON.parse(JSON.stringify(input))

    for (let y = 0; y < input.length; y++) {
        for (let x = 0; x < input[y].length; x++) {
            let none = 0
            let trees = 0
            let lumberyards = 0
            
            for (coord of searchCoords) {
                try {
                    let contents = input[y + coord[1]][x + coord[0]]

                    if (contents === '.') { none++ }
                    if (contents === '|') { trees++ }
                    if (contents === '#') { lumberyards++ }
                } catch (e) {
                    // console.error('location doesn\'t exist', e)
                }
            }

            // if it's open ground
            if (input[y][x] === '.') {
                // check adjacent tiles for trees
                if (trees >= 3) {
                    output[y][x] = '|'
                }
            }
            
            // if it's a tree
            if (input[y][x] === '|') {
                // check adjacent tiles for lumberyards
                if (lumberyards >= 3) {
                    output[y][x] = '#'
                }
            } 
            
            // if it's a lumberyard
            if (input[y][x] === '#') {
                // check adjacent tiles for at least 1 lumberyard and at least 1 tree
                if (trees < 1 || lumberyards < 1) {
                    output[y][x] = '.'
                }
            }
        }
    }

    return output
}

function countOutput(input) {
    let trees = 0
    let lumberyards = 0

    for (row of input) {
        for (plot of row) {
            if (plot === '|') { trees++ }
            if (plot === '#') { lumberyards++ }
        }
    }

    return trees * lumberyards
}