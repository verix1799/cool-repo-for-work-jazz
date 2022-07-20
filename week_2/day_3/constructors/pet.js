const Pet = function (petName, species) {
    // Instance Variables
    this.petName = petName
    this.species = species

}

Pet.prototype.eat = function (food) {
    return `${this.petName} ate ${food}`
}


module.exports = Pet