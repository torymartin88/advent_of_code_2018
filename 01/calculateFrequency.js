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
module.exports = function calculateFrequency(changesArray) {
    return changesArray.reduce( (acc, curr) => acc += curr )
}