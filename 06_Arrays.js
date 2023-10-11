let scores = new Array(); //creates an empty array

let numbers = new Array(10); // size is 10

let emptyArray = []; ///creates an empty array

console.log(scores); // []
console.log(numbers); //[ <10 empty items> ]
console.log(emptyArray); // []

let myNumbers = new Array(1,3,5,7);
console.log(myNumbers);

let colors= ["red", "green"];
console.log(colors);
console.log(typeof colors);

//indexes
console.log(colors[0]); //red

colors.push("gray"); // adds element to the end
console.log(colors);

colors.unshift("purple"); // adds element to the beginning
console.log(colors);

colors.pop() ; // removes the last element
console.log(colors);

console.log(colors.length);

// for of 
for (let value of colors) {
    console.log(value);
}

// for each
colors.forEach(element => {
    console.log(element);
});
