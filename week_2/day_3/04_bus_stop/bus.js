const Bus = function (routeNumber, distance, destination, passengers, person) {
    // Properties of the Bus Class
    this.routeNumber = routeNumber
    this.distance = distance
    this.destination = destination
    this.passengers = passengers // empty array 

}
// Prototype Methods

Bus.prototype.driveBus = function () {
    this.distance = this.distance + 10
    console.log(this.distance)
}

Bus.prototype.passengerCount = function () {
    return this.passengers.length
}

Bus.prototype.addPassenger = function (person) {
    this.passengers.push(person)
}
Bus.prototype.passengerOutBus = function (person) {
    this.passengers.pop(person)
}

Bus.prototype.finalDestination = function (currentDestination) {
    if (this.destination === currentDestination) {
        this.passengers = []
    }
}

module.exports = Bus