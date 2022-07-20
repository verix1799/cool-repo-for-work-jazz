const Person = function (name, pet) {
    this.name = name
    this.pet = pet


    // Can use Return but prints just the object as it is
    // You can add the name "Shaggy" here but not what we need
}

// Protoype
Person.prototype.greet = function () {
    console.log(`Hi my name is ${this.name}`)
}

Person.prototype.feedPet = function (food) {
    console.log(`${this.name} fed ${this.pet.petName} ${food}`)
    console.log(`${this.pet.eat(food)}`)
}



module.exports = Person


// Object.getPrototypeOf(shaggy)

// alt shift down

// If you console log console log it will return undefined

// using , to export multiple functions