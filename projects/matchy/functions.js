/**
 * Part 2
 *
 * In this file, we're going to create some
 * Functions to work with our data created in
 * data.js.
 *
 * See the README for detailed instructions,
 * and read every instruction carefully.
 */

//////////////////////////////////////////////////////////////////////
// Step 1 - Search ///////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////


// Here, we'll create a function called 'search' that will see if a specified animal is contained inside of our 
// animals array. If yes, the function will return that animal's object. If no, it will return null 
// The function will  will take an array as the first argument, and a string as the second argument 
// (note: 'animals' parameter will be our array, 'name' parameter will be our string)
// We'll use a for loop to loop through the array, then a conditional statement to test if our string
// is found at any of the array indices

function search(animals, name) {
    for (let i = 0; i < animals.length; i++) {
        if (animals[i].name === name) {
            return animals[i];
        }
    } return null;
}


//////////////////////////////////////////////////
// Step 2 - Replace //////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////


// Here, we'll create a function that searches through our 'animals' array. If the specified string is found
// within our array, then we'll replace the string's object with the replacement object. To do this, the function
// will take three arguments: our animals array, a string to search for, and a replacement object to use if the
// string is found
// (note: this function takes no return statement. It simply reassigns the value of our given string if that string
// is found within our array)
// We'll use a for loop to loop through the array, then a conditional statement to test if our string
// is found at any of the array indices. 

function replace(animals, name, replacement) {
    for (let i = 0; i < animals.length; i++) {
        if (animals[i].name === name) {
            animals[i] = replacement;
        }
    }
}

//////////////////////////////////////////////////////////////////////
// Step 3 - Remove ///////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

// This function will search through our animals array, and if the specified string is found in the array,
// the function will remove it. We'll pass two arguments into our function: the animals array, and a string to
// search for. Then, we'll use a conditional statement nested within a for loop to test for our string. If the
// string is found, the function applies the 'remove' method to the index where it is found

function remove(animals, name) {
    for (let i = 0; i < animals.length; i++) {
        if (animals[i].name === name) {
            animals[i] = remove;
        }
    }
}

//////////////////////////////////////////////////////////////////////
// Step 4 - Create ///////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

// Our final function will take two arguments, the first is our 'animals' array, and the second is an 'animal'
// object. The function will test to see if the animal object has 'name' and 'property' values with lengths
// that are both > 0. Then, the function will test to see if the animal is contained inside the array. If not,
// then the function will add the animal to our array. We'll use two conditional statements nested within a for 
// loop. The first will test for our 'name' and 'property' length. The second will test to see if the 'name' contained
// in our object is contained within any of the objects in our array. If it is, then the "return" statement will end
// the function. If it isn't, the the function will push our object into the animals array.

function add(animals, animal) {

    for (let i = 0; i < animals.length; i++) {
        if ((animal.name.length > 0 && animal.species.length > 0)) 
        if (animals[i].name === animal.name) {return;}
    }     animals.push(animal);
}

//////////////////////////////////////////////////////////////////////
// DON'T REMOVE THIS CODE ////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
var search, replace, remove, add;
if((typeof process !== 'undefined') &&
   (typeof process.versions.node !== 'undefined')) {
    module.exports.search = search || null;
    module.exports.replace = replace || null;
    module.exports.remove = remove || null;
    module.exports.add = add || null;
}
