//Write a function that takes an array of numbers and returns a new array that contains only the numbers that are prime.

let isPrime = (array) => {
  let primeArray = [];
  let checkPrime = (num) => {
    let prime = true;
    if (num === 1) {
      return false;
    } else
      for (let i = 2; i < num; i++) {
        if (num % i == 0) {
          prime = false;
          break;
        }
      }
    return prime;
  };

  for (let i = 0; i < array.length; i++) {
    if (checkPrime(array[i])) {
      primeArray.push(array[i]);
    }
  }

  return primeArray;
};
let array = [1, 2, 6, 8, 9, 7, 3, 5];
console.log(isPrime(array));
