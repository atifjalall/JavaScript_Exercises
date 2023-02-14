//Create a function that takes a number and returns its factorial.

let factorial = (num) => {
  return num == 0 ? 1 : num * myfunc(num - 1);
};

console.log(factorial(4)); //24
