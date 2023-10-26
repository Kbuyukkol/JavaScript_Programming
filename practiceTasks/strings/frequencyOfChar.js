let word = "aabfscccaagghrre";

let frequency = 0;
let ch = "c";

for (let i = 0; i <= word.length - 1; i++) {
  if (ch == word.charAt(i)) {
    frequency += 1;
  }
}
console.log(frequency);
