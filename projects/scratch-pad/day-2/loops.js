// #!/usr/bin/env node

'use strict';

/**
 * IN CLASS EXERCISE: LOOPS
 */

/** 
 * Given an input Array, loop forward over the Array and print its values 
 * using console.log().
 */
function printArrayValues(array) {
  // YOUR CODE BELOW HERE //
  /* the function will take an array as an argument, and print its values to the console.
  * Using a for loop that begins at 0 and increments by 1, the for loop will print the 
  * values of the array to the console. */
  
  for (var i=0; i<array.length; i++) {
    console.log(array[i]);
  }
  
  
  
  // YOUR CODE ABOVE HERE //
}

/** 
 * Given an input Array, loop backwards over the Array and print its values 
 * using console.log().
 */
function printArrayValuesInReverse(array) {
  // YOUR CODE BELOW HERE //
  /* this function will take an array and print its values backwards to the console.
  * Using a for loop that begins at the last index and increments backwards by one, 
  * the for loop will print the values of the array backwards to the console, until 
  * reaching the index of 0 */
  for (var i = array.length-1; i > -1; i--) {
    console.log(array[i]);
  }
  
  
  // YOUR CODE ABOVE HERE //
}

/** 
 * Given an input Object, return an Array containing the Object keys.
 */
function getObjectKeys(object) {
  // YOUR CODE BELOW HERE //
  /* this function will take an object as an argument, 
  * and output an array containg the object keys. The function takes an empty array,
  * then by using the Object.key() method, it will add the keys to the array and return it*/
  var arr = [];
  arr = Object.keys(object);
  return arr;
  // YOUR CODE ABOVE HERE //
}

/** 
 * Given an input Object, loop over the Object and print its keys 
 * using console.log().
 */
function printObjectKeys(object) {
  // YOUR CODE BELOW HERE //
  /* this function will take an object as an argument, and print its keys to the console. 
  * By taking an empty array and using the Object.keys() method, the for loop will 
  * cycle through the contents of the array and print them to the console*/
  var arr = [];
  arr = Object.keys(object);
  //For loop will cycle through arr, which now contains the keys of the given object
  for (var i = 0; i < arr.length; i++)
  console.log(arr[i]);
  // YOUR CODE ABOVE HERE //
}

/** 
 * Given an input Object, return an Array containing the Object's values.
 */
function getObjectValues(object) {
  // YOUR CODE BELOW HERE //
  /*this function will take an object as an argument, and return an array with its values.
  * by using the Object.values() method, the function adds the values of the given object 
  * to the empty array, and returns it*/
  var arr = [];
  arr = Object.values(object);
  return arr;
  // YOUR CODE ABOVE HERE //
}

/** 
 * Given an input Object, loop over the Object and print its values 
 * using console.log().
 */
function printObjectValues(object) {
  // YOUR CODE BELOW HERE //
  /* this function wil ltake an object as an argument and print its values to the console. 
  * by using a for loop, the function will cycle through the key/value pairs and print 
  * the values to the console */
  for (var key in object) {
    console.log(object[key]);
  }
  // YOUR CODE ABOVE HERE //
}

/** 
 * Given an input Object, return the length of its key/value pairs
 */
function getObjectLength(object) {
  // YOUR CODE BELOW HERE //
  /* this function will take an object as its argument, 
  * and return the number of key/value pairs. The function contains an empty 
  * array that will be used inside a for-in loop in order to receive the values 
  * of the given object. The function will return the length of the array in 
  * order to show the number of key/value pairs */
  var arr = [];
  for (var key in object) {
    // this section uses the plus/equals operator to add the values of the object to arr
    arr.push(object[key]);
  }
  
  return arr.length;
  
  // YOUR CODE ABOVE HERE //
}

/** 
 * Given an input Object, how might we loop over the Object IN REVERSE and 
 * print its values using console.log()?
 */
function printObjectValuesInReverse(object) {
  // YOUR CODE BELOW HERE //
  /* the function will take a given object as an argument, then place the values of 
  * the object into an array. Then, using a for loop, the function will print the 
  * contents of the array to the console in reverse order */
  //empty array to receive the values of the object
  var arr = [];
  //object.value() method placing the values into arr
  arr = Object.values(object);
  //for loop logging the values of arr in reverse order
  for (var i = arr.length-1; i > -1; i--) {
    console.log(arr[i]);
  }
  
  
  
  // YOUR CODE ABOVE HERE //
}





// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
if((typeof process !== 'undefined') &&
    (typeof process.versions.node !== 'undefined')) {
    // here, export any references you need for tests //
    module.exports.printArrayValues = printArrayValues;
    module.exports.printArrayValuesInReverse = printArrayValuesInReverse;
    module.exports.printObjectValues = printObjectValues;
    module.exports.getObjectValues = getObjectValues;
    module.exports.getObjectKeys = getObjectKeys;
    module.exports.printObjectKeys = printObjectKeys;
    module.exports.getObjectLength = getObjectLength;
    module.exports.printObjectValuesInReverse = printObjectValuesInReverse;
}
