// This makes the arguments variable behave the way we want it to and a few
// other things. For more info:
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Strict_mode
'use strict';

var _ = {};


/**
* START OF OUR LIBRARY!
* Implement each function below it's instructions
*/

/** _.identity
* Arguments:
*   1) Any value
* Objectives:
*   1) Returns <value> unchanged
* Examples:
*   _.identity(5) === 5
*   _.identity({a: "b"}) === {a: "b"}
*/

//creating an identity function
_.identity = function(value) {
    return value;
};

/** _.typeOf
* Arguments:
*   1) Any value
* Objectives:
*   1) Return the type of <value> as a string
*       Types are one of:
*          - "string"
*          - "array"
*          - "object"
*          - "undefined"
*          - "number"
*          - "boolean"
*          - "null"
*          - "function"
* Examples:
* _.typeOf(134) -> "number"
* _.typeOf("javascript") -> "string"
* _.typeOf([1,2,3]) -> "array"
*/
    
_.typeOf = function(value) {

    let dataType;
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

};

/** _.first
* Arguments:
*   1) An array
*   2) A number
* Objectives:
*   1) If <array> is not an array, return []
*   2) If <number> is not given or not a number, return just the first element in <array>.
*   3) Otherwise, return the first <number> items of <array>
* Edge Cases:
*   1) What if <number> is negative?
*   2) What if <number> is greater than <array>.length?
* Examples:
*   _.first("ponies", 1) -> []
*   _.first(["a", "b", "c"], "ponies") -> "a"
*   _.first(["a", "b", "c"], 1) -> "a"
*   _.first(["a", "b", "c"], 2) -> ["a", "b"]
*/

// This function will take an array and a number. Whatever number is given, 
// the function will return the array contents up to that index number.
// First, if 'array' is not an array, the function will return an empty array. 
// If number is not given or is not a number, then we'll return the first value 
// within the array. Otherwise, our function will push the contents of 'array'
// into 'arr' then return it. 
// 
// Edge cases: if number is negative then return the first value in array. 
// If number is greater than array.length, return all the items in the array.

_.first = function(array, number) {
    let arr = [];
    if (Array.isArray(array) === false) {
        return [];
    } else if (number === undefined || typeof(number) !== 'number') {
        return array[0];
    } else if (number < 0) {
        return [];
    } else if (number > array.length) {
        for (let i = 0; i < array.length; i++) {
            arr.push(array[i]);
        }
    } else {
      for (let i = 0; i < number; i++) {
        arr.push(array[i]);
      }
    }
    return arr;
};



/** _.last
* Arguments:
*   1) An array
*   2) A number
* Objectives:
*   1) If <array> is not an array, return []
*   2) If <number> is not given or not a number, return just the last element in <array>.
*   3) Otherwise, return the last <number> items of <array>
* Edge Cases:
*   1) What if <number> is negative?
*   2) What if <number> is greater than <array>.length?
* Examples:
*   _.last("ponies", 2) -> []
*   _.last(["a", "b", "c"], "ponies") -> "c"
*   _.last(["a", "b", "c"], 1) -> "c"
*   _.last(["a", "b", "c"], 2) -> ["b", "c"]
*/

// This function will take an array and a number, and return the last values in 
// the array of whatever the number is. (For example, if given '2', then return
// the last two values of the array). If the array is empty then we'll return 
// an empty array. If number is not given or isn't a number, then we'll return
// just the last value. Else we'll return the last 'number' of values from the
// array. 
// 
// Edge cases: if number is negative then we'll return just the last value of 
// the array. If number is greater than array.length, then we'll return all the
// values of the array.

_.last = function(array, number) {
    let arr = [];
    if (Array.isArray(array) === false) {
        return [];
    } else if (number === undefined || typeof(number) !== 'number') {
        return array[array.length-1];
    } else if (number < 0) {
        return [];
    } else if (number > array.length) {
        for (let i = 0; i < array.length; i++) {
            arr.push(array[i]);
        }
    } else {
        for (let i = array.length-1; i >= array.length-number; i--) {
            arr.unshift(array[i]);
            }
        }
    return arr;
};

