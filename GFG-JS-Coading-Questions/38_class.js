// Write a Program to create a simple class in JavaScript?

class Student {
  // const name = "";
  #age = "";
  static grade = "A";

  constructor(name, age) {
    this.name = name;
    this.#age = age;
  }

  static add(a, b) {
    return a + b;
  }

  getInfo = () => {
    return `Name is ${this.name} & age is ${this.#age}`;
  };
}

const roll1 = new Student("GIRISH", 24);
const roll2 = new Student("PAWAR", 19);

// roll1.add(4,4); ERROR // You cannot access static members using an object:
console.log(roll2.getInfo());
// console.log(roll1.#age) // ERROR

//Static members belong to the class itself, not instances.
//You cannot access static members using an object:
console.log(Student.grade);
console.log(Student.add(5, 10));
