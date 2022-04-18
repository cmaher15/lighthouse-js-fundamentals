let trash = ""
var bins = {
  waste: Number,
  recycling: Number,
  compost: Number
}
const smartGarbage = function (trash, bins) {
  bins[trash]++;
  return bins;
}



console.log(smartGarbage('recycling', { waste: 4, recycling: 2, compost: 5 }));

//COMMENTS/WHAT YOU LEARNED:
//Your function doesn't care what you write before it! You don't even need to include the variable for trash or defining bins as an object. When you create your function, this is doing that FOR YOU!!! It takes in the parameters trash and bins, and returns whatever your function asks it to. In this particular case, you are telling your code to look at whatever the value of trash is (in this case recycling), and ADD IT to bins wherever it's appropriate. Because the value of trash matches one of the values included in bins (recycling), the function is executed, 1 is added to the total of recycling, and the new value of bins is returned!