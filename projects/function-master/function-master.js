//////////////////////////////////////////////////////////////////////
// Function 1 - Object Values ////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function objectValues(object) {
    //this function takes an object and returns an array containing its values
    //assigning array to result of Object.values method
    //This gives us the object's values in a list
    let arr = Object.values(object); 
    return arr; //return array
} 

//////////////////////////////////////////////////////////////////////
// Function 2 - Keys to String ///////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function keysToString(object) {
    //this function takes an object and returns a string containing its keys
    //using Object.keys to turn object keys into an array
    //adding .join method to turn an array into a string separated by ' '
    return Object.keys(object).join(' ');
}

//////////////////////////////////////////////////////////////////////
// Function 3 - Values to String /////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function valuesToString(object) {
    // this function takes an object and returns only its string values as strings
    // assigning the values of 'object' argument to an array, and creating a second
    // empty array to hold any contents that are a string
  let arr = Object.values(object);
  let arr2 = [];
  //using a conditional statement nested within a for loop to check if the
  //object's values are string values, and if they are, pushing them into
  //arr2
  for (let i = 0; i < arr.length; i++) {
    if (typeof arr[i] === 'string') {
      arr2.push(arr[i]);
    }
  }
    //turning arr2 into a string separated by ' ' and returning its value
    let str = arr2.join(' ');
    return str;
}
//////////////////////////////////////////////////////////////////////
// Function 4 - Array or Object //////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function arrayOrObject(collection) {
    //this function returns true if the argument is either an object or array, else false
    let collectionType; //declaring empty variable for return statement
    //conditional statement will check for all data types so that the function
    //can return 'array' or 'object' depending on the input argument
   
    if (collection === null) {
        collectionType = null;
    } else if (collection instanceof Date === true) {
        collectionType = null;
    } else if (collection === undefined) {
        collectionType = null;
    } else if (typeof collection === 'string') {
        collectionType = null;
    } else if (typeof collection === 'boolean') {
        collectionType = null;
    } else if (typeof collection === 'number') {
        collectionType = null;
    } else if (Array.isArray(collection) === true) {
        collectionType = 'array';
    } else { collectionType = 'object';
    }
    return collectionType;
}

//////////////////////////////////////////////////////////////////////
// Function 5 - Capitalize Word //////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function capitalizeWord(string) {
    //this function capitlizes the first word in the given string 
    //using bracket notation to access index 0 of given string, then capitalizing it
    //and assigning it to a variable
  let firstLetter = string[0].toUpperCase();
  //using the 'replace' method to replace the uncapitalized first letter
  //with the now capitalized one, and returning the new string
  let result = string.replace(string[0], firstLetter);
  return result;

}

//////////////////////////////////////////////////////////////////////
// Function 6 - Capitalize All Words /////////////////////////////////
//////////////////////////////////////////////////////////////////////

function capitalizeAllWords(string) {
    //this function capitlizases the first letter of each word in a given string
    //split the string into an array
    let arr = string.split(' ');
    //create a for loop to iterate through the array, and reassigning arr[i]
    //to equal arr[i] with index 0 capitalized, then concatenating arr[i] + the
    //rest of the string by using the substring method
    for(let i = 0; i < arr.length; i++) { 
        arr[i] = arr[i].charAt(0).toUpperCase() + arr[i].substring(1);
    }
    //use .join(' ') to turn the array back into a string, separated by spaces
    return arr.join(' ');
}

//////////////////////////////////////////////////////////////////////
// Function 7 - Welcome Message //////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function welcomeMessage(object) {
    // this function creates a greeter for the name contained within the given object
    // will take an object as an argument, and take the value associated with
    // key 'name' and place that value inside of variable 'name'. Then, using bracket
    // notation and the toUpperCase() method to access the first letter, the function will
    // concatenate the capitalized first letter with the rest of the string, using the substring
    // method
    let name = object['name'][0].toUpperCase() + object['name'].substring(1);
    console.log(name);
    //concatenating the capitalized first name with "Welcome " and "!" in order to create
    //the final greeter message
    let greeter = "Welcome " + name + '!'; 
    return greeter;
}

