/**
 * @param {Function} fn
 * @return {Object}
 */
Array.prototype.groupBy = function (fn) {
  // let ans = {};
  // for(let i = 0; i < this.length; i++){
  //     let key = fn(this[i]);
  //     if(ans[key]){
  //         // ans[key] = [...ans[key], this[i]]; // this creates new array each time
  //         ans[key].push(this[i]);
  //     }else{
  //         ans[key] = [this[i]];
  //     }
  // }
  // return ans;
  /*
    “I start with an empty something (array/object).
    For each element, I add or merge something.
    At the end, I return that one structure.”

    That’s a reduce situation.
    */

  let ans = {};

  ans = this.reduce((acc, item) => {
    let key = fn(item);
    // if(acc[key]){
    //    acc[key].push(item);
    // }else{
    //     acc[key] =[item];
    // }
    // optmized way 1
    if (!acc[key]) {
      acc[key] = [];
    }
    acc[key].push(item);
    return acc;
  }, ans);

  return ans;
};

/**
 * [1,2,3].groupBy(String) // {"1":[1],"2":[2],"3":[3]}
 */
