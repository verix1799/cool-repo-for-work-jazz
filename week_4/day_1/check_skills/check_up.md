# Weekend Check Up! 

So this homework will be a brief recap of the core programming skills we have learnt so far. 

I will not chase people if they do not do this work, but as a tool for reflecting and understanding if you have gaps in your knowledge this will be very useful. 

I have chosen these tasks as I feel they are the most important to understand in terms of your internships and it's important that we understand these concepts before going onto React.

Don't panic if you are unable to answer some! This is a point to celebrate as you now have identified a gap in your knowledge! 

If you struggled or didn't quite understand any of these, feel free to send me a slack message on Monday and I can help fill those gaps!




## Command Line Task

- Create a new folder in your home directory (`~`) called `weekend_checkup`
- Change directory into the folder you have created and create a folder called `week_1` 
- Inside the `weekend_checkup` folder, create two files: one called `hello_world.txt` and one called `ccya.md` 
- Create a folder inside week 1 called `command_line_practice` 
- Move the files you have created in to `weekend_checkup` folder to your `command_line_practice` folder. 
- Make a copy of your `command_line_practice` folder on your desktop (`~/Desktop`) 
- WOOPS! In classic CodeClan fashion this was a mistake, delete the folder you just copied to desktop. (using the command line)
- Finally create a `week_2` folder in your `weekend_checkup` folder and create a file called `practice.js` 
- Copy and paste the data structures (the array and the object) into this file when working on the next tasks. 



## Manipulating Arrays 


```js
const stops = [ "Croy", "Cumbernauld", "Falkirk High", "Linlithgow", "Livingston", "Haymarket" ]
```


- 1. Add "Edinburgh Waverley" to the end of the Array
- 2. Add "Glasgow Queen St" to the start of the Array
- 3. Add "Polmont" at the appropriate point (between "Falkirk High" and "Linlithgow")
- 4. Delete "Cumbernauld" from the Array by index
- 5. Print out all the stops using a for loop


## Manipulating Objects

```js

const CCYA = {
    classroom: "",
    instructors: ["John", "Aqib", "Ash"]
    fun: false 
    topics: {
        week1: "Intro to command line and basic GitHub",
        week2: "Welcome to javascript land!",
        week3: "Welcome to the browser!" 
    }
}


```

Console log the following, remember when dealing with nested structures (Objects within objects) like the one above it is best to break it down when trying to access data. 

- 1.`"Aqib"` from the the array. 
- 2. The value held under the `classroom` key 
- 3. The value held under the key `week3` 

Now we are looking to modify the data structures without changing the starting code. Use `console.log(CCYA)`  to check your answers. 

- 4.  Remove `Ash` from the instructors array
- 5. Add a key value pair of `week4: "React!"` to the object held under `topics` 

## Loops 


Create a `week_3` folder in your `weekend_checkup` folder, then create `loops_and_arrays_functions.js` inside that folder.

```js

const combat_sports = ["Sambo", "Muay Thai", "Brazilian Jiu Jitsu", "Boxing","Kick Boxing"]

```


1. First create a loop to `console.log` each item in the array. 

2. Create a loop that has an `if` statement that will `console.log` the string `"John does that!"` when the item is either `"Muay Thai"` or  `"Brazilian Jiu Jitsu"`

3. Do the same thing again but using the `forEach()` method that comes attached to arrays

4. Use the `filter()` higher order function to create an array that only contains the sports with more than 8 characters (including spaces) (Hint! strings also have a `.length` property that returns how long the string is)