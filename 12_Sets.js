const mySet1 = new Set();

console.log("--------------Set Methods-----------------");

//add
mySet1.add(1); // Set(1) { 1 }
mySet1.add(5); // Set(2) { 1, 5 }
mySet1.add(5); // Set(2) { 1, 5 }
mySet1.add("some text"); // Set(3) { 1, 5, 'some text' }

const o = { a: 1, b: 2 };
mySet1.add(o);

mySet1.add({ a: 1, b: 2 }); // o is referencing a different object, so this is okay

//has 
mySet1.has(1); // true
mySet1.has(3); // false, since 3 has not been added to the set
mySet1.has("Some Text".toLowerCase()); // true
mySet1.has(o); // true

//size
mySet1.size; // 5

//delete
mySet1.delete(5); // removes 5 from the set
mySet1.has(5); // false, 5 has been removed

mySet1.size; // 4, since we just removed one value

mySet1.add(5); // Set(5) { 1, 'some text', {...}, {...}, 5 } - a previously deleted item will be added as a new item, it will not retain its original position before deletion

console.log(mySet1); // Set(5) { 1, "some text", {…}, {…}, 5 }

//clear
mySet1.clear();
console.log(mySet1); //Set(0) {}

console.log("--------------Iterating-----------------");

const mySet2 = new Set(["a","b","c"]);

for (const item of mySet2) {
    console.log(item);
  }

  console.log("-------------------------------");

  
  for (const item of mySet2.values()) {
    console.log(item);
  }

  console.log("-------------------------------");

  //A Set has no keys. keys() returns the same as values().
  for (const item of mySet2.keys()) {
    console.log(item);
  }
  
   
  console.log("-------------------------------");
  // key and value are the same here
  for (const [key, value] of mySet2.entries()) {
    console.log(key); //OR console.log(value);
  }

  console.log("---------Set<-->Array----------------------");
  
  // Convert Set object to an Array object, with Array.from
  const myArr = Array.from(mySet2); 
  
    
  // converting between Set and Array
  const mySet3 = new Set([1, 2, 3, 4]);
  console.log(mySet3.size); // 4
  console.log([...mySet3]); // [1, 2, 3, 4]
  
    
  // Iterate set entries with forEach()
  mySet3.forEach((value) => {
    console.log(value);
  });
  // 1
  // 2
  // 3
  // 4
  
