let person = {
  firstName: "Joe",
  lastName: "Doe",
};

console.log(typeof person);
console.log(person);
console.log(person.firstName);

let address = {
  "building no": 5555,
  street: "Talay",
  state: "Ankara",
};

console.log(address);
console.log(address["building no"]);

// adding a new propert to object
person.age = 30;
console.log(person);

// deleting a new propert to object
delete person.age;
console.log(person);

console.log("firstName" in person); //true

let course = {
  name: "JS",
  url: "www.javascript.info",
  subjects: ["Variables", "Loops", "If Statements"],
};

console.log(course);

for (let key in course) {
  console.log(key + " :" + course[key]);
}

let myCar ={
    make : 'Renault',
    year : 2023,
    engine: {
        cylinders : 3,
        size: 2.0
    },
    extras: ['AC', 'Cruise Control'],
    drive : function () {
        console.log("Running on LPG");
    }
}

myCar.drive();

console.log(myCar.extras[0]);
