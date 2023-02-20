//Write a function that takes an array of numbers and returns a new array that contains only the unique numbers in the array.

let myfunc = (arr) => {
  return (uniq = [...new Set(arr)]);
};

let myarray = [1, 2, 3, 2, 4, 5, 1];
console.log(myfunc(myarray));
