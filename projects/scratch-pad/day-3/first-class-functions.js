// #!/usr/bin/env node

'use strict';

/**
 * IN CLASS EXERCISE: FIRST CLASS FUNCTIONS
 */

/** 
 * Given an input base to test against, which could be a String or Number, 
 * return a Function that tests whether a given value is greater than the 
 * base.
 */
function createGreaterThanFilter(base) {
    // YOUR CODE BELOW HERE //
    /* We'll create a function expression that our original function will return
    * this function expression will take a 'value' parameter and nest a conditonal statement
    * that tests if value is greater than base*/
    let greaterThanBase = function(value) {
        //empty variable to return true or false
        let bool;
        //conditional statement to see if value is greater than base
        if (value > base) { 
            bool = true;
        } else {bool = false}
        return bool;
    };
   return greaterThanBase;

    // YOUR CODE ABOVE HERE //
}

/** 
 * Given an input base to test against, which could be a String or Number, 
 * return a Function that tests whether a given value is less than the 
 * base.
 */
function createLessThanFilter(base) {
    // YOUR CODE BELOW HERE //
    /*this function will have a function expression nested inside of it, just like
    * the previous problem. The nested function expression will take 'value' as a parameter
    * and test if it is less than the 'base' parameter*/
            let lessThanBase = function(value) {
            //empty variable for our return statement
            let bool;
            if (value < base) {
            bool = true;
            } else {bool = false}
            return bool;
        };
    return lessThanBase;
    // YOUR CODE ABOVE HERE //
}

/** 
 * Given a startsWith character, which will be a single character, return a 
 * Function that tests whether a given String starts with the startsWith 
 * character.
 */
function createStartsWithFilter(startsWith) {
    // YOUR CODE BELOW HERE //
    /* This function will take single string character as a parameter and test
    * whether or not a given string begins with that character. We'll make a 
    * function expression that takes in a string as a parameter, then use 
    * a conditional statement to test if the given string begins with the 
    * given character*/
   
    let firstLetterTest = function(string) {
        //empty variable for our return statement
        let bool;
        //we must test for both upper and lower case. 
        if (startsWith.toUpperCase() === string[0] || startsWith.toLowerCase() === string[0]) {
            bool = true;
        } else {bool = false}
        return bool;
    };
    
    return firstLetterTest;
    
    
    // YOUR CODE ABOVE HERE //
}

/** 
 * Given a endsWith character, which will be a single character, return a 
 * Function that tests whether a given String ends with the endsWith 
 * character.
 */
function createEndsWithFilter(endsWith) {
    // YOUR CODE BELOW HERE //
    /* We'll create a function expression that receives a string and is nested
    * inside the original function. Then, inside the write a conditional 
    * statement that tests whether or not the string ends with the parameter 'endsWith' */
    
        //nested function expression
        let lastLetterTest = function(string) {
        //empty variable for our return statement
        let bool;
        //we must test for both upper and lower case. 
        if (endsWith.toUpperCase() === string[string.length-1] || endsWith.toLowerCase() === string[string.length-1]) {
            bool = true;
        } else {bool = false}
        return bool;
    };
    
    return lastLetterTest;
    
    
    
    // YOUR CODE ABOVE HERE //
}

/** 
 * Given an Array of Strings and a Function designed to modify a String, 
 * return an Array of the Strings, modified.
 * 
 * TIP: You need to loop over the Strings, right? We need to pass each String to 
 * the modify Function, but we need to collect the results into some collection.
 */
function modifyStrings(strings, modify) {
    // YOUR CODE BELOW HERE //
    
    /* this function will take two parameters, the first being a collection of strings 
    * and the second being a function that modifies those strings. The parent function will return
    * an array of those strings after being modified */
    
    //testing modify with typeof to make sure it's a function
    if (typeof modify === 'function') {
    /*create a function expression that allows the parameter 'modify' 
    * to receive 'strings' as a parameter*/
    var functionModifier = function() {
        modify(strings);
        return strings;
        };
    }
    //call functionModifier to allow "modify" to change "strings"
    functionModifier();
    //for loop to push the modified contents of 'strings' into a new collection
    let stringsModified = [];
    for (let i = 0; i < strings.length; i++) {
        stringsModified.push(strings[i]);
    }
    
    return stringsModified;
    
    // YOUR CODE ABOVE HERE //
}

/** 
 * Given an Array of Strings and a Function designed to test the String in some 
 * way and return a Boolean on whether it passed, return true if ALL Strings pass the test.
 * 
 * Imagine you had a list of names, and you wanted to test they all 
 * begin with "C", or they are all exclaimations that end with "!".
 * 
 * TIP: You need to loop over the Strings, right? And pass them to the test?
 */
function allStringsPass(strings, test) {
    // YOUR CODE BELOW HERE //
    
    
    
    
    // YOUR CODE ABOVE HERE //
}

// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
if((typeof process !== 'undefined') &&
    (typeof process.versions.node !== 'undefined')) {
    // here, export any references you need for tests //
    module.exports.createGreaterThanFilter = createGreaterThanFilter;
    module.exports.createLessThanFilter = createLessThanFilter;
    module.exports.createStartsWithFilter = createStartsWithFilter;
    module.exports.createEndsWithFilter = createEndsWithFilter;
    module.exports.modifyStrings = modifyStrings;
    module.exports.allStringsPass = allStringsPass;   
}