//////////////////////////////////////////////////////////////////////
// Function 8 - Profile Info /////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function profileInfo(object) {
    //this function creates a message based around the object's 'name' and 'species'
    //this function will take an object with keys of 'name' and 'species',
    //then create a message with each word capitlized. We'll first 
    //assign the values to empty variables separately, while using the toUpperCase()
    //method
    let name = object['name'][0].toUpperCase() + object['name'].substring(1);
    let species = object['species'][0].toUpperCase() + object['species'].substring(1);
    //we'll return the above values concatenated with ' is a '
    let message = name + ' is a ' + species;
    return message;
}

//////////////////////////////////////////////////////////////////////
// Function 9 - Maybe Noises /////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function maybeNoises(object) {
    //this function returns an array of animal noises (if the object has such a value)
    //this function will receive an object as an argument and test whether or not
    //is has a key/value pair of noises. We'll use a conditional statement to 
    //determine if there is a noises key and if it has been assigned any values
    //if the object has an array of 'noises', we'll return the noises joined as a single string
  let noises;
  if (object['noises'] === undefined) {
    noises = 'there are no noises';
  } else if (object['noises'].length > 0) {
    noises = noises = object['noises'].join(' ');
  } else {noises = 'there are no noises'}
  return noises;

    
}

//////////////////////////////////////////////////////////////////////
// Function 10 - Has Words ///////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function hasWord(string, word) {
    //this function tests to see if a string contains a specific word. 
    //.includes() method will test for the given word, and return true if
    //the string contains that word, else return false
    let bool;
    if (string.includes(word)) {
        bool = true;
    } else {bool = false}
    return bool;
}

//////////////////////////////////////////////////////////////////////
// Function 11 - Add Friend //////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function addFriend (name, object) {
    // this function will take a name and an object, then add the name to the 'friends'
    // array inside of the object. Then, return the object
    let arr;
    //placing the 'friends' array inside of arr
    arr = object['friends'];
    //pushing the value of 'name' into arr
    arr.push(name);
    //reassigning 'friends' to arr
    object['friends'] = arr;
    return object;
}

//////////////////////////////////////////////////////////////////////
// Function 12 - Is Friend ///////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function isFriend(name, object) {
    // this function will take a name and an object, and return true if the name is on the 
    // 'friends' list, else return false. First we'll add the contents of 'friends' to a string
    // then we'll use the .includes() method to test whether or not 'name' is a part of the list
    let bool;
    //testing to see if object is undefined
    if (object === undefined) { 
        bool = false; 
    //testing to see if object contains 'friends', and if it is undefined
    } else if (object['friends'] === undefined) {
      bool = false;
    //if 'friends' includes 'name', then bool = true
    } else if (object['friends'].includes(name)) {
        bool = true; 
    } else {bool = false}
    return bool;
}

