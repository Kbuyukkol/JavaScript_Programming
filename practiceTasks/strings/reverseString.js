let word = "JavaScript";
let ch = "";

for (let i = word.length - 1; i >= 0; i--) {
  ch = word.charAt(i);
  console.log(ch);
}

console.log("---------2nd solution----------");

word = word.split("").reverse().join("");

console.log(word);