/** _.indexOf
* Arguments:
*   1) An array
*   2) A value
* Objectives:
*   1) Return the index of <array> that is the first occurrance of <value>
*   2) Return -1 if <value> is not in <array>
*   3) Do not use [].indexOf()!
* Edge Cases:
*   1) What if <array> has multiple occurances of val?
*   2) What if <val> isn't in <array>?
* Examples:
*   _.indexOf(["a","b","c"], "c") -> 2
*   _.indexOf(["a","b","c"], "d") -> -1
*/

// This function will take an array and a value, and return the first occurrance
// of the specified value without using the indexOf() method. If the value is 
// not in the array, return -1. To do this, well use a for loop to compare the
// values at array[i] with the given argument 'value', and return the index
// number if they equal each other. If not, we'll return -1. 

_.indexOf = function(array, value) {
  
  for (let i = 0; i < array.length-1; i++) {
    if (array[i] === value) {
      return i;
    }
  }
  for (let i = 0; i < array.length-1; i++) {
    if (array[i] !== value) {
        return -1;
    }
  }
};

/** _.contains
* Arguments:
*   1) An array
*   2) A value
* Objectives:
*   1) Return true if <array> contains <value>
*   2) Return false otherwise
*   3) You must use the ternary operator in your implementation.
* Edge Cases:
*   1) did you use === ?
*   2) what if no <value> is given?
* Examples:
*   _.contains([1,"two", 3.14], "two") -> true
*/

// This function takes an array and a value as arguments, and returns true if
// the array contains the value. We will use the ternary operator in this 
// function. Our for loop will check to see if array[i] === value. If it does,
// the function will convert the undefined 'bool' to true. If not, bool will
// remain undefined and therefore trigger the ternary operator to return false. 

_.contains = function(array, value) {
  let bool;
  for (let i = 0; i < array.length; i++) {
      if (array[i] === value) {
          bool = true;
      }
  } 
  return bool ? true : false;  
};

/** _.each
* Arguments:
*   1) A collection
*   2) A function
* Objectives:
*   1) if <collection> is an array, call <function> once for each element
*      with the arguments:
*         the element, it's index, <collection>
*   2) if <collection> is an object, call <function> once for each property
*      with the arguments:
*         the property's value, it's key, <collection>
* Examples:
*   _.each(["a","b","c"], function(e,i,a){ console.log(e)});
*      -> should log "a" "b" "c" to the console
*/

// In this function, we'll write a conditional statement that checks for the
// value type of the 'collection' argument. If the collection is an array, 
// we'll use a for loop to invoke our function argument (func) through each 
// element and index of the array. If the collection is an object, we'll use
// a for-in loop to invoke 'func' on each value and key of the object.

_.each = function(collection, func) {
    
    if (Array.isArray(collection) === true) {
        for (let i = 0; i < collection.length; i ++) {
            func(collection[i], i, collection);
        }
    } else {
        for(let key in collection) {
        func(collection[key], key, collection);
        }
    }
};


/** _.unique
* Arguments:
*   1) An array
* Objectives:
*   1) Return a new array of all elements from <array> with duplicates removed
*   2) Use _.indexOf() from above
* Examples:
*   _.unique([1,2,2,4,5,6,5,2]) -> [1,2,4,5,6]
*/

// This function will take an array as an argument, and return a new array with
// all the duplicates removed. First, we'll create an empty variable to receive 
// the first occurence of the given array. Then, we'll loop through the array
// and push the contents of the array into 'arr.' In order to ensure that we get
// only the unique values (no dupliactes), we'll use our indexOf function on 
// 'array' which will return the index number of the first occurence of each 
// value

_.unique = function(array) {
    // arr is an empty array for our return statement
    let arr = [];
    // for loop to iterate through 'array'
    for (let i = 0; i < array.length; i++) {
        //invoking '_.indexOf' 
        if (i === (_.indexOf(array, array[i]))) {
            arr.push(array[i]);
        }
    }
    return arr;
};

