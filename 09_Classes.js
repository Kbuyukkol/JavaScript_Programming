let car = {
  make: "Renault",
  year: 2023,
  drive : function () {
    console.log("Running on LPG");
}
};

class Car {
  constructor(make, year) {
    this.make = make;
    this.year = year;
  }
  drive() { // method
    console.log("Running on LPG");
}
}

let myCar = new Car("Toyota",2020);
console.log(myCar);
myCar.drive();

console.log(car);
car.drive();
