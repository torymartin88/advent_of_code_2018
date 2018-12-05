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
module.exports = function calculateCorrectStrings(ids) {
    for (id1 of ids) {
        //compare against all other strings
        for (id2 of ids) {
            console.log(id1,  id2)
            // if they match, then exit (don't need to match)
            if (id1 === id2) {
                break
            }

            let mistakes = 0
            let common = ''

            for (let i = 0; i < id1.length; i++) {
                // if the character is not the same
                if (id1.charAt(i) != id2.charAt(i)) {
                    mistakes++
                    common = id1.slice(0, i) + id1.slice(i+1, id1.length)
                }
            }

            // if there was only one difference, we found our matches, return
            if (mistakes === 1) {
                return common
            }
        }
    }

    return -1
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