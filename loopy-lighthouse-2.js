let loopyLighthouse = function (range, multiples, words) {
  let first = range[0];
  let second = range[1];
  let third = multiples[0];
  let fourth = multiples[1];
  let final = []
  let fifth = words[0];
  let sixth = words[1];
  

  for (let a = first; a <= second; a++) {
    final.push(a);
  }
  for (let i = 0; i < final.length; i++) {
    if (final[i] % third === 0 && final[i] % fourth === 0) {
      console.log(fifth + sixth);
    } else if (final[i] % third === 0) {
      console.log(fifth);
    } else if (final[i] % fourth === 0) {
      console.log(sixth);
    } else { console.log(final[i]);
    }
  } }

console.log(loopyLighthouse([15, 90], [2, 5], ["Batty", "Beacon"]));