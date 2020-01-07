// #!/usr/bin/env node

'use strict';

var customers = require('./data/customers.json');
var _ = require('lodown-ajohnson');

/**
 * 1. Import your lodown module using the require() method,
 *    using the string 'lodown-<my-username>', or whatever
 *    name with which you published your npm lodown project.
 *
 * 2. Solve all problems as outlined in the README.
 *
 * 3. We started the first one for you as an example! Make the rest in that style.
 *
 * 4. To test your work, run the following command in your terminal:
 *
 *    npm start --prefix ./projects/let-s-get-functional
 *
 *    IMPORTANT: Make sure you replace <YOUR_GITHUB_FOLDER with your actual github folder name that is in your workspace.
 */

var maleCount = function(array) {
  //using the filter function, find all the male customers
  let arrayOfMales = _.filter(array, function(customerObject, i, a){
    return customerObject.gender === 'male';
  });
  // using .length property for finding number of objects in array
  return arrayOfMales.length;
};



var femaleCount = function(array) {
  //using reduce, find the number of female customers
  return _.reduce(array, (seed, currentObj, i) => {
    if(currentObj.gender === 'female') {
      return seed = seed + 1;
    }
    return seed;
    //always return seed. If currentObj is male, seed won't increment
  }, 0); 

};

var oldestCustomer = function(array){
      const oldestObj = _.reduce(array, (seed, currentObj, i) => {if(currentObj.age > seed.age){
    seed = currentObj;
    }
    return seed;
   });
   return oldestObj.name;
  
  // let customerAge = _.reduce(array, (seed, currentObj, i) => {
  //   if (currentObj.age > seed) {
  //     seed = currentObj.age;
  //     return seed;
  //   }
  // }); 
  
  // console.log(customerAge);
  // let customerName = '';
  // for (let i = 0; i < array.length; i++) {
  //   if (array[i].age === customerAge) {
  //     customerName = array[i].name;
  //   }
  // }
  // return customerName;
  
};

var youngestCustomer;

var averageBalance;

var firstLetterCount;

var friendFirstLetterCount;

var friendsCount;

var topThreeTags;

var genderCount;

//////////////////////////////////////////////////////////////////////
// DON'T REMOVE THIS CODE ////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

// here, export any references you need for tests //
module.exports.maleCount = maleCount;
module.exports.femaleCount = femaleCount;
module.exports.oldestCustomer = oldestCustomer;
module.exports.youngestCustomer = youngestCustomer;
module.exports.averageBalance = averageBalance;
module.exports.firstLetterCount = firstLetterCount;
module.exports.friendFirstLetterCount = friendFirstLetterCount;
module.exports.friendsCount = friendsCount;
module.exports.topThreeTags = topThreeTags;
module.exports.genderCount = genderCount;
