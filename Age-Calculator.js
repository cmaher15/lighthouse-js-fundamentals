const name = ""
const yearOfBirth = Number
const currentYear = Number;
const ageCalculator = function(name, yearOfBirth, currentYear) {
  let age = (currentYear - yearOfBirth);
  return (name + " is " + age + " years old.")
  }
  
  console.log(ageCalculator("Suzie", 1988, 2015))
  console.log(ageCalculator("Ceilidhe", 1992, 2022))