const fs = require('fs')
const calculateChecksum = require('./calculateChecksum.js')

fs.readFile('./input.txt', function (err, data) {
    if (err) {
        throw err; 
    }

    let inputDataStr = data.toString().split('\n')

    console.log(calculateChecksum(inputDataStr))
});