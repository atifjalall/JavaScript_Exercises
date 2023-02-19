let isPrime = (number) => {
  if (number === 1) {
    console.log(`${number} is neither prime nor composite number.`);
  } else if (number > 1) {
    let prime = true;
    for (let i = 2; i < number; i++) {
      if (number % i == 0) {
        prime = false;
        break;
      }
    }
    return prime;
  }
};

console.log(isPrime(4));
