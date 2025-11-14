// Write a function to replace sad faces ":(" with smiley faces ":(".

// input ":( :( :( All smiles here :("
// output = ":) :) :) All smiles here :)"

//  replacing only "(" wrong what if "k(" then replacing ( only will not work as it's not sad face.

const makeSmiley = (str) => {
  // let newStr= str.replace(":(", ":)");   // only detecting the first occurance of :(

  // way 1 by convert to arr
  // let arr = str.split("");
  // for(let i = 1; i < arr.length; i++){
  //     if( arr[i-1] === ":" && arr[i] === "("){
  //         arr[i] = ")";
  //     }
  // }
  // return arr.join('');

  // way 2 not using arr
  // WARNING : AVOID TO UPDATE SAME WHICH YOU ARE ITERATING
  // for(let i = 1; i < str.length; i++){
  //     if(str[i] === "(" && str[i-1] === ":" ){
  //         let left = str.slice(0, i); // left of (
  //         let right = str.slice(i+1) // right of (
  //         str = left + ")" + right;
  //     }
  // }
  // return str;

  // way 3 :
  // return str.replaceAll(":(", ":)");

  // way 4
  return str.replace(/:\(/g, ":)");
};

console.log(makeSmiley(":( :( :( All smiles here :("));
