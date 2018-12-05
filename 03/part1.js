const fs = require('fs')
const Claim = require('./Claim.js')
const Fabric = require('./Fabric.js')

fs.readFile('./input.txt', function (err, data) {
    if (err) {
        throw err; 
    }

    let inputDataStr = data.toString().split('\n')
    console.log(main(inputDataStr))
});

function createClaims(newClaimsAsStrings) {
    let claims = []

    for (claimString of newClaimsAsStrings) {
        claims.push(new Claim(claimString))
    }

    return claims
}

function main(initialClaims) {
    let claims = createClaims(initialClaims)

    let matrixWidth = 0
    let matrixHeight = 0

    //define fabric Matrix size
    for (claim of claims) {
        let maxW = claim.x + claim.w
        let maxH = claim.y + claim.h

        if (maxW > matrixWidth)
            matrixWidth = maxW

        if (maxH > matrixHeight)
            matrixHeight = maxH
    }

    // create fabric matrix
    let fabric = new Fabric(matrixWidth, matrixHeight)

    // mark claims
    for (claim of claims) {
        fabric.addClaim(claim)
    }

    const overlap = fabric.calculateOverlap()
    return overlap
}