/** _.filter
* Arguments:
*   1) An array
*   2) A function
* Objectives:
*   1) call <function> for each element in <array> passing the arguments:
*      the element, it's index, <array>
*   2) return a new array of elements for which calling <function> returned true
* Edge Cases:
*   1) What if <function> returns something other than true or false?
* Examples:
*   _.filter([1,2,3,4,5], function(x){return x%2 === 0}) -> [2,4]
* Extra Credit:
*   use _.each in your implementation
*/

_.filter = function(array, func) {
    //empty array to contain contents of calling 'func' on 'array'
    let arr = [];
    //loop through 'array' and call 'func' on each element, index, and 'array'
    for (let i = 0; i < array.length; i++) {
        //if calling 'func' returns true, push array[i] into arr
        if (func(array[i], i, array) === true) {
            arr.push(array[i]);
        } 
    }
    return arr; 
};


/** _.reject
* Arguments:
*   1) An array
*   2) A function
* Objectives:
*   1) call <function> for each element in <array> passing the arguments:
*      the element, it's index, <array>
*   2) return a new array of elements for which calling <function> returned false
*   3) This is the logical inverse if _.filter(), you must use _.filter() in your implementation
* Examples:
*   _.reject([1,2,3,4,5], function(e){return e%2 === 0}) -> [1,3,5]
*/

_.reject = function(array, func) {
    //empty array to contain contents of calling 'func' on 'array'
    let arr = [];
    //loop through 'array' and call 'func' on each element, index, and 'array'
    for (let i = 0; i < array.length; i++) {
        //if calling 'func' returns false, push array[i] into arr
        if (func(array[i], i, array) === false) {
            arr.push(array[i]);
        } 
    }
    return arr; 
};

/** _.partition
* Arguments:
*   1) An array
*   2) A function
* Objectives:
*   1) Call <function> for each element in <array> passing it the arguments:
*       element, key, <array>
*   2) Return an array that is made up of 2 sub arrays:
*       0) An array that contains all the values for which <function> returned something truthy
*       1) An array that contains all the values for which <function> returned something falsy
* Edge Cases:
*   1) This is going to return an array of arrays.
* Examples:
*   _.partition([1,2,3,4,5], function(element,index,arr){
*     return element % 2 === 0;
*   }); -> [[2,4],[1,3,5]]
}
*/
_.partition = function(array, func) {
    let arr1 = []; //arr will contain truthy values
    let arr2 = []; //arr2 will contain falsy values
    let arr3 = []; //arr3 will contain both arr1 and arr2
    //loop through 'array' and call 'func' on each element, index, and 'array'
    for (let i = 0; i < array.length; i++) {
        //if calling 'func' returns true, push array[i] into arr1
        if (func(array[i], i, array) === true) {
            arr1.push(array[i]);
        } 
    }
    //loop through 'array' and call 'func' on each element, index, and 'array'
    for (let i = 0; i < array.length; i++) {
        //if calling 'func' returns false, push array[i] into arr
        if (func(array[i], i, array) === false) {
            arr2.push(array[i]);
        } 
    }
   arr3.push(arr1);//pushing 'truthy' array into arr3
   arr3.push(arr2);//pushing 'falsy' array into arr3
   return arr3;
    
};

/** _.map
* Arguments:
*   1) A collection
*   2) a function
* Objectives:
*   1) call <function> for each element in <collection> passing the arguments:
*        if <collection> is an array:
*            the element, it's index, <collection>
*        if <collection> is an object:
*            the value, it's key, <collection>
*   2) save the return value of each <function> call in a new array
*   3) return the new array
* Examples:
*   _.map([1,2,3,4], function(e){return e * 2}) -> [2,4,6,8]
*/

