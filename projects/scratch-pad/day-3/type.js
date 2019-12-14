// #!/usr/bin/env node

'use strict';

/**
 * IN CLASS EXERCISE: TYPE
 */

/** 
 * Given an input value, return true if the value is an Array, false if otherwise.
 * 
 * TIP: In JavaScript, how can we decipher if a value is an Array? Can typeof
 * work?
 */
function isArray(value) {
    // YOUR CODE BELOW HERE //
    /* This function will take an argument and determine if it is an array. First, we have
    * an empty variable that will later be used as the final return statement. Then, we'll use an 
    * if statement along with the Array.isArray() method to determine if the value is an array or not, then return
    * true or false. typeof does not work with arrays and would read the array as an object*/
    var valueTest;
    if (Array.isArray(value) === true) {
        valueTest = true;
    } else {
        valueTest = false;
    }
    return valueTest;
    // YOUR CODE ABOVE HERE //
}

/** 
 * Given an input value, return true if the value is an Object intended as a 
 * collection, false if otherwise.
 * 
 * TIP: In JavaScript, how can we decipher if a value is an Object, but not 
 * null, not an Array, not a Date - all of these will return 'object' if used 
 * with typeof.
 */
function isObject(value) {
    // YOUR CODE BELOW HERE //
    /* This function will receive a single argument, and test whether or not it is an object
    * To do this, we need to test the input to find out if it is null, array, or date. 
    * First, we'll  create an empty variable called testObject, which will receive our final 
    * return statement. Then, we'll use a conditional statement to check if the value is
    * a date, an array, or null (all of which would return 'object' if we used the typeOf method),
    * and our final test will */
    
    var testObject;
    if (value === null || Array.isArray(value) === true) {
        testObject = false;
    } else if (value instanceof Date === true) {
        testObject = false;
    } else if (value === undefined) {
        testObject = false;
    } else if (typeof value === 'string') {
        testObject = false;
    } else if (typeof value === 'boolean') {
        testObject = false;
    } else if (typeof value === 'number') {
        testObject = false;
    } else if (typeof value == 'object') {
        testObject = true;
    }
    
    return testObject;
    
    // YOUR CODE ABOVE HERE //
}

/** 
 * Given an input value, return true if is either an Array or an an Object 
 * intended as a collection, false if otherwise.
 * 
 * TIP: Similar to isObject, but we must return true if the value is an Array.
 */
function isCollection(value) {
    // YOUR CODE BELOW HERE //
    /* this function will take a single argument, and return true if the data type is 
    * either an object or an array. To do this, we will test for each data type first using
    * a conditional statement */ 
        var testCollection;
    if (value === null) {
        testCollection = false;
    } else if (value instanceof Date === true) {
        testCollection = false;
    } else if (value === undefined) {
        testCollection = false;
    } else if (typeof value === 'string') {
        testCollection = false;
    } else if (typeof value === 'boolean') {
        testCollection = false;
    } else if (typeof value === 'number') {
        testCollection = false;
    } else if (typeof value == 'object' || Array.isArray(value) === true) {
        testCollection = true;
    }
    
    return testCollection;
    
    
    // YOUR CODE ABOVE HERE //
}

/**
 * Given an input value, return the type of the value as a String
 * 
 * Types are one of: 
 *    - "string"
 *    - "array"
 *    - "object"
 *    - "undefined"
 *    - "number"
 *    - "boolean"
 *    - "null"
 *    - "function"
 *    - "date"
 * 
 * Examples:
 *    typeOf(134) -> "number"
 *    typeOf("javascript") -> "string"
 *    typeOf([1,2,3]) -> "array"
 */ 
function typeOf(value) {
    // YOUR CODE BELOW HERE //
    /* This function will take an argument and test for its data type. Whatever the given 
    * data type is, the function will return that data type as a string. First, we'll create 
    * an empty variable to be used as final return statement. Then, we'll create a conditional 
    * statement that checks the value of each data type. To be safe, I'll place object at the
    * end since other data types could return 'object*/
    var dataType;
    if (value === null) {
        dataType = 'null';
    } else if (value instanceof Date === true) {
        dataType = 'date';
    } else if (typeof value === 'function') {
        dataType = 'function'; 
    } else if (value === undefined) {
        dataType = 'undefined';
    } else if (typeof value === 'string') {
        dataType = 'string';
    } else if (typeof value === 'boolean') {
        dataType = 'boolean';
    } else if (typeof value === 'number') {
        dataType = 'number';
    } else if (Array.isArray(value) === true) {
        dataType = 'array';
    } else if (typeof value == 'object') {
        dataType = 'object';
    }
    
    return dataType;
    
    
    // YOUR CODE ABOVE HERE //
}

// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
if((typeof process !== 'undefined') &&
    (typeof process.versions.node !== 'undefined')) {
    // here, export any references you need for tests //
    module.exports.isArray = isArray;
    module.exports.isObject = isObject;
    module.exports.isCollection = isCollection;
    module.exports.typeOf = typeOf;
}
