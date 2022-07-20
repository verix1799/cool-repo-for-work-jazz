const myNumbers = [1, 2, 3, 4, 5];

// // INTRODUCTION
// // for (const number of myNumbers) {
// //     console.log('This is number' + number);
// // };
// // const testingForEach = (target) => {
// //     if (target === ) {
// //         console.log("It Worked")
// //     }
// // }

// // USING FUNCTIONS WITH FOR EACH
// // const myForEachFunction = (number) => {
// //     console.log(number)
// // }
// // myNumbers.forEach(testingForEach());

// // myNumbers.forEach((number, index, array) => {
// //     console.log(`This is number ${number} is at the index ${index}`)
// //     console.log(array)
// // })

// // USING CALCULUS IN FOR EACH
// // const multiplyByTwo = (numbers, target) => {        
// //     const result = [];
// //     var result2 = 'It worked';
// //     numbers.forEach((numbers) => {
// //         const multiplied = numbers * 2
// //         // if (numbers === target) {
// //         //     result2 = 'It worked .......';
// //         // }
// //         result.push(multiplied)
// //     })

// //     return result
// // }


// MAP
// const timesTwo = (number) => {
//     return number * 2
// }
// const multiplyByTwo = (numbers) => {
//     const result = numbers.map((number) => {
//         return number * 2
//     })
//     return result;

// }

// const resultOfMultiplication = multiplyByTwo(myNumbers);
// console.log('USING MAP FOR DOING MULTIPLICATION \n', resultOfMultiplication);

const easyMultiplication = myNumbers.map(numbers => numbers * 2);
console.log('USING MAP FOR DOING MULTIPLICATION \n', easyMultiplication);

// // console.log(multiplyByTwo(myNumbers))
// // const sumElements = (numbersArray) => {
// //     let total = 0
// //     numbersArray.forEach((numbers) => {
// //         total += numbers

// //     })
// //     return total
// // }
// // console.log(sumElements(myNumbers)) 

// Reduce

// const sumElements = (numbersArray) => {
//     const reduceResult = numbersArray.reduce((previousValue, nextValue) => {
//         return previousValue + nextValue
//     })
//     return reduceResult;
// }

const easySumElements = myNumbers.reduce((previousValue, nextValue) => previousValue + nextValue);
console.log('USING REDUCE FOR SUMING ELEMENTS \n', easySumElements)

// const result1 = sumElements(myNumbers);
// console.log('USING REDUCE FOR SUMING ELEMENTS \n', result1)


// // EVENS FUNCTION
// // const getEvens = (numbersArray) => {
// //     const evensArray = []
// //     numbersArray.forEach(number => {
// //         if (number % 2 === 0) {
// //             evensArray.push(number)
// //         }
// //     });

// //     return evensArray
// // }

// // console.log(getEvens(myNumbers));


// // FILTER 
const result2 = myNumbers.filter(number => number % 2 === 0)
console.log('USING FILTER \n', result2)

// const filtered = (numbersArray) => {
//     const filteredArray = numbersArray.filter((number) => {
//         return number % 2 === 0;
//     })
//     return filteredArray
// }

// console.log(filtered(myNumbers))


// How it looks like on code
const outForEach = (array, callBack) => {
    for (const element of array) {
        callBack(element)
    }
}