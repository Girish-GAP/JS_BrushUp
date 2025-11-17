// Take DOB & Calculate Age

function CalcuateAge(dob) {
  let dobDate = new Date(dob);
  let today = new Date();

  let year = today.getFullYear() - dobDate.getFullYear();
  let month = today.getMonth() - dobDate.getMonth();
  // let day =  today.getDay() - dobDate.getDay() // wrong

  return `${year} year & ${month} month.`;
  // const days = (today - dobDate) / (1000 * 60 * 60 * 24);
}

console.log(CalcuateAge("2001-08-31"));
