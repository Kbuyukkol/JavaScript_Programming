let scores = new Array(); //creates an empty array

let numbers = new Array(10); // size is 10

let emptyArray = []; ///creates an empty array

console.log(scores); // []
console.log(numbers); //[ <10 empty items> ]
console.log(emptyArray); // []

let myNumbers = new Array(1, 3, 5, 7);
console.log(myNumbers);

let colors = ["red", "green"];
console.log(colors);
console.log(typeof colors);

console.log("--------------Array methods----------------------");

//length
console.log(colors.length); //2

//indexes
console.log(colors[0]); //red

//indexOf
console.log(colors.indexOf("green")); //1

//at
console.log(colors.at(-2)); //red
console.log(colors.at(-3)); //undefined

//reverse
console.log(colors.reverse());


//push : adds element to the end
colors.push("gray");
console.log(colors);
console.log(colors.length); //3

// unshift: adds element to the beginning
colors.unshift("purple");
console.log(colors);
console.log(colors.length); //4

//sort
console.log(colors.sort());

//pop: removes the last element
colors.pop();
console.log(colors);
console.log(colors.length); //3

//shift: removes the first element
colors.shift();
console.log(colors);
console.log(colors.length); //2

//splice: removes from the starting point index
colors.splice(colors.indexOf("purple"));
console.log(colors);
console.log(colors.length); //1

//concat
let myArray = ['1', '2', '3'];
myArray = myArray.concat('a', 'b', 'c');
console.log(myArray);




console.log("--------------Accessing every item----------------------");

let nums = [2, 3, 5, 7, 11];

// for of
for (let value of nums) {
  console.log(value);
}

console.log("-----------------------------");

// for each
nums.forEach((element) => {
  console.log(element);
});

console.log("-----------------------------");

let dataMix = [5, "Ali", true, undefined];

dataMix.forEach((element) => {
  console.log(typeof element);
});




