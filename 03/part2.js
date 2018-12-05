const fs = require('fs')
const Claim = require('./Claim.js')
const Fabric = require('./Fabric.js')

fs.readFile('./input.txt', function (err, data) {
    if (err) {
        throw err; 
    }

    let inputDataStr = data.toString().split('\n')
    main(inputDataStr)
});

function createClaims(newClaimsAsStrings) {
    let claims = new Map()

    for (claimString of newClaimsAsStrings) {
        let claim = new Claim(claimString)

        claims.set(claim.id, claim)
    }

    return claims
}

function main(initialClaims) {
    let claims = createClaims(initialClaims)

    let matrixWidth = 0
    let matrixHeight = 0

    //define fabric Matrix size
    for ( let value of claims.values() ) {
        let maxW = value.x + value.w
        let maxH = value.y + value.h

        if (maxW > matrixWidth)
            matrixWidth = maxW

        if (maxH > matrixHeight)
            matrixHeight = maxH
    }

    // create fabric matrix
    let fabric = new Fabric(matrixWidth, matrixHeight)

    // mark claims
    for ( let value of claims.values() ) {
        let dirtyIDs = fabric.addClaim(value)

        for (id of dirtyIDs) {
            let obj = claims.get(id)
            obj.dirty = true
            claims.set(id, obj)
        }
    }

    var unique = []

    for ( let value of claims.values() ) {
        if (value.dirty == false) {
            console.log(value.id)
            unique.push(value.id)
        }
    }

    return unique
}

// add claims to matrix
// mark self and any overlapping claims as dirty
// 

