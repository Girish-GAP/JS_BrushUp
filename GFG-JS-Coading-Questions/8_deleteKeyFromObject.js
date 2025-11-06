//  Write a Program to delete a property from an object?

const keyToRemove = "c";
const obj1 = { a: "1", b: "2", c: "3" };

delete obj1.a; // update referance
console.log(obj1); //  b : '2', c : '3'

const { b, ...restObj } = obj1; // don't update referance
console.log(restObj); // c : '3'

const { c: temp, ...newObj } = restObj;
console.log(newObj); // {}

// Intresting :
// console.log(c); // undefined
console.log(temp); // 3 // new name of c
