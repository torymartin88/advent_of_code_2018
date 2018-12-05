/**
 * Summary.
 * Calculates the final frequency from an array of positive and negative integers.
 *
 * Examples.
 * [1, -1, 2] returns 2
 * [3, -2, 1] returns 2
 * [-3, -1, 1, 2] returns -1
 *
 * @param {array}   changes      Array of frequency changes (integers).
 * 
 * @return {int} Returns the final calculated frequency.
 */
module.exports = function calculate2ndFrequency(changesArray) {
    let frequencies = {}
    let frequency = 0
    let found = false

    while (found === false) {
        for (change of changesArray) {
            frequency += change
            
            if (frequencies[frequency] === undefined) {
                frequencies[frequency] = 1
            } else {
                //we found our first second occurrance
                frequencies[frequency]++
                found = frequency
                break
            }
        }
    }

    return found
}