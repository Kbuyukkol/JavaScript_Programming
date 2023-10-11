function add(a,b) {
    console.log(a+b);
};

add(10,14);  //calling a function

function multiply(a,b) {
    return a*b;
}

console.log(multiply(10,5));

add(10,14,56); //24 ignores after second parameter

let division = function (a,b) {
    return a/b;
}

console.log (division(10,2)); //5

let div= division;

console.log (div(10,2)); //5