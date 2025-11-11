/**
 * @param {Array} arr
 * @param {Function} fn
 * @return {Array}
 */
var sortBy = function (arr, fn) {
  // let map = [];
  // map = arr.reduce((acc, item)=> {
  //     let key = fn(item);
  //     acc.push({idx : key, value : item});
  //     return acc;
  // }, [])
  // map.sort((a, b)=> a.idx-b.idx);
  // let ans = [];
  // for(let item of map){
  //     ans.push(item.value)
  // }
  // return ans;

  // Optimized way 1 :
  // return arr.map((item)=>{
  //     return {idx : fn(item), value : item}
  // }).sort((a, b)=> a.idx - b.idx).map((item) => item.value);

  // Optimized way 2:
  return arr.sort((a, b) => fn(a) - fn(b));
};
