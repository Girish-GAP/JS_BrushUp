// Write a function to chop a string into chunks of a given length and return it as array

function stringChop(str, chop = 0) {
  if (chop === 0 || chop > str.length) {
    return [str];
  }

  let arr = [];
  let idx = 0;

  while (str.length > 0) {
    arr.push(str.slice(0, chop));
    str = str.slice(chop);
  }

  return arr;
}

// Example
console.log(stringChop("JavaScript")); // ["JavaScript"]
console.log(stringChop("JavaScript", 11)); // ["Ja", "va", "Sc", "ri", "pt"]
console.log(stringChop("JavaScript", 3)); // ["Jav", "aSc", "rip", "t"]
