let word = "AABBccDDD";
let result = "";


for (let i = 0; i <= word.length - 1; i++) {
  let ch = word.charAt(i);
  if (!result.includes(ch)) {
    result += ch;
  }
}

console.log(result);
