function Claim(claimString) {
    let split = claimString.split(' ')

    // parse id (#1)
    this.id = parseInt(split[0].slice(1, split[0].length))

    // parse x, y (1,2)
    let splitCoords = split[2].replace(/:/g, '').split(',')
    this.x = parseInt(splitCoords[0])
    this.y = parseInt(splitCoords[1])

    // parse w, h (1x1)
    let splitDimensions = split[3].split('x')
    this.w = parseInt(splitDimensions[0])
    this.h = parseInt(splitDimensions[1])

    this.dirty = false
}

Claim.prototype.getArea = function() {
    return this.w * this.h
}

module.exports = Claim