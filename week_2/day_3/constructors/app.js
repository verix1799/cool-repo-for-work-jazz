const Pet = require('./pet.js')
const Person = require('./Person.js')

const scooby = new Pet("Scooby", "Dog")
// scooby.eat("Scooby Snack")

const shaggy = new Person("Shaggy", scooby)
// shaggy.greet()
console.log("hello did I crash?")


shaggy.feedPet("his Snack")