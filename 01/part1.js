const fs = require('fs')
const calculateFrequency = require('./calculateFrequency.js')

let inputData = []

fs.readFile('./input.txt', function (err, data) {
    if (err) {
        throw err; 
    }

    let inputDataStr = data.toString().split('\n')

    for (item of inputDataStr) {
        inputData.push(parseInt(item))
    }

    console.log(calculateFrequency(inputData))
});
