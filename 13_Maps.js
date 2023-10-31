// Create a Map
const fruits = new Map([
    ["apples", 500],
    ["bananas", 300],
    ["oranges", 200]
  ]);

  console.log("---------------Maps Methods-------------------");

  
const items = new Map();

//set: add elements to a Map

items.set("pens", 500);
items.set("pencils", 300);
items.set("notebooks", 200);

console.log(items);

// Set method can also be used to change existing Map values
items.set("pens",450);

console.log(items);

//get: gets the value of a key in a Map
items.get("pencils"); //300

//size
console.log(items.size);

//delete: removes a Map element
items.delete("notebooks");
console.log(items.size);

//has
items.has("notebooks"); //false

console.log("---------------Iterating-------------------");

for (const item of items) {
    console.log(item);
  }

  items.forEach((value) => {
    console.log(value);
  });