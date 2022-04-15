const moves = ['north', 'south', 'west', 'east']
const input = ['east', 'east', 'east', 'south']
const finalPosition = function (moves) {
  let x = 0
  let y = 0
for (let i = 0; i < moves.length; i++){
if(moves[i] === 'north') {
  y++;
} else if(moves[i] === 'south') {
  y--;
} else if (moves[i] === 'east') {
  x++;
} else if (moves[i] === 'west') {
  x--
}
return [x,y]
}
} 

console.log(finalPosition(input));

//Comments on what you learned:
//1. Be careful with your WHILE loops! When you are working with an Array, if you use a while loop to assign value, you're probably goint to get stuck in an infinite loop. 
//2. Even though the exercise called for a function, you still needed a loop in there. You were on the right track, but the x and y needed to be assigned with a 0 value outside of the loop. The "typical" loop format is what you needed for this. 
//3. To use a loop and an array, use the format ("array name[i]")
//4. Don't over think it (because you know that you did.) As Courtney suggested, try to break down the instructions and look for key words about what they expect of you. If you need to, write it out before starting to code it! 
//5. keep going, and don't give up! 