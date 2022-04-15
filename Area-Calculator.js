let length = Number;
let width = Number;
const calculateRectangleArea = function (length, width) {
  let area = (length * width);
  if (area > 0)
    return (area);
}

console.log(calculateRectangleArea(10, 5)); 
console.log(calculateRectangleArea(1.5, 2.5));
console.log(calculateRectangleArea(10, -5));

let base = Number;
let height = Number;
const calculateTriangleArea = function (base, height) {
  let area = (base * height / 2);
  if (area > 0)
    return (area);

}

console.log(calculateTriangleArea(10, 5)); 
console.log(calculateTriangleArea(3, 2.5)); 
console.log(calculateTriangleArea(10, -5)); 

let radius = Number;
const calculateCircleArea = function (radius) {
  let area = (Math.PI * (radius * radius))
  if (radius > 0)
    return (area);
}

console.log(calculateCircleArea(10)); 
console.log(calculateCircleArea(3.5));
console.log(calculateCircleArea(-1));