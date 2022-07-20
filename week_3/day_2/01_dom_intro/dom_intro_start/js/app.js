document.addEventListener('DOMContentLoaded', () => {
    const title = document.querySelector('h1');
    title.innerHTML = 'Javascript says, Hello World';
    const welcomeParagraph = document.querySelector('#welcome-paragraph');
    console.dir(welcomeParagraph);
    const redListItem = document.querySelector('li.red');
    redListItem.style.color = "#FF6F91";
    redListItem.innerHTML = "custom color";
    redListItem.classList.add('bold');
    console.dir(redListItem);

    const allListRedElements = document.querySelectorAll('li');
    console.dir(allListRedElements);

    const newListItem = document.createElement('li');
    newListItem.textContent = 'Purple';
    newListItem.classList.add('purple');
    const list = document.querySelector('ul');
    list.appendChild(newListItem);
});



// const title = document.querySelector('h1');
// title.innerHTML = 'Javascript says, Hello World';
// const consoleDocument = document.querySelectorAll('#welcome-paragraph');
// console.dir(consoleDocument);