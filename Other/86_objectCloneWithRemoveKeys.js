/// Given is an object object. Return a clone of the object except the object properties given in the array removeProperties.

function cloneObject(object, removeProperties) {
  // let obj = {...object} // shalow copy // nested object referance are shared.
  let obj = JSON.parse(JSON.stringify(object)); // deep copy
  for (let key in obj) {
    if (removeProperties.includes(key)) {
      delete obj[key];
    }
  }

  return obj;
}

console.log(
  cloneObject({ apples: 7, bananas: 42, citrones: 20, sausages: 2 }, [
    "sausages",
  ])
); //{ apples: 7, bananas: 42, citrones: 20 }
