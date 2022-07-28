const combat_sports = ["Sambo", "Muay Thai", "Brazilian Jiu Jitsu", "Boxing", "Kick Boxing"]

// for (var sport of combat_sports) {
//     console.log(sport);
// }

// for (var element in combat_sports) {
//     if (combat_sports[element] === "Muay Thai" || combat_sports[element] === "Brazilian Jiu Jitsu") {
//         console.log("John Does That \n")

//     }
// }

combat_sports.forEach((sport) => {
    if (sport === "Muay Thai" || sport === "Brazilian Jiu Jitsu") {
        console.log(`John Does that ${sport} \n`)

    }
});

const result = combat_sports.filter((sport) => {
    const characterLimitedArray = []
    const lengthOfSport = sport.length;
    return lengthOfSport > 8;
});

console.log(result)