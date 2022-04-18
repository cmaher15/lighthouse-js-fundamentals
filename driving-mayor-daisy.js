var carPassing = function (cars, speed) {
  var time = Date.now()
  var driver = {
    time: time,
    speed: speed
  }

  cars.push(driver)
  return cars

  
}

const cars = [
  {
    time: 1568329654807,
    speed: 40
  },
  {
    time: 1568329821632,
    speed: 42
  },
  {
    time: 1568331115463,
    speed: 35
  }
]

const speed = 38

carPassing(cars, speed)

//This function asked to: take in an array of car objects, and the speed of a car as it passes the sensor. This function should create a new object with a property called speed, and another property called time and add it to the cars array. We can retrieve the current time, for setting the time property, by using the Date.now() function, which is built into JavaScript! Our function should return an array that includes all of the elements in cars as well as our new element.
//The reason this works the way it does: We have a function which takes in two parameters, cars and speed. We want our function to have an object with two keys/properties, time, and speed. Before we define our object properties, we need to tell the function how to calculate the time. This is why we use the date.now() function! Once we have defined our object, we use .push to add this information to our car array which the function too in, and return the new value of "cars" with this addition! 