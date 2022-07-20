// // 1.
// var secretsFunction = function () {
//     var pinCode = [0, 0, 0, 0];
//     console.log('pinCode inside secretsFunction:', pinCode);
//     // -> pinCode inside secretsFunction: [ 0, 0, 0, 0 ]
// }

// secretsFunction();
// console.log('pinCode outside secretsFunction:', pinCode);
// // -> ReferenceError: pinCode is not defined

// // 2.
// var filterNamesByFirstLetter = function (names, letter) {
//     var filteredNames = [];
//     for (var name of names) {
//         if (name[0] === letter) {
//             filteredNames.push(name);
//         }
//     }
//     return filteredNames
// }

// var students = ['Alice', 'Bob', 'Alyssia', 'Artem', 'Babs'];
// var filteredStudents = filterNamesByFirstLetter(students, 'A');
// console.log('filteredStudents:', filteredStudents);

// 3.
let temperature = 30;

if (temperature > 15) {
    let jacket = false;
    var happy = true;
} else {
    let jacket = true;
    var happy = false;
}

console.log('jacket after if-else blocks:', jacket);
console.log('happy after if-else blocks:', happy);