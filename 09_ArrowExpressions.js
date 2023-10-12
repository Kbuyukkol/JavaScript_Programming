let x = function (a) {
  return 5 * a;
};

let y = (a) => 5 * a;
console.log(y(6));

let arr = [5, 10, 20];

let newArr = arr.map((x) => x * 2);

console.log(newArr);

let mid= [3,4];
let arr2= [1,2,...mid,5,6];
console.log(arr2 );

function howManyElements(...theArgs) {
    console.log(theArgs.length);    
}

howManyElements();
howManyElements(5);
howManyElements(5,7,9,11);

let str= 'JAVASCRIPT';
let chars= [...str];
console.log(chars);