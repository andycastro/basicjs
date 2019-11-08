/* learning about arrays, indexOf() that verifies if content is on array, 
its return 1 true and -1 false; ternary operator JS -> args ? foo : foo */

function search(arr, item) {
  const result = arr.indexOf(item) ? true : false;
  
  return result;
}
console.log(search(
  [1, 2, 3, 4, 5], 2
));