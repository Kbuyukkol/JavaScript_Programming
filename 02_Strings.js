let str1= "Java";

let str2 = 'Script';

let str3= "awesome";

let result;

result= str1+str2+' '+str3;

console.log(result);

result= `${str1}${str2} ${str3}` // with backticks

console.log(result);

//String methods

let word= "JavaScript Programming";

//length
console.log(word.length); 

console.log(word[0]); //first character

console.log(word[word.length-1]); //last character

//substring 
console.log(word.substring(0,10)); 

//startsWith
console.log(word.startsWith('J')); //true
console.log(word.startsWith('j')); // false

//endsWith
console.log(word.endsWith('g')); //true

//indexOf
console.log(word.indexOf('a')); //1 : first occurence

//slice
console.log(word.slice(0,4)); //Java

//toUpperCase
console.log(word.toUpperCase()); //JAVASCRIPT PROGRAMMING

//toLowerCase
console.log(word.toLowerCase()); //javascript programming

//replace
console.log(word.replace('Script','')); //Java Programming



