// Does string contain spaces

function checkSpaceInString(str) {
  // return str.indexOf(" ") !== -1 ? true : false;
  return str.includes(" ");
}

console.log(checkSpaceInString("Hello world!"));
