//Implement a function that takes an array of numbers and returns the highest number in the array.

let highestNumber = (arr) => {
  let positiveArray = arr.filter((num) => num >= 0);
  positiveArray.sort((a, b) => a - b);
  return positiveArray[positiveArray.length - 1];
};

let array = [-1, , 8, 4, 6, 1, 2, 109, 3, 99, 7, -74, -9, -74, -24, -1, -3];
console.log(highestNumber(array)); //109
