// Write a Program to add a property to an object?

let abc = { a: "1" };

abc.b = "2";

abc = { ...abc, c: "3" };

console.log(abc);
