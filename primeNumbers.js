isPrime = (num) => {
  if (num <= 1) {
    return false;
  }

  for (let i = 2; i <= Math.sqrt(num); i++) {
    if (num % i === 0) {
      console.log(num);
    }
  }

  return true;
};

listPrime = (limit) => {
  for (let i = 2; i < limit; i++) {
    let flag = true;

    for (let j = 2; j < i; j++) {
      if (i % j === 0) {
        flag = false;
        break;
      }
    }
    if (flag == true) {
      console.log(i);
    }
  }
};

console.log(isPrime(3)); // Output: true
listPrime(10);
