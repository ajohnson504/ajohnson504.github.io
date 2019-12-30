/*
 *
 * DATA TYPES:
 * 0. There are a number of data types available to JavaScript developers, each with its own unique 
 * purpose. Developers must understand the properties of each data type in order to make sound 
 * choices when writing code. The data types are a developer's basic toolkit, and they allow us
 * to write and manipulate code in complex ways. 
 *
 * 1. Developers generally place data types into two categories: simple (primitive) data types, and 
 * complex data types. Simple data types include numbers, strings, Boolean values, NaN, null, and 
 * undefined. Complex data types include objects, arrays, and functions. 
 */
 
 // 1. numbers //
 
 var myNum = 12; //assigning a value of 12 to a variable
 
/* Numbers are any numerical value used in JavaScript. This includes numbers with decimals. Developers 
 * do not have to tell the JavaScript interpreter how to make mathematical calculations. That feature
 * is already built into the language. 
 */
 
 var twelve = 12; //assigning value of 12 to a variable
 var ten = 10; //assigning value of 10 to a variable
 var add = ten + twelve; //placing a mathematical expression inside a variable
 console.log(add); //logs 22 to the console 
 
 //Large numbers can be written with an exponent as follows:
 var huge = 155e3 //is the same as 155000
 
 //Although the interpreter adds numbers, using + with strings concatenates them.
 var add = 12 + 12; // result is 24
 var add = '12' + '12'; //result is '1212' because the two values are strings, not numbers
 var add = 12 + '12'; //adding a number and a string produces a string. Result is '1212'
 
 // 2. strings //
 
/* Strings are any form of text data that are wrapped in quotes. As mentioned above, numbers can 
 * be strings too so long as they are within a set of quotes. Also mentioend above, strings can be 
 * concatenated using the + operator. This simply means that adding two strings together produces a single
 * string with both contents from the original strings. 
 */
 
 var string1 = "Hello" //assigning the string "Hello" to a variable
 var string2 = "World" //assigning the string "World" to a variable
 console.log(string1 + string2)//prints "HelloWorld" to the console
 
 /* Spaces are not automatically added to strings, so to redo the above example but with a space and a 
  * period, you would need to place a quotes with a single space in the middle, and quotes with
  * a period at the end. 
  */
  
console.log(string1 + ' ' + string2 + '.')//prints "Hello World." to the console

/* Each character in a string is stored in an index, and can be accessed by its index number. This feature also
 * helps us to find out how long a single string property is, which is useful in the event of a very long
 * string. To access an individual character, we use the variable name along with bracket notation. Since 
 * strings use a zero index, the first character in the string lives at the index of 0. The second character at
 * 1, and so forth.
 */
 
 var sampleString = 'Howdy'; //declaring a variable with string as its contents
 console.log(sampleString[0]); //prints 'H' to the console because 'H' lives at the 0 index
  
 /* We use a similar method to determine the length of a string, and this is known as the length function. 
  * Since strings are indexed starting at 0, we can use the length function -1 to call upon the last character
  * in a string. 
  */
  
 console.log(sampleString.length) //prints 5 to the console, because 'Howdy' is 5 characters long
 console.log(sampleString.length-1) //prints 'y' to the console, because 'y' is indexed at 1 less than the length
 
 //3. boolean //
 
/*Boolean data types can only have one of two values: true or false. There are many instances in programming
 * where a true or false value is necesarry, forming something similar to an on/off switch. An expression can 
 * be checked as true or false by using the Boolean() function. */
 
 console.log(Boolean(2 == '2')); //uses Boolean function and prints true, which is a Boolean value
 
 //true or false can also be assigned to variables
 
 var bool = true; //assigning the value of 'true' to a variable
 
/* In JavaScript, anything that holds a value is considered to be true. This includes any data type, function,
 * object, or array. The Boolean() function will check a value's truthyness or falsyness. Since anything holding 
 * value is true, this means that anything without a value is false. Data types that return false when tested 
 * with the Boolean() function include 0, -0, null, undefined, NaN, empty variables, and empty strings.
 */
 
 Boolean('') //returns false
 Boolean(NaN) //returns false
 Boolean(25) //returns true
 
 // 4. arrays //
 
