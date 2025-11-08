// Create an object and print the property?

const student = {
  name: "Girish",
  age: 24,
  hobby: "science",
};

for (let key in student) {
  console.log(key + " => " + student[key]);
}

console.log(student.name);