//////////////////////////////////////////////////////////////////////
// Function 13 - Non-Friends /////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function nonFriends(name, array) {
    //this function will take a name, and an array containing a list of objects,
    //then return a list of all the names that the original name is not friends with
    //first we need to create an array with a list of all the friend names
    let arr1 = [];//arr1 = master list of names
    let arr2 = [];//arr2 = names to be removed
    //we need to cycle through the argument 'array' and assign object 'name' to a single array
    for (let i = 0; i < array.length; i++) {
      //placing object values into an array
      arr1[i] = array[i]['name'];
    }
    console.log(arr1)

  //we need a for loop to loop through array, and add
  //the 'friends' of 'name' to arr2. THis way we know which names need to be removed
    for (let i = 0; i < array.length; i++) {
      if (name === array[i]['name']) {
        arr2[i] = array[i]['friends'];
      }
    }
    console.log(arr2)

    //creating a for loop to check for possible 'undefined' inside of arr2. If any values equal undefined, they will throw an error in the for loops
    //below, so we will assign undefined to ' '
    for (let i = 0; i <arr2.length; i++) {
      if (arr2[i] === undefined) {
        arr2[i] = ' ';
      }
    }
   console.log(arr2)
    //now arr2 = the list of names that argument 'name' is friends with
    //the problem is that the arr2 is an array with an array
    //we need to reassign arr2 to equal the array that is
    //inside of it. We'll test arr2[i] to see if Array.isarray equals true, and if so, we'll reassign arr2
    //to that array
    
    for (let i = 0; i < arr2.length; i++) {
      if (Array.isArray(arr2[i]) === true) {
        arr2 = arr2[i];
      }
    }
    console.log(arr2);

    //we need another for loop to loop through arr1,
    //with a nested conditional statement that will
    //remove the argument 'name' from the list
    for (let i = 0; i < arr1.length; i++) {
      if(arr1[i] === name) { 
        arr1.splice(i, 1);
        } 
    }
    console.log(arr1)
    
    //Nested for loops to check the contents of arr1, to see if they equal
    //arr2. We must account for changing index numbers, as whenever an item
    //is removed, another item will shift down one. The first conditional
    //statement asks if 'j' equals 'i' then remove 'j' from arr1. The second 
    //conditional asks if 'i' equals 'i' then remove 'i' from arr1.
    for (let i = 0; i < arr1.length; i++) {
      for (let j = 0; j < arr1.length; j++) {
        if (arr1[j] === arr2[i]) {
          arr1.splice(j, 1)
        }
      }
      if (arr1[i] === arr2[i]) {
        arr1.splice(i, 1)
        }
    }
    return arr1;
}

//////////////////////////////////////////////////////////////////////
// Function 14 - Update Object ///////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function updateObject(object, key, value) {

  //This function will take an object, key, and a value as an argument. If the
  //key exists on the object, the function will update it with the new value. If the
  //key does not exist, the function will create it
  object[key] = value;
  return object;
}

//////////////////////////////////////////////////////////////////////
// Function 15 - Remove Properties ///////////////////////////////////
//////////////////////////////////////////////////////////////////////

function removeProperties(object, array) {
  
  //this 
  let arr = Object.keys(object);
    for (let i = 0; i < arr.length; i++) {
      for (let j = 0; j < arr.length; j++) {
        if (arr[j] === array[i]) {
          delete object[array[i]];
        }
      }
      if (arr[i] === array[i]) {
        delete object[array[i]];
        }
    }
  return object;
}

//////////////////////////////////////////////////////////////////////
// Function 16 - Dedup ///////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function dedup(array) {
  var newArray = [];
        
  //Using indexOf to filter through unique values of argument array
  //if indexOf returns '-1', then the value of array[i] is not present inside
  //of newArray. In that case, we'll push array[i] into newArray. If it is present,
  //we will not push that value, resulting in an array without duplicatesS
  for(let i = 0; i < array.length; i++){
      if(newArray.indexOf(array[i]) === -1) {
          newArray.push(array[i]);
      }
  }
  return newArray;
}

//////////////////////////////////////////////////////////////////////
// DON'T REMOVE THIS CODE ////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

if((typeof process !== 'undefined') &&
   (typeof process.versions.node !== 'undefined')) {
    // here, export any references you need for tests //
    module.exports.objectValues = objectValues;
    module.exports.keysToString = keysToString;
    module.exports.valuesToString = valuesToString;
    module.exports.arrayOrObject = arrayOrObject;
    module.exports.capitalizeWord = capitalizeWord;
    module.exports.capitalizeAllWords = capitalizeAllWords;
    module.exports.welcomeMessage = welcomeMessage;
    module.exports.profileInfo = profileInfo;
    module.exports.maybeNoises = maybeNoises;
    module.exports.hasWord = hasWord;
    module.exports.addFriend = addFriend;
    module.exports.isFriend = isFriend;
    module.exports.nonFriends = nonFriends;
    module.exports.updateObject = updateObject;
    module.exports.removeProperties = removeProperties;
    module.exports.dedup = dedup;
}