/* An array is a complex data type that is used to collect and store data. Because of this, arrays are often 
 * referred to as a type of collection. One important component to arrays is that they can be of any size. Arrays
 * are formatted using the standard brackets: [] and their elements are separated by commas. 
 *
 * Arrays, much like strings, use a zero index to store contents at a specific location. Also like strings, 
 * the bracket notation can be used to call forth whatever data is stored within the array at that index. The
 * .length method also will give us the number of elements in the array. 
 */
 
 var arr1 = []; //declaring an empty array literal
 arr1 = ['a','b','c','d']; //assigning the letters a, b, c, and d to the array
 console.log(arr1.length) //prints 4 to the console, showing us how many items are in the array
 console.log(arr1[arr1.length-1]) //prints 'd', which is the last item in the array
 
// push, pop, shift, and unshift //

 arr1.push('e');//pushes the letter 'e' onto the back of the array
 
/* There are several methods that allow us to add elements to an array on the fly. The push() method
 * allows developers to quickly add any element on the back of the array, using the aforementioend syntax.
 * The pop() method removes the last element from the array. On the other side, the shift() method removes the
 * first element from the array, and the unshift() method adds an element to the beginning of the array. 
 */
 
 arr1.shift(); //using unshift() to remove the first element of the array
 console.log(arr1); //prints 'b', 'c', 'd', 'e' to the console
  
 // 5. objects //
 
/* Much like arrays, objects are complex data types that store and collect data. They can also be of any size.
 * The key difference is that objects do not store data at an index. Rather, data is stored in key/value pairs 
 * with no numbered order. Every key that is added to an object must contain some value. Please note that both
 * keys and values are interpreted as strings in code. Objects are created using the curly braces {} and their
 * key/value pairs are separated by commas. */
 
 var obj1 = {}; //declaring an empty object literal
 obj1 = {band1: 'Alice in Chains',//the key is band1, followed by a colon, then the value is 'Alice in Chains'
        band2: 'Led Zeppelin'}//the key is band2, followed by a colon, then the value is 'Led Zeppelin'
 
 /*Dot notation can be used to access the value of a key, as long as the key is known. First, type the name 
  * of the object, followed by a period, then the name of the key whose value you wish to invoke. The same can
  * be used with bracket notation. However, when using bracket notation, the key must be wrapped in quotes. 
  * Remember that keys and values are always stored as strings.
  */
 
console.log(obj1.band1) //prints 'Alice in Chains' to the console 
console.log(obj1['band1'])//same result as above

// 6. functions //

/* Functions are a complex data type that are designed to be reused. That is, all of the code placed inside 
 * of a function will run each time the function is called. Functions are invoked using the function keyword,
 * then assigned a name followed by parentheses. While functions don't require parameters, any 
 * parameter being used must go inside the parentheses. Then, all of the code to be executed will go inside
 * a set of curly braces. 
 *
 * Since function parameters are undefined, this allows us to use a different set of parameters each time the
 * function is called. It is because of this that functions are all about reuse! 
 * Have a look at this standard addition function. This function can be used with any two numbers at any 
 * time, and it saves the developer from having to write out the code every time two numbers must be added. 
 */
 
 function addTwoNumbers(num1, num2) {//declaring a function that takes two parameters, num1 and num2
     return num1 + num2 //code to be executed is the addition of the two parameters
 };

// 7. undefined //

/* undefined is a value that prints or returns if a variable has been declared, but never initilized. 
 * Arguments or parameters placed inside of a function also retain the value of undefined. 
 */
 
 var x;//declaring a variable called x
 console.log(x); //prints undefined to the console
 
 function func1(arg1) { //declaring a function that takes a single parameter
  return arg1 - 1; //function will subtract 1 from the parameter
}
console.log(typeof arg1); //prints 'undefined', showing that function parameters have a value of 'undefined'

// 8. null //

/* Null is a primitive data type that represents the intentional intilization of null to a variable. Any
 * variable declared and intitilized with null will remain as such until re-assigned. Null contains a falsy
 * value, just like undefined and NaN. Note that for equality purposes, null is loosely (==) equal to undefined.
 * So for strict comparisons between the two, use ===. 
 */

var musicMan = null; //assigning a value of null to a variable

// 9. NaN //

