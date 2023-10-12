let stateOfTheWebPage = function (state) {
  return new Promise(function (resolve, reject) {
    if (state) {
      resolve("page is loaded");
    } else {
      reject("page is not loaded yet");
    }
  });
};

console.log(stateOfTheWebPage(true).then(function(result){
    console.log(result);
}));
