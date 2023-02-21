//Write a program that generates the first n Fibonacci numbers.

let myfunc = (n) => {
  let num1 = 0;
  let num2 = 1;

  for (let i = 1; i < n; i++) {
    let current = num1 + num2;
    num1 = num2;
    num2 = current;
    console.log(current);
  }
};

myfunc(9);