/* NaN stands for Not-A-Number. It represents a data type that is unequal to any other value, including another
 * NaN. Thus, strictly comparing NaN to anything else will return false. NaN is rarely used in a program. It 
 * is more often used to show the return value when a math function fails. 
 */
 
 var noNum1 = NaN; //assigning NaN to a variable
 var noNum2 = NaN; //assigning NaN to a variable
 console.log(Boolean(noNum1===noNum2)); //prints false because NaN cannot be equal to any other value

// 10. infinity and -infinity //

/* In JavaScript, infinity is represented as a numerical value, and can be used in code, although it is rare
 * for a developer to ever need to do so. However, both infinity and -infinity are represented, and can
 * be called upon. Note that in mathematical expressions, infinity and -infinity follow all of the standard
 * arithmetic rules for positives and negatives. Infinity is a global variable and the syntax is as follows: 
 * Number.POSITIVE_INFINITY */

var posInf = Number.POSITIVE_INFINITY; //assigning infinity to a variable
var negInf = Number.NEGATIVE_INFINITY; //assigning -infinity to a variable
console.log(posInf, negInf); //expected output: Infinity -Infinity

// 11. primitive data types vs. complex data types //

/* Primitive data types formulate the most atomic and immutable data types in JavaScript. In this sense, 
 * the term atomic refers to a data type that is irredeciuble, or, at its most basic form and cannot 
 * be broken into smaller components. As for immutable, this means that primitive data types are static and 
 * cannot be changed once created. 
 *
 * This begs the question: how can variables be immutable if we are allowed to re-assign them a new value? 
 * When values are reassigned, they are simply shifted to a new value and therefore a new space in the 
 * computer's memory is created for the re-assignment. Thus, the original value remains in memory and is
 * unchanged. 
 *
 * The list of primitive data types are as follows: number, string, Boolean, undefined, null, and NaN. 
 */
 
 var music = 'jazz'; //declaring a value and assigning it value, which is now stored in memory
 var music = 'bebop'; //re-assigning the value. The original value is still stored, but the variable ha

/* Complex data types are designed to store and hold other values, including other complex data types. 
 * Complex data types include objects, arrays, and functions. Remember that any variety of data type 
 * can be stored within a complex data type. 
 */
 
var bool = 'Boolean'; //a simple data type
var arr = ['number', 'string', 'null']; //an array containing three separate strings
function dataTypes(array, string) { //creating a function expression that will receive arrays and strings
  array.push(string); //the function can receive arrays as arguments, and push another value into it
  return array //the function will return the value the changed array
}

dataTypes(arr, bool) /* Calling the function prints ['number', 'string', 'null', 'Boolean'] to the console, 
                      * proving that a complex data type (function) can receive and output other complex 
                      * data types (arrays). */

// 12. copy by reference vs. copy by value // 
 
 /* Primtive data types and complex data types are stored differently in memory. This has to do with the 
  * size needed for each data type. Primitive types can contain a maximum of 8 bits, which is the exact 
  * size allocated for a variable. This is why primitive data types when copied create an exact copy of
  * the original value. Copying a primitive data type copies the exact piece of data stored in memory. 
  *
  * But we require complex data types to be of any size, and to be flexible enough to change size over
  * time. In order to do this, variables containing complex data types don't actually contain a copy of 
  * the data, but rather a reference point to the location of the data stored in memory. So when we add
  * new contents to an object, for example, the space is allocated in memory for the new data, and the 
  * variable contains a reference point to where the data is stored. Thus, when we copy a variable that
  * that holds a complex data type, we are not copying the actual data, but rather a reference 
  * point to that data. */
  
  var firstName = 'Joe'; //declaring and assigning a first name variable
  var lastName = 'Smithers'; //declaring and assigning a last name variable
  
  var fullname = firstName + lastName; /* The data stored in firstName and lastName are copied directly
                                        * from memory into the new variable, fullName. This is an example
                                        * of copy by value.*/
                                        
  var nameArray = [firstName, lastName]; //When declaring nameArray2, we have assigned it the value of nameArray.
  var nameArray2 = nameArray;            //Since an array is a complex data type, the actual value of nameArray is 
                                         //not copied into nameArray2. Instead, a reference point to that data's 
                                         //location in memory is copied. This is what allows us to continue to add
                                         //data to our complex data type, because our array is not restricted to the
                                         //8 bits of memory that our simple data types are restricted to. 
                                         //This is an exaple of copy by reference.
 