let movie = {
    title: "Dread",
    year: 2012,
    language: {
        mainLang: "English"
    },
    weirdArray: [1, "a string", {
        whoa: "Yeah man"
    }]
}

console.log(movie.year);

movie["Cool-Level"] = "Dread is awesome, no i am not a fanboy";

movie.coollevel = "Dread is awesome, no i am not a fanboy";

delete movie.year


console.log(movie.language.mainLang);
console.log(movie.weirdArray[2].whoa)

for (let key in movie) {
    let value = movie[key]
    console.log(`The ${key} has the value pairing of ${value}`)
}

console.log(Object.keys {
    movies
})

console.log(movies)