// ARRAYS

let sports = ["Football", "BJJ", "Boxing", "Baseball", "Cricket"];

let numberOfSports = sports.length;

// console.log('The first sport is:', sports[0]);

// sports.push("Hockey");

// sports.pop();

// sports.unshift("Hockey");

// sports.shift();

// let removedSports = sports.splice(2, 2)

// console.log(removedSports);

// let addSports = sports.splice(0, 0,"Muay Thai");

// console.log(sports);


// FOR LOOPS


// for (let currentSpotInIterable of iterable) {
// }

for (let currentSport of sports) {
    let upperCaseSport = currentSport.toUpperCase()    
    console.log(upperCaseSport);
}

for (let i = 0; i < sports.length; i++) {
    console.log("wow sports");
}