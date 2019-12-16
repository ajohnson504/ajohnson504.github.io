/*
 *
 * OPERATORS:
 *
 * Operators allow developers to assign and compare value types. Without them,
 * we would have no way of telling the computer where to store our values. Similarly, operators
 * are crucial to using conditional statements, which allows us to control the flow of our code.
 */
 
 var x = 5; //using the equals operator (=) to assign a value to x
 
 // 1. Assignment operators //
 
 /* An assignment operator takes two operands, and assigns the value of the right operand to the
  * left operand. Assignment operators are always used when initializing a variable. They even allow 
  * us to reassign variables at any time. 
  *
  * The assignment operators include a number of arithmetic operators (mathematical assignment 
  * shortcuts) that allow developers to quickly make a mathematical equation and reassign the 
  * result to a variable.
  */
  
 // equals operator (=) // 
 /* The equals operator (=) makes the two operands equal to one another. For logical purposes,
  * the value on the right is assigned to the value on the left. Remember that the interpreter reads
  * code from left to right, so the variable on the left must be declared before it can be given a 
  * value. 
  */
  var x = 5; // after declaring the variable x and invoking '=', x now equals 5
  
 // 2. Arithmetic operators //
  
 /* The artithmetic operators are a form of assignment operators in the sense that they allow us to assign
  * or reassign a value to a variable. Their name stems from the fact they they integrate the basic arithmetic
  * types of addition, subtraction, multiplication, and division while assigning a value to a variable. 
  */
  y += x; //addition assignment operator
  y -= x; //subtraction assignment operator
  y *= x; //multiplication assignment operator
  y /= x; //division assignment operator
   
 // addition assignment operator //
 /* The addition assignment operator (+=) adds two values and reassigns the sum to the left operand.
  * If you were to write x = x + y, you could instead shorten the same math problem to x += y. If we 
  * were to write the problem out in English, x += y is almost like saying, "x is added to y and now equal 
  * to that number."
  */
  var y = 5; // assigning the number 5 to variable y
  y += x; //using the addition assignment operator to add the two, and reassign the sum to y
  console.log(y); //expected output => 10 because the new value of y is y + x
  
 // subtraction assignment operator // 
 /* The subtraction assignment operator (-=) subtracts two numbers and reassigns the difference to the left
  * operand. If you need x = x - y, you could use this operator to simply write x -= y.
  */
  y = 10; x = 10; //y and x both equal 10, respectively
  y -= x; //using the subtraction assignment operator to subtract x from y, and reassigning the value to y
  console.log(y); //expected output => 0 because the new value of y is y - x
   
 // division and multiplication assignment operators //
 /* The above logic can be applied to division problems (/=) and multiplication problems (*=). Much
  * like the addition and subtraction assignment operators, the division and multiplication operators 
  * take the two values, multiply or divide them, and reassign the result to the left operand. 
  */
  y = 10; x = 5; //assigning 10 to y and 5 to x
  y *= x; //y now equals 50, because the two were multiplied and the value was reassigned to y
  y /= x; //y equals 10 again, because the two were divided and the value was reassigned to y
 
 // 3. Comparison operators //
 
 /* Comparison operators allow us to compare two values. Because the result of a comparison is always a
  * Boolean value (true or false), comparison operators allow us to set limits within conditional statements 
  * in order to control the flow of our program. 
  */
  
 // equals operator (==) //
 /* The equals (or loosely equals) operator compares to see if two values are loosely equal to one another. 
  * This applies to a string and a number that contain the same number. Although they are different data types,
  * the JavaScript interpreter still shows them as being "loosely" equal to one another. 
  */
  y = '5';//y is a string value of 5
  x = 5; //x is a numerical value of 5
  y == x; // the two are loosely equal because they're two different data types with the same number
  
  // strictly equals operator (===) //
  /* The strictly equals operator checks to see if a value is strictly equal to another value. This 
   * includes the data type as well as the value. A data type that does not strictly equal another returns
   * a value of false. 
   */
  y = 5;
  x = '5';
  y === x; //returns the value of false, because x and y are two different data types (not strictly equal)
  
  // not equal (!=) //
  // This operator returns true if the two values are unequal, or false if they are loosely equal
  y = 5;
  x = '5';
  y != x; //returns false, because the two values are loosely equal
  
  // strictly not equal (!==) //
  // This operator returns true if the values are strictly not equal, or false if they are strictly equal
  y = 5;
  x = '5';
  y !== x; //returns true, because the two values are a different data type, therefore they are strictly unequal
  
  // greater than and less than // 
  // There are four types of operators in this category 
  y > x; //greater than
  y >= x; //greater than or equal to
  y < x; //less than
  y <= x; //less than or equal to 
  /* These operators compare two values and determine true or false if one value is greater than, less than, greater
   * than or equal to, or less than or equal to the other value */
   
   var x = 12; 
   var y = 5;
   x < y; //returns false
   x > y //returns true
   x <= y; //returns false
   x >= y //returns true
 
 // 4. Logical operators //
 /* Logical operators allow us to take in data and compare them, resulting to a true or false statement.
  * The Logical AND (&&) operator places two values on either side of the ampersands, and returns true only
  * if both values result to true. */
  var x = 12;
  var y = 5; 
  (y < x && y > x) //results to false because only one of the two comparisons is true
  
 /* The logical OR (||) operator takes two values and results to true if one or the other statements is true. If
  * both values result to false, then the entire statement is false. */
  var x = 12;
  var y = 5;
  (y < x || y > x) //result is true, because one of the two comparisons is true
 
  /* The logical NOT (!) operator takes a value and returns the opposite Boolean statement. Remember that because
  * any variable that contains data results to true, that means using the logical NOT operator would return a 
  * Boolean value of false. */
  
  var x = !'cat'; //results to false because the string would normally retains a true Boolean value
  
 // 5. Unary operators  //
 /* So far we have looked at operators that compare two different operands in some way. Unary operators are
  * unique in the sense that they require only one operand. The operators in this category are as follows:
  * The typeOf is one such operator, which takes on operand and returns its data type as a string value. 
  */
  var myArr = [1,2,3];
  console.log(typeof myArr); //prints 'array' to the console, showing the data type of myArr
  
 // 6. Ternary operator (a ? b : c)
 /* The ternary operator (or conditional operator) is the only operator that takes three operands. Just like
  * its name suggests, this operator takes a condition, and if it is true, assigns the value to either one of
  * two results. The syntax is as follows: condition ? value1 : value2; */
  
  var temperature = (weather > 79) ? 'hot' : 'warm'; /* If weather is greater than the number 79, then temperature
                                                      * takes a value of hot. Otherwise, it takes a value of warm 
                                                      */