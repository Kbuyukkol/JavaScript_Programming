const first= [1,2,3];
const second= [4,5,6];

const merged= first.concat(second);


let mid= [3,4];
let arr2= [1,2,...mid,5,6];
console.log(arr2);

const str1= { name: 'Ali'};
const str2= { job: 'QA'};

const combined= {...str1, ...str2};

console.log(combined);

function howManyElements(...theArgs) {
    console.log(theArgs.length);    
}

howManyElements();
howManyElements(5);
howManyElements(5,7,9,11);

let str= 'JAVASCRIPT';
let chars= [...str];
console.log(chars);
