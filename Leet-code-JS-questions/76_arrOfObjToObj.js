// How can you convert an array of objects into a single object?
// It's fine if duplicates key removed.

const arrayObjToObject = (arr) => {
  return arr.reduce((acc, item, idx) => {
    for (let key in item) {
      // acc[key] = item[key];
      acc = { ...acc, ...item };
    }
    return acc;
  }, {});
};

console.log(
  arrayObjToObject([{ a: "0", b: "1" }, { b: "2" }, { c: "3", d: "4", a: "1" }])
); // Expected output: { a: '1', b: '2', c: '3', d: '4' }
