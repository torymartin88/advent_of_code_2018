const Claim = require('./Claim.js')
const Fabric = require('./Fabric.js')

let newClaims = [
    '#1 @ 1,3: 4x4',
    '#2 @ 3,1: 4x4',
    '#3 @ 5,5: 2x2'
]

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
    console.log(overlap)
    return overlap
}

main(newClaims)
