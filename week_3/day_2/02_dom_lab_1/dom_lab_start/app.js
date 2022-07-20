document.addEventListener('DOMContentLoaded', () => {
    const addingElements = document.createElement('p')
    const list = document.querySelector('body');
    list.appendChild(addingElements);
    const selectingParagraph = document.querySelector('p');
    const innerTExt = selectingParagraph.innerText = "Hey i am Red!";
    const paraStyling = selectingParagraph.style.color = "red";

    const addingAnotherElement = document.createElement('h3')
    list.appendChild(addingAnotherElement);
    const selectingParagraph1 = document.querySelector('h3');
    const innerTExt1 = selectingParagraph1.innerText = "I'm Blue h3!";
    const paraStyling1 = selectingParagraph1.style.color = "blue";


    const container = document.getElementById(('container'));
    const containerStyling = container.style = "background: pink";
    container.style.borderStyle = "solid"
    // const containerAnotherStyling = container.style = "border-color: black"

    const containerElement = document.createElement('h1')
    const containerAnotherElement = document.createElement('p')
    container.appendChild(containerElement);
    container.appendChild(containerAnotherElement)
    const containerHeading = document.querySelector('#container h1');
    const containerParagraph = document.querySelector('#container p')
    const containerContent = containerHeading.innerText = "I'm in a div!";
    const containerContent2 = containerParagraph.innerText = "ME TOO!";
    const containerStyle = containerHeading.style.color = "black";

    favouriteFoodArray = ["Burger", "Mandhi", "Fish and Chips", "Chicken"];
    for (var food of favouriteFoodArray) {
        const foodContainer = document.createElement('div');
        foodContainer.classList.add('foodContainer');
        list.appendChild(foodContainer);
        const listOfFoods = document.createElement('li')
        const getFoodContainer = document.querySelector('.foodContainer')
        getFoodContainer.append(listOfFoods)
        const foodContent = listOfFoods.innerText = food;
        listOfFoods.classList.add('burger')

        // Styling the Food List


        listOfFoods.style.color = "#FFC75F";
        listOfFoods.style.borderStyle = "dotted ";


    }


});