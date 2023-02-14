//Implement a function that checks if a given array contains a given value. The function should return true if the value is found, and false otherwise.

let searchElement = (array, item) => {
  return array.includes(item);
};

let search = 9;
let array = [1, 2, 3, 45, 6, 7, 8, 9, 10];
console.log(searchElement(array, search)); //true
