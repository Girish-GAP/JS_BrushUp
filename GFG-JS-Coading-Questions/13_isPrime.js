// Write a Program to check if a number is prime or not?
// Prime : divided by only 2 number which is 1 and iteself // only 2 factors // factors means the number who divide other no. completely.
// Prime numbers are defined as natural numbers greater than 1 that have only two distinct positive divisors
// numbers less than 0 cannot be prime numbers. Prime numbers are defined as natural numbers greater than 1 that have only two distinct positive divisors: 1 and themselves. Since 0 and numbers less than 0 are not natural numbers greater than 1, they do not fit this definition.

function checkIsPrime(num) {
  if (num <= 1) {
    // 1 is not a prime number. A prime number must be a whole number greater than that has exactly two distinct positive divisors.
    return false;
  }

  for (let i = 2; i <= num / 2; i++) {
    if (num % i === 0) {
      return false; // 1 & no. itself already there any other will become 3 and which is composite no.
    }
  }

  return true;
}

console.log(checkIsPrime(-11));
