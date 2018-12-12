const fs = require('fs')

fs.readFile('./small_input.txt', function (err, data) {
    if (err) {
        throw err; 
    }

    let inputDataStr = data.toString().split('\n')
    console.log(main(inputDataStr))
});

function main(input) {
    let bigX = 0
    let bigY = 0
    let grid = []

    let coordinates = input.map((a) => {
        var coords = a.replace(' ', '').split(',')

        let x = coords[0]
        let y = coords[1]

        if (x > bigX) {
            bigX = x
        }

        if (y > bigY) {
            bigY = y
        }

        return new Coordinates(x, y)
    })

    let grid = []

    for (let x = 0; x <= bigX; x++) {
        grid.push([])

        for (let y = 0; y <= bigY; y++) {
            grid[x].push(0)
        }
    }

    plotOnGrid(grid, coordinates)

    console.log(grid)
    for (let x = 0; x <= bigX; x++) {
        for (let y = 0; y <= bigY; y++) {


            // loop over coordinates to see which one is closest to x, y
            //   abs(coord.x - x) + abs(coord.y - y)
            
        }
    }

    return 0
}

function plotOnGrid(grid, coords) {
    let item = 1

    for (coord of coords) {
        grid[coord.x][coord.y] = item++
    }

    return grid
}

class Coordinates {
    constructor(x, y) {
        this.x = x
        this.y = y
    }
}