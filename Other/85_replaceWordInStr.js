//A string string is given. Remove any occurrence of 'bug' by 'flower'. Attention: 'bug' can occur several times in the string.

function bugFixFinalWithIndexOf(string) {
  let find = "bug";
  let idx = string.indexOf("bug");

  while (idx !== -1) {
    let left = string.slice(0, idx);
    let right = string.slice(idx + 3);
    string = left + "flower" + right;
    idx = string.indexOf("bug");
  }

  return string;
}

function bugFixSimple(string) {
  // return string.replaceAll('bug', flower);
  return string.replace(/bug/g, "flower"); // with regex
}

console.log(bugFixFinalWithIndexOf("xxbugYYX")); //xxflowerYYX
console.log(bugFixSimple("bbug"));
console.log(bugFixSimple("bugXYYbugxX")); // flowerXYYflowerxX

// Later write solution without using indexOf
