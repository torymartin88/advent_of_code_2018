const calculateFrequency = require('./calculateFrequency.js')

let args = []

// grab args starting at index #2
for (var i = 2; i < process.argv.length; i++) {
    // if argument not valid, ignore
    if (parseInt(process.argv[i])) {
        args.push(parseInt(process.argv[i]))
    }
}

console.log(calculateFrequency(args))