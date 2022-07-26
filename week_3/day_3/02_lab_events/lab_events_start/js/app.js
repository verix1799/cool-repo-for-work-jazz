document.addEventListener('DOMContentLoaded', () => {
  console.log('JavaScript loaded');


  const saveButton = function (event) {
    event.preventDefault();

    // for (var item of readingList) {
    const listOfItems = document.createElement('li');

    const getListContainer = document.querySelector('#reading-list')
    getListContainer.appendChild(listOfItems);
    listOfItems.appendChild(titleElement);
    listOfItems.appendChild(authorElement);
    listOfItems.appendChild(bookElement)
    // }
  }

  const form = document.querySelector('#new-item-form')
  form.addEventListener('submit', saveButton)


  // Title
  const titleInput = document.querySelector('#title');
  const titleElement = document.createElement('h3')

  const list = document.querySelector('#reading-list');
  titleInput.addEventListener("keyup", event => {

    list.appendChild(titleElement);
    titleElement.textContent = `The Title is: ${event.target.value} `;
    var brElement = document.createElement('br');
    list.appendChild(brElement);
  });

  // Author
  const authorInput = document.querySelector('#author');
  const authorElement = document.createElement('h4');

  const list2 = document.querySelector('#reading-list');
  authorInput.addEventListener("keyup", event => {
    list2.appendChild(authorElement);
    authorElement.textContent = `The Author is: ${event.target.value} `;


  });

  // Drop Down
  const selectElement = document.querySelector('#category');
  const bookElement = document.createElement('h4');
  const list3 = document.querySelector('#reading-list');
  selectElement.addEventListener("change", event => {
    list3.appendChild(bookElement)
    bookElement.textContent = `You went with: ${event.target.value} `

  })

  // let readingList = [titleElement, authorElement]
  // console.log(readingList)
})