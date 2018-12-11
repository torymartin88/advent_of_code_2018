function Guard(id) {
    this.events = []
}

Guard.prototype.addEvent = function(date, text) {
    this.events.push({
        date: date,
        text: text
    })

    return 0
}

Guard.prototype.minutesAsleep = function() {
    for (event of this.events) {
        console.log(event)
    }
}

module.exports = Guard