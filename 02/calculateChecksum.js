/**
 * Summary.
 * Calculates a checksum based on the number of occurences of a letter 2 and 3 times.
 * Final checksum is the product of those two counts
 *
 * Examples.
 * [1, -1, 2] returns 2
 * [3, -2, 1] returns 2
 * [-3, -1, 1, 2] returns -1
 *
 * @param {array}   ids      Array of character strings.
 * 
 * @return {int} Returns the final calculated checksum.
 */
module.exports = function calculateChecksum(ids) {
    let occ2 = 0
    let occ3 = 0

    for (id of ids) {
        let occ2yet = false
        let occ3yet = false

        const counts = getCounts(id)

        for (count in counts) {
            // only increment occ2 if there hasn't been a 2 count character yet
            if (counts[count] === 2 && !occ2yet) {
                occ2++
                occ2yet = true

            // only increment occ3 if there hasn't been a 3 count character yet
            } else if (counts[count] === 3 && !occ3yet) {
                occ3++
                occ3yet = true
            }
        }
    }

    return occ2 * occ3
}

function getCounts(id) {
    let counts = {}

    for (char of id) {
        if (!counts[char]) {
            counts[char] = 1
        } else {
            counts[char]++
        } 
    }

    return counts
}