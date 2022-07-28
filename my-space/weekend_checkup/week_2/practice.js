const stops = ["Croy", "Cumbernauld", "Falkirk High", "Linlithgow", "Livingston", "Haymarket"];

const CCYA = {
    classroom: "Sinclair",
    instructors: ["John", "Aqib", "Ash"],
    fun: false,
    topics: {
        week1: "Intro to command line and basic GitHub",
        week2: "Welcome to javascript land!",
        week3: "Welcome to the browser!"
    }
}

console.log(CCYA.instructors[1]);
console.log(CCYA.classroom);
console.log(CCYA.topics.week1)

const removeListElement = CCYA.instructors.pop();
console.log(CCYA.instructors)

const addListKeyValues = CCYA.topics.week3 = "React!";
console.log(CCYA.topics)
