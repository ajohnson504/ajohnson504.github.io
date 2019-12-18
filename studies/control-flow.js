/* 
 *
 * CONTROL FLOW:
 *
 * When writing code, we have what is known as conditional statements to allow us to control the flow
 * of our program. Conditional statements get their name from the fact that they take a specified 
 * condition, and check whether or not it is true or false. If the statement is true, the statement
 * in the code block is executed.*/
 
 // 1. If //
 // If statements take a condition. If the condition is true, then the code in the block is executed
 
 if (Boolean(244) === true) { //condition to be checked is whether or not 244 returns 'true'
  console.log('value is true'); //if 244 does return true, the if statement will print 'value is true'
 }//expected output: 'value is true', because anything containing data results to true
 
 // 2. Else-if //
 /* Else-if statements continue with the logic of if-statements. They allow us to offer a second condition
  * to check for in case the first condition resulted to false. */
  
   if (Boolean(244) === false) { // first condition to be checked
    console.log('value is false'); //first block of code to be executed if condition is true
 } else if (Boolean(244) === true) { //second condtion
    console.log('value is true')//second block of code to be executed if condition is true
 } //expected output is 'value is true'
  
 // 3. Else //
 /* Continuing with the else-if logic, we have the option of creating a default statement that 
  * executes if no condition returns true. Since else statements don't check for a condition, they 
  * do not require parentheses. They only take the code-block that is to be executed. */
 
   if (Boolean(244) === false) { // first condition to be checked
    console.log('value is false'); //first block of code to be executed if condition is true
 } else if (Boolean(244) === true) { //second condtion
    console.log('value is true')//second block of code to be executed if condition is true
 } else {'value error'}
 /* The result is 'value is true.' In this example, the else statement will never execute because the
  * second condition was true. */

 // 4. Switch // 
 /* A switch statement offers the same functionality as an if-elseif-else statement. The difference
  * is that it offers cleaner looking code that is easier to read, especially when checking for many 
  * conditions. The other major difference is that switch statements allow you to offer multiple 
  * conditions that will execute the same result.
  */


   // Here's a switch statement example:
   
   switch ('metal bands') {
    case 'jazz bands':
     console.log('you love jazz')
     break;
     
    case 'soul':
     console.log('you love soul music')
    break;
    
    case 'metal bands':
    case 'punk bands': //checking for two conditions in one case block
     console.log('you love heavy music') //this is the expected result
    break;
    
    default:
     console.log('you like all music')
     break;
   }