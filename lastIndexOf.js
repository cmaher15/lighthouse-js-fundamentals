const lastIndexOf = function(array, value) {
  var i;
  for (i = array.length - 1; i >= 0; i--) {
    if (array[i] === value) {
      return i;
    }
  }
  return -1; 
};


console.log(lastIndexOf([ 0, 1, 4, 1, 2 ], 2), "=?", 4);
console.log(lastIndexOf([ 0, 1, 4, 1, 2 ], 3), "=?", -1);
console.log(lastIndexOf([ 5, 5, 5 ], 5), "=?", 2);
console.log(lastIndexOf([], 3), "=?", -1);

//This code takes the value (the number we are looking for in the array) and using a loop, states the following: the value must be less than the length of the array; it must be greater than 0, and it must not be more than the last number in the array. If this is TRUE, then return the index of the value where it is within the array (where it last occured). If the number is NOT in the array (aka FALSE), then we are telling the function to return a "-1".