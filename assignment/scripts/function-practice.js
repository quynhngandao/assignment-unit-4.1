console.log('***** Function Practice *****');

// Add the required code to complete the functions below
// After _each_ function, use a console log to call the function
// to test it and display the result

// 1. Function to return 'Hello World!'
function hello() {
  return 'Hello World!';
}
// Call the function to test
console.log('Test - should say "Hello World!"', hello());


// 2. Function to return an personalized hello, using the `name` argument.
//    for example 'Hello, Jo!', or 'Hello, Stacy!'
function helloName(name) {
  return 'Hello, ' + name + '!';
}
// Remember to call the function to test
console.log(helloName('Quynh'));


// 3. Function to add two numbers together & return the result
function addNumbers(firstNumber, secondNumber) {
  // return firstNumber + secondNumber;
  return firstNumber + secondNumber;
}
console.log('Sum of 2 numbers:', addNumbers(4, 5));


// 4. Function to multiply three numbers & return the result
function multiplyThree(firstNum, secondNum, thirdNum) {
  return firstNum * secondNum * thirdNum;
}
// Test
console.log('Multiplication of 3 numbers:', multiplyThree(2, 4, 5));


// 5. Function that will return true if a number is positive, 
//    or greater than zero, and false otherwise
function isPositive(number) {
  if (number > 0) {
    return true;
  } else {
    return false;
  }
}
// Call the function to test each outcome (true & false) 
// Write a separate console.log statement for each outcome
console.log('isPositive - should say true', isPositive(3));
console.log('isPositive - should say false', isPositive(0));
console.log('isPositive - should say false', isPositive(-3));


// 6. Function to return the _last_ item in an array. If the 
//    array is empty, return `undefined`.
function getLast(array) {
  if (array.length > 0) {
    let arr = array[array.length - 1];
    return arr;
  }
  else if (array.length === 0) {
    return 'undefined';
  }
}
// Test
console.log('Last item in array:', getLast([]));
console.log('Last item in array:', getLast([1, 2, 3]));


// 7. Function to find a value in an array. Return true if the 
//    value is found and false otherwise. Use a loop;
//    DO NOT use Array.includes, Array.indexOf, or Array.find 
function find(value, array) {
  for (let arr of array) {
    if (arr === value) {
      return true;
    }
  }
  return false;
}
// Test
console.log('Value found in array:', find(0, [1,2,4]));
console.log('Value found in array:', find(0, [0,1,2]));


// ----------------------
// Stretch Goals
// ----------------------
// 8. Function to check if a letter is the first letter in a 
//    string. Return true if it is, and false otherwise
function isFirstLetter(letter, string) {
  let firstLetter = string.charAt(0).toUpperCase();
  if (letter.toUpperCase() === firstLetter) {
    return true;
  }
  return false;
}
// Test
console.log('isFirstLetter - should say true', isFirstLetter('a', 'apple'));
console.log('isFirstLetter - should say false', isFirstLetter('z', 'apple'));


// 9. Function to return the sum of all numbers in an array
function sumAll(array) {
  let sum = 0;
  // TODO: loop to add items
  for (let arr = 0; arr < array.length; arr++) {
    sum += array[arr];
  }
  // TODO: return the sum
  return sum;
}
// Test
console.log('Sum of array:', sumAll([1, 2, 3]));


// 10. Function to return a new array of all positive (greater than zero)
//     numbers contained in an input array. If there are no positive numbers
//     return an empty array. Note: The input array should not change.
function allPositive(array, arr) {
  return array.filter(arr => arr > 0);
}
// Test
console.log('New array:', allPositive([1, 2, -4, 0]));


// 11. Pick a problem from Edabit(https://edabit.com/) or 
//     CodeWars(https://www.codewars.com/). Then describe it 
//     here in a comment, write the function, and test it!


// DO NOT MODIFY
// Used for automated testing
try {
  module.exports = {
    hello,
    helloName,
    addNumbers,
    multiplyThree,
    isPositive,
    getLast,
    find,
    isFirstLetter,
    sumAll,
    allPositive,
  };
} catch (e) {
  // Do nothing
}