_.map = function(collection, func) {
    let arr = [];// array to contain the result of calling 'func'
    // conditional to check if collection is an array
    if (Array.isArray(collection) === true) {
        for (let i = 0; i < collection.length; i ++) {
            //pushing the contents of calling 'func' into 'arr'
            arr.push(func(collection[i], i, collection));
        } 
   } else {
       // if collection is an object, push the contents of calling 'func' into arr
       // for in loop to loop through object
        for(let key in collection) {
        arr.push(func(collection[key], key, collection));
        }
    }
    return arr;
};

/** _.pluck
* Arguments:
*   1) An array of objects
*   2) A property
* Objectives:
*   1) Return an array containing the value of <property> for every element in <array>
*   2) You must use _.map() in your implementation.
* Examples:
*   _.pluck([{a: "one"}, {a: "two"}], "a") -> ["one", "two"]
*/

_.pluck = function(arrayOfObjects, property) {
    return _.map(arrayOfObjects, function(e, i, a) {return e[property]});
};

/** _.every
* Arguments:
*   1) A collection
*   2) A function
* Objectives:
*   1) Call <function> for every element of <collection> with the paramaters:
*      if <collection> is an array:
*          current element, it's index, <collection>
*      if <collection> is an object:
*          current value, current key, <collection>
*   2) If the return value of calling <function> for every element is true, return true
*   3) If even one of them returns false, return false
*   4) If <function> is not provided, return true if every element is truthy, otherwise return false
* Edge Cases:
*   1) what if <function> doesn't return a boolean
*   2) What if <function> is not given?
* Examples:
*   _.every([2,4,6], function(e){return e % 2 === 0}) -> true
*   _.every([1,2,3], function(e){return e % 2 === 0}) -> false
*/

_.every = function(collection, func) {
    // empty variable for our return statement
    let bool;
    // testing to see if 'func' === undefined or if 'func' is not a function
    // if 'func' is not a function, we'll still iterate through collection
    // searching for truthy and falsy
    if (func === undefined || typeof func !== 'function') {
        if (Array.isArray(collection) === true) {
            for (let i = 0; i < collection.length; i++) {
            if (Boolean(collection[i]) === true) {
                bool = true;
                // if any iteration of running 'func' results to false, then
                // return false
            } else {return false;}
            return bool;
        }
        } else {
            // for in loop to loop through collection if it is an object
            for(let key in collection) {
                // nested conditional statement to check to see if every iteration
                // of calling 'func' on 'collection' evaluates to true
                if(Boolean(collection[key]) === true) {
                   bool = true; 
                  // if any one iteration of calling 'func' evaluates to
                  // false, then return false
                } else {return false}
            }
            return bool;
        }
    }
    //If the above tests fail then 'func' is provided and/or 'func' is a 
    //function. This portion invokes 'func' on the given collection
    
    //testing collection to see if it is an array
    if (Array.isArray(collection) === true) {
        //looping through array and assigning bool to the result of running 
        //'func' on each element and index of 'collection'
        for (let i = 0; i < collection.length; i++) {
            //nested conditional statement to check each iteration of 
            //running 'func' for 'true'
            if (func(collection[i], i, collection) === true) {
                bool = true;
                //if any iteration of running 'func' results to false, then
                //return false
            } else {return false;}
        }
    } else {
        //for in loop to loop through collection if it is an object
        for(let key in collection) {
             //nested conditional statement to check to see if every iteration
             //of calling 'func' on 'collection' evaluates to true
            if(func(collection[key], key, collection) === true) {
                bool = true; 
                //if any one iteration of calling 'func' evaluates to
                //false, then return false
            } else {return false}
        }
    }
    return bool;
};

/** _.some
* Arguments:
*   1) A collection
*   2) A function
* Objectives:
*   1) Call <function> for every element of <collection> with the paramaters:
*       if <collection> is an array:
*        current element, it's index, <collection>
*       if <collection> is an object:
*        current value, current key, <collection>
*   2) If the return value of calling <function> is true for at least one element, return true
*   3) If it is false for all elements, return false
*   4) If <function> is not provided return true if at least one element is truthy, otherwise return false
* Edge Cases:
*   1) what if <function> doesn't return a boolean
*   2) What if <function> is not given?
* Examples:
*   _.some([1,3,5], function(e){return e % 2 === 0}) -> false
*   _.some([1,2,3], function(e){return e % 2 === 0}) -> true
*/

