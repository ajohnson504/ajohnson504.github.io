/**
 * Part 1
 *
 * In this file, we're going to practice
 * creating and accessing data structues.
 *
 * See the README for detailed instructions,
 * and read every instruction carefully.
 */

//////////////////////////////////////////////////////////////////////
// Step 1 - Object Creation //////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

 //Here, we'll declare an object literal named 'animal' then, using dot notation, we'll asign it a species, name, and 
 //an empty array that will contain a list of animal noises. Finally, we'll console.log our new object
 var animal = {};
 animal.species = 'bear';
 animal['name'] = 'Yogie';
 animal.noises = [];
 console.log(animal);

//////////////////////////////////////////////////////////////////////
// Step 2 - Array Creation ///////////////////////////////////////////
//////////////////////////////////////////////////////////////////////



//Here, we'll create an empty array named noises. Then, using bracket notation, we'll add a noise
//at index 0. Then, using the .push and .unshift method, we'll add two more noises to our array.
//Then, using the .length method, we'll add another noise to the very end of our array. Finally, we'll 
//print three items to the console: the length of the array, the final item in our array, 
//and lastly all the contents of the array
var noises = [];

noises[0] = 'roar';
noises.push('snarl');
noises.unshift('growl');
noises[noises.length] = 'yelp';
console.log(noises.length);
console.log(noises[noises.length-1]);
console.log(noises);



//////////////////////////////////////////////////////////////////////
// Step 3 - Combining Step 1 and 2 ///////////////////////////////////
//////////////////////////////////////////////////////////////////////

 //Here, we'll use bracket notation to assign our array of noises to the noises property
 //inside the object 'animal'. Then, we'll use the .push method to assign yet another
 //noise to our animal array. Finally, we'll console.log our object to test and make
 //sure it properly receive the new noise

animal['noises'] = noises;
noises.push('screech');
console.log(animal);


/* *******************************************************************
 * Step 4 - Review
 *
 * 1. What are the different ways you can access properties on objects?
 *      //access properties of objects through bracket or dot notation
 *      //bracket notation syntax = objectName['propertyName'];
 *      //dot notation syntax = objectName.propertyName;
 * 2. What are the different ways of accessing elements on arrays?
 *      //access elements on arrays using bracket notation only
 *      //bracket notation syntax = arrayName[indexNumber];
 *
 * *******************************************************************
 */

/* *******************************************************************
 * Step 5 - Take a Break!
 *
 * It's super important to give your brain and yourself
 * a rest when you can! Grab a drink and have a think!
 * For like 10 minutes, then, BACK TO WORK! :)
 * *******************************************************************
 */

//////////////////////////////////////////////////////////////////////
// Step 6 - A Collection of Animals //////////////////////////////////
//////////////////////////////////////////////////////////////////////

      
// Next, we'll create a new array called 'animals', and then we'll push our 'animal' object into 
// our 'animals' array, then we'll console.log it to make sure everything looks good. Next, we'll create
// an object named "duck" which will contain all of the key/value types that our first animal contained. 
// So duck should contain keys of 'species', 'name', and 'noises'. The latter will be an array, and will
// display four noises that ducks make. Finally, we'll push our 'duck' object into our 'animals' array and
// console.log our animals array to make sure everything looks good.

var animals = [];
animals.push(animal);
console.log(animals);
var duck = {species: 'duck',
            name: 'Jerome',
            noises: ['quack', 'honk', 'sneeze', 'woosh']
            };
animals.push(duck);
console.log(animals);

//Following the same steps as above, we'll create an object named 'dog', and assign it keys of 'species', 'name',
//and a 'noises' array. Then, we'll push our new 'dog' object into our 'animals' array then console.log 'animals' 
//to make sure everything is good. 
var dog = {species: 'dog',
            name: 'Sam',
            noises: ['bark', 'woof', 'sneeze', 'growl']
            };
animals.push(dog);

//Finally, we'll create our last animal, an object named 'cat', and assign it keys of 'species', 'name',
//and a 'noises' array. Then, we'll push our new 'cat' object into our 'animals' array then console.log 'animals' 
//to make sure everything is good. 
var cat = {species: 'cat',
            name: 'Joe',
            noises: ['meow', 'purr', 'sneeze', 'screech']
            };
animals.push(cat);


//////////////////////////////////////////////////////////////////////
// Step 7 - Making Friends ///////////////////////////////////////////
//////////////////////////////////////////////////////////////////////


// First we'll create an array to be used as a friends list 
// I chose an array so that we can access our friend list by index number. Since our function
// will use the math.random method, a numbered list will be necessary

var friends = [];

//Next, we'll create a function called getRandom that will take our animals array and return a random
//index number from that array. The function will take a local scoped variable to be used as the return 
//statement. We'll call this variable 'randomNumber.' Then, we'll assign our math.random equation to 'randomNumber'
//The 'Math.floor' portion of the equation rounds the number up the the nearest integer. The 'math.random' portion 
//of the equation gives us a random number between 0 and 1, and the 'animals.length' portion will specify the max
//number for our equation. In this case, we need a random number that is an index of our animals array. Since 
//the math.random number will never fully equal 1, then we know that our integer will always be less than the length
//of our array
function getRandom(animals) {
   let randomNumber;
   randomNumber = Math.floor(Math.random() * animals.length);
    return randomNumber;
}

//Now, we're going to push a random index from our 'animals' array into our friends list. We'll use the push
//method followed by an invocation of the getRandom function (which specifies the index number) then the dot 
//notation to push the 'name' value from our random animal object. Finally, we'll add our friends list to the 'duck' object.
//Our final result is that 'duck' now has a randomly chosen friend.
  friends.push(animals[getRandom(animals)].name);
  console.log(friends);
  duck['friends'] = friends; 

/**
 * Nice work! You're done Part 1. Pat yourself on the back and
 * move onto Part 2 in the file called "functions.js"
 */



//////////////////////////////////////////////////////////////////////
// DON'T REMOVE THIS CODE ////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
var animal, noises, animals, friends, getRandom;
if((typeof process !== 'undefined') &&
   (typeof process.versions.node !== 'undefined')) {
     module.exports.animal = animal || null;
     module.exports.noises = noises || null;
     module.exports.animals = animals || null;
     module.exports.friends = friends || null;
     module.exports.getRandom = getRandom || null;
}
