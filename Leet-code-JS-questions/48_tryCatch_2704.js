var expect = function (val) {
  const toBe = (num) => {
    if (num === val) {
      return true;
    } else {
      throw "Not Equal";
    }
  };

  const notToBe = (num) => {
    if (num !== val) {
      return true;
    } else {
      throw "Equal";
    }
  };

  return { toBe, notToBe };
};

// expect(5).toBe(5); // true
// expect(5).notToBe(5); // throws "Equal"
