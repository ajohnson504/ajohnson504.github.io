/*
 *
 *
 * FUNCTIONS:
 *
 *
 * Function are a complex data type in JavaScript, and they allow us to build code that can be reused. 
 * Functions also represent a complete statement in code, and they are able to utilize any data type 
 * (including other functions). Also unique to functions is their ability to take on parameters (or a
 * arguments). A parameter is an undefined data type that can be received when calling or invoking a function.
 * The developer must specify what to do with the parameter inside the code block. Npte that creating a 
 * function with parameters is optional, and that a function can receive any number of parameters.
 * 
 * To create a function, we must use the 'function' keyword, followed by the name of the function with 
 * parentheses at the end, like this: function functionName(). Then, we must specify whether or not the
 * function will take paramters, which go inside of the parentheses. Finally, our code must be written inside
 * of the code block. Please note that functions can only contain a single return statement. As soon as the 
 * functio reads the return statement, the code will exit the function. 
 *
 * Function syntax:
 */
 
 function functionName(paramter1) { //declaring a function called functioName with one parameter
     //code here
 }
 
// 1. the two phases of using a function
/* Using a function occurs in two phases. First, we must declare and define the function. Declaring the function
 * refers to using the keyword and naming it. Defining a function refers to writing out the code to be executed
 * whenever a function is invoked. Referring back to the section on hoisting, we know that not only is a function 
 * declaration hoisted to line 0 of the code, but so is its definition. This means that once a function is defined 
 * then we can use it anywhere in our code, as many times as we like. 
 *
 * The second phase of using a function is invoking or calling upon the function. If a function has no parameters, then
 * we simply need to write out the name of the function followed by parentheses. If the function does take parameters,
 * then we must specify the argument to be placed into the parameter. */
 
 //phase 1: declaring/defining
 function printBool(param1) { //declaring a function with one parameter
     console.log(Boolean(param1)) //defining the function. This function will print the Boolean value of the parameter
 }
 
 //phase 2: calling/invoking
 /* This section demonstrates the syntax for a named function, which involves the function name, parentheses, 
  * and argument (assuming there is a parameter). */
 var num = 55; //varible with a number
 printBool(num); //calling the function and passing num into it. The function will print "true"
 
 
// 2. parameters vs. arguments 
/* Functions take optional parameters (or arguments). The difference between the two is that parameter refers to 
 * the undefined variable written into the function definition, whereas the argument refers to the actual data 
 * being passed into the function once it is invoked. */

 function printBool(param1) { //param1 is the parameter. It is undefined 
     console.log(Boolean(param1))  
 }
 
 var num = 55; 
 printBool(num); //num us the argument. It contains data and that is being passed into the function
 

// 3. assigning functions to variables
/* When a function as assigned to a variable this is known as a function expression. To use the function, we simply
 * need to write out the variable name followed by parentheses. Note that naming a function in this scenario is 
 * optional. The syntax is as follows:
   
 * var = functionExpressionName function() {
     //code here
 }
 
 */
 //functionExpressionName() //invoking the function using the name of the variable
 
// 4. specifying inputs vs outputs
/* The input refers to the argument that is placed inside the parameter. Parameters act as placeholders, whereas arguments
 * are passed into the function once it is invoked. Output refers to the return statement of a function. Remember that
 * a function can only have one return statement. Any code written after a return statement will be ignored. 
 * Have a look the basic function below, which takes a single input and outputs its data type as a return statement. */
 
 function printType (param1) { //input goes where param1 is
     let type = typeof param1 //code will check the data type of the input
     return type //this return statement is the function's output
 } 
 
// 5. functions and parent scope
/* Functions have access to any variable written in the global scope or its parent scope. This means that a funciton nested
 * within another function has access to variables written in its parent scope. The inverse is not true, however. The parent
 * function does not have access to variables written inside of the child function. Have a look at the following example*/

 function nestedFunction (param1) { //parent function declared in global scope
    let var1 = 25 // var declared with function scope. Child function can access it
    function num() { //child function nested in local scope
        let var2 = 25 //variable declared in child function. Parent function cannot access it
        return var1 += var2 //return statement of child function
    }
    return param1 += var1 //return statement of parent function
 } 
 
// 6. Closures
/* Closures refer to the concept that nested functions have access to the variables contained within their
 * parent function. Closures themselves are all of the variables that a nested function has access to, both
 * within its own code block, as well as its parent's code block. */
 
  function nestedFunction (param1) { 
    let var1 = 25 //part of the closure (child function can access it)
    function num() { //child function
        let var2 = 25 //part of the closure (contained within child function)
        return var1 += var2 
    }
    return param1 += var1 
 } 
 