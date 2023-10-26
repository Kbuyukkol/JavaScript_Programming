let str1= "acdb";
let str2= "dcba";

let arr1= str1.split('');
let arr2= str2.split('');

arr1.sort();
arr2.sort();

console.log(arr1);
console.log(arr2);

console.log(JSON.stringify(arr1)==JSON.stringify(arr2));