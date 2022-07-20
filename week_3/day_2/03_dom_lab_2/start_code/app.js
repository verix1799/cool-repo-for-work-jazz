document.addEventListener('DOMContentLoaded', () => {

  const products = document.querySelector('#products');
  for (const product of data.products) {
    const unorderedList = document.createElement('ul');
    unorderedList.classList.add('product');
    products.appendChild(unorderedList);

    elementsWithClassProduct = document.querySelectorAll('.product');
    console.log(elementsWithClassProduct)

    for (const element of elementsWithClassProduct) {
      element.setAttribute("style", "border: solid 1px black;");
    }

    const childLists = document.createElement('li');
    childLists.innerText = product.name;
    unorderedList.appendChild(childLists)
  }






});