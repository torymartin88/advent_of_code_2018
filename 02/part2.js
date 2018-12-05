const fs = require('fs')
const calculateCorrectStrings = require('./calculateCorrectStrings.js')

fs.readFile('./input.txt', function (err, data) {
    if (err) {
        throw err; 
    }

    let inputDataStr = data.toString().split('\n')

    console.log(calculateCorrectStrings(inputDataStr))
});