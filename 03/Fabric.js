function Fabric(x, y) {
    this.matrix = []

    for (let h = 0; h <= y; h++) {
        let row = []

        for (let w = 0; w <= x; w++) {
            row.push([])
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
    let dirtyIDs = []

    for (let x = claim.x; x < claim.x + claim.w; x++) {
        for (let y = claim.y; y < claim.y + claim.h; y++) {
            // add to matrix at position
            this.matrix[y][x].push(claim.id)
            
            // if there was another claim already mark all as dirty
            if (this.matrix[y][x].length > 1) {
                dirtyIDs = this.matrix[y][x]
            }
        }
    }

    // console.log(dirtyIDs)
    return dirtyIDs
}


/**
 * Summary.
 * Calculate squares that where claims overlap
 * 
 */
Fabric.prototype.calculateOverlap = function() {
    let overlap = 0

    for (row of this.matrix) {
        for (val of row) {
            if (val.length > 1) {
                overlap++
            }
        }
    }
    return overlap
}

/**
 * Summary.
 * Find if any claims are unique in area
 */
Fabric.prototype.findUnique = function() {
    let overlap = 0

    for (row of this.matrix) {
        for (val of row) {
            if (val.length > 1) {
                overlap++
            }
        }
    }
    return overlap
}

module.exports = Fabric