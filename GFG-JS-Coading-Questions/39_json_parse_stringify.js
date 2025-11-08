//  Use JSON to parse and stringify data in JavaScript?
const parseJson = (strObj) => {
  return JSON.parse(strObj);
};

const strObj = `{"name" : "grisih", "age" : "23"}`;
console.log(typeof strObj);

const obj = parseJson(strObj);
console.log(obj);
console.log(typeof obj);
console.log(obj.name);

const stringifyJson = (obj) => {
  return JSON.stringify(obj);
};

const str = stringifyJson(obj);
console.log(str);
console.log(typeof str);
