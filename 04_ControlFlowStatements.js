let num1= 100;
let num2= 500;

if(num1>num2) {
    console.log('number 1 is bigger');

}else {
    console.log('number 2 is bigger');
}

//ternary or question mark operator

let age=25;
let isEligible = age >18 ? true : false;

console.log(isEligible);

//switch

let month =5;
let dayCount;
switch(month){
    case 1: case 3: case 5: case 7: case 8: case 10: case 12:
        dayCount= 31;
        break;
    case 4: case 6: case 9: case 11:   
        dayCount= 30;
        break;
    case 2:
        dayCount= 28;
        break;
}
console.log(dayCount);