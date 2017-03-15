//Do not change any of the function names

function multiplyByTen(num) {
  //return num after multiplying it by ten
  return num * 10;
  //code here
}

function subtractFive(num) {
  //return num after subtracting five
  return num - 5;
  //code here
}

function areSameLength(str1, str2) {
  //return true if the two strings have the same length
  //otherwise return false
  if (str1.length === str2.length) {
  return true;}
  else {
  return false;}
  //code here
}

function areEqual(x, y) {
  //return true if x and y are the same
  //otherwise return false
  if (x === y) {
  return true;}
  else {
  return false;}
  //code here
}

function lessThanNinety(num) {
  //return true if num is less than ninety
  //otherwise return false
  if (num < 90) {
	return true;}
  else {
	return false;} 
	//code here
}

function greaterThanFifty(num) {
  //return true if num is greater than fifty
  //otherwise return false
  if (num > 50) {
	return true;}
  else {
	return false;} 
  //code here
}

function add(x, y) {
  //add x and y together and return the value
  return x + y;
  //code here
}

function subtract(x, y) {
  //subtract y from x and return the value
  return x - y;
  //code here
}

function divide(x, y) {
  //divide x by y and return the value
  return x / y;
  //code here
}

function multiply(x, y) {
  //multiply x by y and return the value
  return x * y;
  //code here
}

function getRemainder(x, y) {
  //return the remainder from dividing x by y
  return x % y;
  //code here
}

function isEven(num) {
  //return true if num is even  #12
  if (num % 2 === 0) {
	return true;}
  else {
	return false;} 
  //otherwise return false
  //code here
}

function isOdd(num) {
  //return true if num is false  #13  CORRECTION: if num is ODD
  //otherwise return false
  if (num % 2 === 0) {
	return false;}
  else {
	return true;} 
  //otherwise return false
  //code here
}

function square(num) {
  //square num and return the new value  #14
  return num * num;
  //code here
}

function cube(num) {
  //cube num and return the new value  #15
  return Math.pow(num,3);
  //code here
}

function raiseToPower(num, exponent) {
  //raise num to whatever power is passed in as exponent #16
  return Math.pow(num, exponent);
  //code here
}

function roundNumber(num) {
  //round num and return it  #17
    return Math.round(num);
  //code here
}

function roundUp(num) {
  //round num up and return it #18
    return Math.ceil(num);
	//code here
}

function addExclamationPoint(str) {
  //add an exclamation point to the end of str and return the new string  #19
  //'hello world' -> 'hello world!'
  return (str + '!');
  //code here
}

function combineNames(firstName, lastName) {
  //return firstName and lastName combined as one string and separated by a space.  #20
  //'Lambda', 'School' -> 'Lambda School'
  return (firstName + ' ' + lastName);
  //code here
}

function getGreeting(name) {
  //Take the name string and concatenate other strings onto it so it takes the following form:  #21
  //'Sam' -> 'Hello Sam!'
  return ('Hello ' + name + '!');
  //code here
}

//If you can't remember these area formulas then head over to Google or look at the test code.
 
function getRectangleArea(length, width) {
  //return the area of the rectangle by using length and width  #22
  return length * width;
  //code here
}

function getTriangleArea(base, height) {
  //return the area of the triangle by using base and height #23
  return (base * .5 * height);
  //code here
}

function getCircleArea(radius) {
  //return the rounded area of the circle given the radius  #24
  var area = Math.round(Math.PI * radius * radius);
  return (area);
  //code here
}

function getRectangularPrismVolume(length, width, height) {
  //return the volume of the 3D rectangular prism given the length, width, and height  #25
  return (length * width * height);
  //code here
}

//Do not modify code below this line.
////--------------------------------

module.exports = {
  multiplyByTen: multiplyByTen,
  subtractFive: subtractFive,
  areSameLength: areSameLength,
  areEqual: areEqual,
  lessThanNinety: lessThanNinety,
  greaterThanFifty: greaterThanFifty,
  add: add,
  subtract: subtract,
  divide: divide,
  multiply: multiply,
  getRemainder: getRemainder,
  isEven: isEven,
  isOdd: isOdd,
  square: square,
  cube: cube,
  raiseToPower: raiseToPower,
  roundNumber: roundNumber,
  roundUp: roundUp,
  addExclamationPoint: addExclamationPoint,
  combineNames: combineNames,
  getGreeting: getGreeting,
  getRectangleArea: getRectangleArea,
  getTriangleArea: getTriangleArea,
  getCircleArea: getCircleArea,
  getRectangularPrismVolume: getRectangularPrismVolume
};
