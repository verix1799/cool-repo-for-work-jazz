const Bus = require('./bus.js')
const Person = require('./person.js')

// Initialising instances


// var howManyPassengersAreTraveling = ;

// Inititalising instances for Person Class 
const Person1 = new Person("Vedic", 18)
const Person2 = new Person("asdasdad", 17)
const Person3 = new Person("kkasdasd", 17)
const Person4 = new Person("Dug", 17)
const Person5 = new Person("Dasdasdasdug", 17)
const Person6 = new Person("asasdasd", 17)
const Person7 = new Person("akdkd", 17)
const Person8 = new Person("adsad", 17)
const firstBus = new Bus("38", 0, "Falkirk", [])
firstBus.driveBus()
// if (howManyPassengersAreTraveling) {
//     firstBus.addPassenger()
// }

people = [Person1, Person2, Person3, Person4, Person5, Person6, Person7, Person8]

for (let person of people) {
    firstBus.addPassenger(person)
}



firstBus.passengerOutBus()
firstBus.finalDestination("Edinburgh")

console.log(firstBus.passengers)
console.log(firstBus.passengerCount())