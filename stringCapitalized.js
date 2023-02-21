//Implement a function that takes a string as input and returns the string with the first letter of each word capitalized.

let myFunc = (str) => {
  let splitedString = str.split(" ");
  let result = "";

  for (let i = 0; i < splitedString.length; i++) {
    let splited = splitedString[i].split("");
    let firstLetter = splitedString[i].slice(0, 1).toUpperCase();
    splited.shift();
    let restString = splited.join("");
    result += firstLetter + restString + " ";
  }

  return result.trim();
};

console.log(myFunc("my name is atif"));
