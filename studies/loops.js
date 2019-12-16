/*
 *
 *
 * LOOPS:
 *
 * Loops allow our program to cycle through collections. Since arrays and objects can contain
 * an undetermined number of elements, we need a way to loop through those properties in the 
 * event that an array or object contains hundreds of elements or more.*/
 
 // 1. While, for, and for-in loops //
 
 // while loops //
 /* While loops allow us to specify a condition and execute the code until the condition is no longer true.
  * Developers must be very careful when using while loops. If the stop condition is never met, the loop will 
  * go on infinitely and the program will crash!
  */
 let num1 = 0
 while (num1 < 10) { //condition
  num1++ //code to be executed
  console.log(num1) //expected output: prints 0-10 to the console
 }
 
 // for loops //
 /* For loops allow us to loop and iterate until the stopping condition is met. This is especially useful
  * for looping through arrays. The for loop must have three components within its parentheses: starting 
  * condition, stopping condition, and incrementor. Then, the code block will execute until the stopping 
  * condition is reached. Much like while loops, we must be careful that a stopping condition is specified.
  */
  
  var arr1 = ['a','b','c','d','e','f','g','h','i','j'];
  for (let i = 0; i < 10; i++) {
  /* var i is declared and initialized to 0(starting condition), then, the code inside {} is to be executed as 
   * long as i is < 10 (stopping condition), and finally, i will increase in increments of 1 as shown 
   * by our incrementor, i++. 
   */
   console.log(arr1[i]); //expected result: prints letters a through j to the console
  }
  
  // for-in loops //
  /* JavaScript offers us a special type of loop that can be used to cycle through the key/value pairs
   * of an object. Since objects are not indexed, this is the only way we can retrieve either a key or 
   * value if we don't know the specific name of the key or value we are looking for. */
   
   var myObj = {a: 1, b: 2, c: 3} //initializing an object with key/value pairs
   for (let key in myObj) {//initializing the variable key to loop through myObj
    console.log(key) //prints all of the keys to the console
    console.log(myObj[key])//using bracket notation to print the values to the console
   }
   
 // 2. Looping any number of times, forwards or backwards //
 // for loops allow us to loop any specified number of times, forwards or backwards
 
 for(let i = 1000; i > -1; i--) {//starting condition is 1000, stopping condition is i > -1
  console.log(i); //prints the numbers 1000-0 to the console.
 }
 
 // 3. Loop over an Array //
 // For loops also allow us to loop over an array, where the variable is used to specify the array index
 
 
 var arr = [1,2,3,4,5,6]; //initializing an array to loop through
 for(let i = 0; i < 3; i++) {//i will be used to access the array index using bracket notation
  console.log(arr[i]);//prints the first three array elements to the console
 }
 
 // 4. Loop over an Object //
 
 /* As mentioned in the for-in loop section, JavaScript has a dedicated loop for looping through objects.
  * Either the key or value (or both) must be specified in the code to determine what portion of the object
  * is looped through. 
  */
     var myObj = {a: 1, b: 2, c: 3} //initializing an object with key/value pairs
     for (let key in myObj) {//initializing the variable key to loop through myObj
       console.log(key) //prints all of the keys to the console
       console.log(myObj[key])//using bracket notation to print the values to the console
     }
   
