// Can you write a JavaScript function to check if two objects have the same properties (regardless of order)?

const checkEqualObjKeys = (obj1, obj2) => {
  let k = JSON.stringify(Object.keys(obj1).sort());
  let j = JSON.stringify(Object.keys(obj2).sort());

  if (k !== j) {
    // keys array of obj
    return false;
  }

  // for(let key of Object.keys(obj1)){
  //     if(obj1[key] !== obj2[key]){
  //         return false;
  //     }
  // }

  return true;
};

const o1 = { name: "John", age: 30, city: { "Example City": "a" } };
const o2 = { age: 30, name: "John", city: { "Example City": "a" } };

console.log(checkEqualObjKeys(o1, o2)); // true
