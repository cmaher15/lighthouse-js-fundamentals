const range = function(start, end, step) {
  const result = []
  for (let i = start; i <= end; i += step) {
    result.push(i);
  }
  return result;
}

console.log(range(0, 10, 2));

//THE ABOVE CODE WORKS JUST FINE, BUT FOR WHATEVER REASON COMPASS CRASHED EVERYTIME WE ENTERED IT. SEE BELOW FOR WHAT WE ENTERED INSTEAD.

function range(start,end,step) {
  let array = [];
  if (step > 0) {
  for (let i = start ; i <= end ; i += step) {
  array.push(i);
  }
  }
  return array;
  }

//Comments about this exercise:
//1. You need to PUSH your loop if you're not including any other information in the function. If you just create the loop without anything else, the only thing that will come out is the 3 things you put in (start, end, step), but the loop will not actually calculate anything! But, if you include the parameters within your loop, you just need to return it. 