/*
 * VARIABLES:
 *
 * 0. In order for us to hold things in memory during the life-cycle of a program, we can use variables.  
 * Variables are named identifiers that can point to values of a particular type, like a Number, 
 * String, Boolean, Array, Object or another data-type.  Variables are called so because once created, 
 * we can change the value (and type of value) to which they point.
 *
 * 1. To create a variable we use the keyword, var, followed by a name (id or alias) for our
 * variable.
 *
 * 2. There are 2 phases of using variables: declaration and initialization (or assignment).
 */

// 1. declaration //
var myName;

/*
 * At the declaration phase, the variable myName is undefined because we have not initialized
 * it to anything. 
 */
 
console.log(myName); // prints => undefined

// 2. initialization or assignment //
myName = 'john';

/* The variable myName now has a value, which is a string of 'john.' Once the initialization 
 * phase has occured, we can call upon or use the variable at any time, as long as the code is
 * written on a line below the variable's initialization. */
 
console.log(myName); // prints => john

// 3. re-assignment //
myName = 'bob';

/* This step is known as reassignment. Variables are flexible in such a way that their value 
 * can be changed at any time. To do this, simply write out the name of the variable and add 
 * the new value as shown in the example above. Now that the variable myName has a new value, 
 * any time it is called upon, it will be used with its new value as long as the code is below
 * the line of re-assignment. */
 
console.log(myName); // prints => bob

// NOTE: We can assign and re-assign anything to a variable - we cannot do this with constants //
var myVariable = 1;
var myVariable = true;
myVariable = "someString";

// 4. scope //

/* It is important to know that variables have what is known as global scope. That is, when we
 * declare and initialize them, they can be used almost anywhere in the code. The one exception 
 * to this rule is inside of a function. In such a case, the variable would have what's known as 
 * 'function scope,' which means that any variable declared inside of a function can only be used 
 * within that function. */
 
 var name = 'pat'; //name can be used anywhere in the code because it was declared outside of a function
 
 function printName() {
     console.log(name) //prints 'pat'
     var fullName = 'pat conroy' //variable declared within the function
     console.log(fullName) //will only work inside this function, because fullName is not global-scoped 
 }

// 5. const and let //

/* An updated version of JavaScript known as ES6 introduced two new variable types 
 * known as 'let' and 'const.' Much like the keyword var, developers can use let or 
 * const to create a new variable.  
 * 
 * Note: if const and let are declared in the global scope, they are accessible anywhere,
 * just like standard variables. 
 *
 * Unlike standard variables, however, if let is declared inside of a conditional statement
 * then it has what's known as 'block-scope.' This means that the variable can only be used
 * within that statement.
 * 
 * In the example provided below, the varible key cannot be used anywhere except inside 
 * of the loop in which it is declared. */
 
const constName = 'john'; //cannot be reassigned or re-declared because it is constant
let letName = 'bob'; //let with global scope, can be used anywhere after its line of declaration
 

var myObject = {name: "john"};
for (let key in myObject) { //using 'let' to declare the variable 'key'
    console.log(key); // prints the object's key to the console => 'name'
}

/* Const is similar to let in the sense that it can also be block-scoped, that is, only 
 * used within the conditional statement where it is defined. There is one major difference
 * with const, and that is that any variable declared with const cannot be re-assigned. Hence
 * the name const, or constant. Const variables are known as read-only, and they can be used
 * for important data that we don't want getting re-assigned for any reason. 
 * 
 * Note: because const cannot be re-assigned, this also means it cannot be declared without 
 * being initialized. Always be sure to assign data to your const on the same line you 
 * initialize it */

const sessionTime = 'Your session has timed out'; //declaring and initializing const
sessionTime = 'Your session has expired'; //attempting to reassign const
console.log(sessionTime); // throws a TypeError because const cannot be re-assigned

// 6. hoisting //

/* Hoisting is an important concept in JavaScript because it helps developers understand 
 * how the interpreter reads the program. Standard variable declarations are 
 * hoisted, or lifted, to the top of the code (line 0). This means once a variable has been 
 * declared, it can be read by the interpreter anywhere in the code. What's important to note,
 * however, is that only the declaration is hoisted, not the initialization (or content). This
 * is what allows us to reassign our variables at any time. This also allows us to use the same
 * variable with different data at different parts of our code. 
 *
 * Functions declarations are also hoisted to line 0, although unlike variables, their contents 
 * are hoisted too. 
 * 
 * Remember that because variables declared inside of a functio are local-scoped (or function-
 * scoped), this means that they are not hoisted to line 0. */

console.log(myFunction()); //still prints '3' because functions are hoisted along with their contents

function myFunction() { //declaring and initializing a function
  return 1+2; //as mentioned before, this function is now available anywhere 
}
 
var sample; //declaring a variable that is now hoisted to the top, and available everywhere
console.log(sample) //printing an un-initialized variable returns 'undefined'

/* Declaring a variable with the let keyword within the global scope will not hoist its declaration to the
 * top of the code (line 0). This is one major difference between let and var. Let can only be used once
 * the code reaches the line where it is declared. This same rule applies to const. */
 
 console.log(letRules); //throws a reference error because letRules does not yet exist
 
 let letRules = 'I heart ES6';
 

