/*
 *
 *  STRING MANIPULATION:
 *  
 * Because the contents of a string are indexed, we have a number of ways to manipulate,  
 * edit, and return values of strings. These tools are useful to developers, especially in the 
 * event of long string properties, or in the event that multiple strings must be joined together.
 */
 
 // 1. With operators //
 /* The addition sign can be used to concatenate (join) two or more strings together into one string. 
  * Remember that adding two strings will not automatically create a space. You must add quote marks with
  * a space between them in order to achieve this. 
  */
  var var1 = "Good morning."
  var var2 = "What are you doing?"
  console.log(var1 + ' ' + var2)/* prints "Good morning. What are you doing?" to the console. The three strings of
                                 * var1, ' ', and var2 are concatenated and returned as a single string value. */
  
 // 2. With string methods //
 // Developers have a number of string methods at their disposal in order to manipulate strings.
 
 // length method 
 /* This method returns the length of the string. This is also used to find out how many indices are inside
  * of the string.*/
 var string1 = 'Hello world';
 console.log(string1.length); //prints 11 to the console, because there are 11 characters in string1
 
 // index of
 /* This method is used to find the index of a string value within a string. The number returned reflects 
  * the first occurence of the first character of whatever string is specified. */
  
  var string1 = "Welcome to your first day!"
  console.log(string1.indexOf('your')); //prints 11 to the console because 'your' begins at that index
  
 // last index of
 /* This method returns the value of the index where the last occurence of a specified string lives. Please
  * note that this will return the number of whatever index that value begins at. */
 
  var string1 = "Welcome to your first day! The world is your oyster!"
  console.log(string1.lastIndexOf('your')); /* prints 40 to the console because the final instance of 'your' 
                                             * begins at that index */
                                             
 // upper case and lower case 
 /* There are two string methods that affect case, and those are toUpperCase() and toLowerCase(). These
  * methods can be used to change the case of a given string. Use bracket notation to denote a specific
  * character to be changed. */
  
  var greeting = 'hey sup';
  console.log(greeting[0].toUpperCase()) //result is 'H'
  console.log(greeting.toUpperCase()) //result is 'HEY SUP'
  
  //concat method
  /* Aside from using the addition operator to concatenate to strings, there is also a method that achieves 
   * the same result. The concat() method allows your to concatenate two or more strings. */
   var greeting1 = "hey";
   var greeting2 = "sup";
   var greeting3 = greeting1.concat(greeting2); //greeting three now equals one string stating 'heysup'
