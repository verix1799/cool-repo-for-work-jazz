var setDefinitionText = function (id, text) {
  var span = document.querySelector(id);
  span.innerText = text;
}

var getInputValue = function (id) {
  var input = document.querySelector(id);
  var value = input.value;
  input.value = '';
  return value;
}

var handleButtonClick = function () {
  var name = getInputValue('#name');
  var species = getInputValue('#species');

  var pet = {
    name: name,
    species: species
  };

  setDefinitionText('#name-display', pet.name);
  setDefinitionText('#species-display', pet.species);

  let jsonString = JSON.stringify(pet);
  localStorage.setItem('pet', jsonString);
}

var app = function () {
  var button = document.querySelector('button');
  button.addEventListener('click', handleButtonClick);

  let jsonString = localStorage.getItem('pet')
  let savedPet = JSON.parse(jsonString)
  setDefinitionText('#name-display', savedPet.name)
  setDefinitionText('#species-display', savedPet.species)

}

window.addEventListener('load', app);