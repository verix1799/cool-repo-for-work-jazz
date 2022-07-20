// function sayHello(greeting, name = 'World') {
//     return `${greeting} ${name}!`;
// }

// console.log('sayHello message:', sayHello('Hi', 'Vedic'));

// var add = function (firstNumber, secondNumber) {
//     return firstNumber + secondNumber;
// }

// console.log('1 + 3 with add:', add(1, 3));

// let calc = add(2, 2)
// console.log(calc)

// TASKS AND USING LOOPS IN FUNCTIONS

// let randomArray = [1, 2, 5, 10];
// var total = 0
// var findingTotal = function (randomArray, total) {

//     for (let i = 0; i < randomArray.length; i++) {
//         total += randomArray[i];

//     }
//     return total;
// }

// var sum = findingTotal(randomArray, total);
// console.log(sum)


// var findingAgeName = function (object, stringFinder) {
//     for (var key in object) {
//         let value = object[key]
//         if (stringFinder == object[key]) {
//             return true
//         }
//     }
//     return false;

// }

// var nameObject = {
//     name: 'Vedic',
//     age: 18
// };

// var finder = findingAgeName(nameObject, 'Vedic');
// console.log(finder)

// OTHER TYPES OF USING FUNCTIONS

// var multiply = (firstNumber, secondNumber) => {
//     return firstNumber * secondNumber;
// }

// console.log('multiply', multiply(7, 19));

// var multiply = (firstNumber, secondNumber) => firstNumber * secondNumber;
// console.log('multiply:', multiply(3, 7));