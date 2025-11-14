/*
Password Security II.
Given are two strings password and password_repeat. Check if the password is secure by the following critera:
- both passwords must match
- password must be at least 8 chars
- contains at least a number
- contains at lease an uppercase letter
- contains at least a lowercase letter
- contains at least one of these special chars (&$%§-_)

Return true only if all criteria are met, otherwise return false
*/

function checkPassword(password, password_repeat) {
  if (password !== password_repeat || password.length < 8) {
    return false;
  }
  const specialChar = ["&", "$", "%", "§", "-", " _"];
  const checkUpperCase = (char) => {
    return char.toUpperCase() === char;
  };

  let conditions = ["n", "u", "l", "s"];

  for (let char of password) {
    for (let check of conditions) {
      if (check === "n" && !Number.isNaN(parseInt(char))) {
        let idx = conditions.indexOf("n");
        conditions.splice(idx, 1);
      }
      if (check === "u" && checkUpperCase(char)) {
        let idx = conditions.indexOf("u");
        conditions.splice(idx, 1);
      }
      if (check === "l" && !checkUpperCase(char)) {
        let idx = conditions.indexOf("l");
        conditions.splice(idx, 1);
      }
      if (check === "s" && specialChar.includes(char)) {
        let idx = conditions.indexOf("s");
        conditions.splice(idx, 1);
      }
    }
  }
  return conditions.length === 0;
}

console.log(checkPassword("YY&glk4Hfi_ffS", "YY&glk4Hfi_ffS")); // true

console.log(checkPassword("JoFDd#0MY6Ad4", "JoFDd#0MY6Ad4")); // false
