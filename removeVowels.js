//Write a function that takes a string as input and returns a new string with all the vowels removed.

let myfunc = (str) => {
  return (noVowels = str.replaceAll(/[aeiou]/gi, ""));
};
let mystring = "the quick brown fox jumps the lazy dog";
console.log(myfunc(mystring));
