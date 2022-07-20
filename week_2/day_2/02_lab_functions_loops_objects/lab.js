// PART 1
var total = 0

function totalNumbers(numberArray, total) {
    for (let i = 0; i < randomArray.length; i++) {
        total += randomArray[i];
    }
    return total;
}

let randomArray = [2, 5, 1, 4];
var sum = totalNumbers(randomArray, total);
console.log(sum);

// PART 2

function findingEvenNumbers(numberArray) {
    const arrayTobeReturned = []

    for (let number of numberArray) {
        if (number % 2 === 0) {
            arrayTobeReturned.push(number);
        }
    }
    return arrayTobeReturned

}
console.log(findingEvenNumbers(randomArray));

//  Part 3

var myBill = [{
    meal: 'Green Curry',
    price: 10,
    customer: 'Sally'
}, {
    meal: 'Sea Bass',
    price: 12,
    customer: 'Upul'
}, {
    meal: 'Fish and Chips',
    price: 10,
    customer: 'Rita'
}, {
    meal: 'Stick Toffee Pudding',
    price: 4,
    customer: 'Upul'
}, {
    meal: 'Apple Pie',
    price: 5,
    customer: 'Sally'
}]

let totalBill = (bill) => {
    var total = 0;
    for (var item of bill) {
        total += item.price
    }
    return total
}

console.log(totalBill(myBill));

// 2b
let findMeal = (bill, customerName) => {
    var total = 0
    var newArray = []
    for (var item of bill) {
        if (customerName === item.customer) {
            newArray.push(item.meal)
        }
    }
    return newArray
}
console.log(findMeal(myBill, 'Sally'))


// 2c 
let findTotalByCustomerName = (bill, customerName) => {
    var total = 0

    for (var item of bill) {
        if (customerName === item.customer) {
            total += item.price
        }
    }
    return total
}
console.log(findTotalByCustomerName(myBill, 'Sally'))

// 2d 
let findAveragePrice = (bill) => {
    var lengthOfBill = bill.length;
    console.log(lengthOfBill)

    var total = 0
    var counter = 0
    for (var elements of bill) {
        total += elements.price
        counter = total / lengthOfBill
    }
    return counter
}
console.log(findAveragePrice(myBill))

// var totalInObjects = function (bill) {
//     total = 0
//     for (let key in bill) {
//         console.log(`${key}: ${mobile[key]}`)
//     }
// }

// for (key in myBill) {
//     console.log(key.price)
// }
// console.log(totalInObjects(myBill[0]))