_.some = function(collection, func) {
    //empty variable for our return statement
    let bool;
    //testing to see if 'func' === undefined or if 'func' is not a function
    if (func === undefined || typeof func !== 'function') {
        if (Array.isArray(collection) === true) {
            for (let i = 0; i < collection.length; i++) {
                //if all iterations return false, then bool = false
            if (Boolean(collection[i]) === false) {
                bool = false;
                //if any iteration of running 'func' results to true, then
                //return true
            } else {return true;}
            return bool;
        }
        } else {
            //for in loop to loop through collection if it is an object
            for(let key in collection) {
                //nested conditional statement to check to see if every iteration
                 //of calling 'func' on 'collection' evaluates to true
                if(Boolean(collection[key]) === false) {
                   bool = false; 
                  //if any one iteration of calling 'func' evaluates to
                  //true, then return true
                } else {return true}
            }
            return bool;
        }
    }
    // If the above tests fail then 'func' is provided and/or 'func' is a
    // function. This portion invokes 'func' on the given 'collection'
    
    //testing collection to see if it is an array
    
    if (Array.isArray(collection) === true) {
        //looping through array and assigning bool to the result of running 
        //'func' on each element and index of 'collection'
        for (let i = 0; i < collection.length; i++) {
            //nested conditional statement to check each iteration of 
            //running 'func' for 'false'
            if (func(collection[i], i, collection) === false) {
                bool = false;
                //if any iteration of running 'func' results to true, then
                //return true
            } else {return true;}
        }
    } else {
        //for in loop to loop through collection if it is an object
        for(let key in collection) {
             //nested conditional statement to check to see if every iteration
             //of calling 'func' on 'collection' evaluates to true
            if(func(collection[key], key, collection) === false) {
                bool = false; 
                //if any one iteration of calling 'func' evaluates to
                //true, then return false
            } else {return true}
        }
    }
    return bool;
};

/** _.reduce
* Arguments:
*   1) An array
*   2) A function
*   3) A seed
* Objectives:
*   1) Call <function> for every element in <collection> passing the arguments:
*         previous result, element, index
*   2) Use the return value of <function> as the "previous result"
*      for the next iteration
*   3) On the very first iteration, use <seed> as the "previous result"
*   4) If no <seed> was given, use the first element/value of <collection> as <seed> and continue to the next element
*   5) After the last iteration, return the return value of the final <function> call
* Edge Cases:
*   1) What if <seed> is not given?
* Examples:
*   _.reduce([1,2,3], function(previousSum, currentValue, currentIndex){ return previousSum + currentValue }, 0) -> 6
*/

_.reduce = function(array, func, seed) {
    //using a loop to call 'func' on every element in 'array'
    //'func' will take 'previous result' as one if its argument, but will also
    //take 'seed' on first iteration
    if (seed === undefined) {
    seed = array[0];
        } 
    } 
    if (seed !== undefined) {
        for (let i = 0; i < array.length; i++) {
            seed = func(seed, array[i], i);
        }
    }
    return seed;
};

/** _.extend
* Arguments:
*   1) An Object
*   2) An Object
*   ...Possibly more objects
* Objectives:
*   1) Copy properties from <object 2> to <object 1>
*   2) If more objects are passed in, copy their properties to <object 1> as well, in the order they are passed in.
*   3) Return the update <object 1>
* Examples:
*   var data = {a:"one"};
*   _.extend(data, {b:"two"}); -> data now equals {a:"one",b:"two"}
*   _.extend(data, {a:"two"}); -> data now equals {a:"two"}
*/

//////////////////////////////////////////////////////////////////////
// DON'T REMOVE THIS CODE ////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

if((typeof process !== 'undefined') &&
   (typeof process.versions.node !== 'undefined')) {
    // here, export any references you need for tests //
    module.exports = _;
}
