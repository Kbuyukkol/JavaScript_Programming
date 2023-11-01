// Factory Function
function createCircle(radius) {
  return {
    radius,
    draw: function () {
      console.log("draw");
    },
  };
}

const circle = createCircle(1);

// Constructor Function
function Circle(radius) {
  //console.log('this',this);
  this.radius = radius;

  let defaultLocation = { x: 0, y: 0 };

  this.getDefaultLocation = function () {
    return defaultLocation;
  };

  this.draw = function () {
    console.log("draw");
  };

  Object.defineProperty(this, "defaultLocation", {
    get: function () {
      return defaultLocation;
    },
    set: function(value){
        defaultLocation= value;
    }
  });
}

const circle2 = new Circle(1);

circle2.location = { x: 1 };
circle2.defaultLocation;
console.log(circle2);

circle2.draw();
