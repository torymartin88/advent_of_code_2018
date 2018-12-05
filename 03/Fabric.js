function Fabric(x, y) {
    this.matrix = []

    // blank unused cell wil containt this
    this.defaultValue = 0

    for (let h = 0; h <= y; h++) {
        let row = []

        for (let w = 0; w <= x; w++) {
            row.push(this.defaultValue)
        }

        this.matrix.push(row)
    }
}

/**
 * Summary.
 * Add claim to fabric
 * 
 * Sets matrix cell to claim.id unless there is another claim already there,
 * 
 *
 * Matrix Example
 * 0 - no claim
 * 1 - claim (id #)
 * X - multiple claims
 * 
 */
Fabric.prototype.addClaim = function(claim) {
    for (let x = claim.x; x < claim.x + claim.w; x++) {
        for (let y = claim.y; y < claim.y + claim.h; y++) {
            // add to matrix at position
            if (this.matrix[y][x] != 0) {
                this.matrix[y][x] = -1
            } else {
                this.matrix[y][x] = claim.id
            }
        }
    }
}

Fabric.prototype.calculateOverlap = function() {
    let overlap = 0

    for (row of this.matrix) {
        for (val of row) {
            if (val === -1) {
                overlap++
            }
        }
    }
    return overlap
}

module.exports = Fabric