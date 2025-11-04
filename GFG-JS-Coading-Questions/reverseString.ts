
const s = "ABCD";

const j = s.split(''); // not update orginal 

j.reverse(); // update orignal

// console.log(j.reverse()); // ['A', 'B', 'C', 'D'];

// j.join('');  // not update original j array

const k = j.join('');

console.log(k); // DCBA //  typeOf(k) : string



/// Standard solution
console.log("solution : ", s.split('').reverse().join('')); 