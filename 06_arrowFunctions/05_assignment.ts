var isPrime = (n: number) => {
  let flag = 0;
  for (let i = 2; i < n; i++) {
    if (n % i === 0) {
      flag = 1;
      break;
    }
  }
  if (flag === 0) {
    console.log("Prime");
  } else {
    console.log("Not a Prime");
  }
};

isPrime(7);
isPrime(4);
