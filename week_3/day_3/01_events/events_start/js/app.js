document.addEventListener('DOMContentLoaded', () => {
  console.log('JavaScript has loaded');

  const handleButtonClick = function () {
    const resultParagraph = document.querySelector('#button-result');

    resultParagraph.innerHTML = "The button has been clicked";
  }

  // const handleInput = function (event) {

  //   const inputParagraph = document.querySelector('#input-result');

  //   inputParagraph.innerHTML = `You typed ${event.target.value}`;

  // }
  const button = document.querySelector('#button');
  button.addEventListener('click', handleButtonClick)

  const textInput = document.querySelector('#input');
  // textInput.addEventListener("input", handleInput)

  // using keydown for detecting input

  textInput.addEventListener("keydown", event => {
    const inputParagraph = document.querySelector('#input-result');

    inputParagraph.innerHTML = `You typed: ${event.target.value}`;
    // do something
  });

  const dropDown = document.querySelector('#select');

  dropDown.addEventListener("change", event => {

    const dropDownParagraph = document.querySelector('#select-result');
    dropDownParagraph.innerHTML = `You went with: ${event.target.value}`
  })

  const handleFormSubmit = function (event) {
    event.preventDefault();
    const formResult = document.querySelector('#form-result');
    formResult.innerHTML = `Your Name: ${event.target.first_name.value} ${event.target.last_name.value}`;
  }

  const form = document.querySelector('#form')
  form.addEventListener('submit', handleFormSubmit)

});