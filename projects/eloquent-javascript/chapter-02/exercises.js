
////////////////////////////////////////////////////////////////////////////////
// triangles ///////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

function triangles(param) {
  //writing a for loop to iterate through numbers 1-7
  //the for loop will assign variable 'i' to '#'
  //stopping condition is the length of 'i' less than '8'
  //i adds a single '#' each time it is looped
  for (var i = '#'; i.length < param+1; i += '#') {
    console.log(i);
  }
}
////////////////////////////////////////////////////////////////////////////////
// fizzBuzz ////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

function fizzBuzz() {
  //creating a for loop that iterates through numbers 1-100
  for (let i = 1; i < 16; i ++) {
    //if 'i' is divisible by three and five, print 'FizzBuzz'
    if (i % 3 === 0 && i % 5 === 0) {
      console.log('fizzbuzz'); 
      //else if 'i' is divisible by three only, print 'Fizz'
    } else if (i % 3 === 0) {
      console.log('fizz'); 
      //else if 'i' is divisble by five only. print 'Buzz'
    } else if ( i % 5 === 0) {
      console.log('buzz');
    } else { console.log(i)}
  }
}

////////////////////////////////////////////////////////////////////////////////
// drawChessboard //////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

function drawChessboard(param) {
//this function will print a chessboard of 'spaces' and '#'
//the function parameter will specify the length of the board both horizontally and vertically
//creating an empty string to receive spaces and '#'
var chessboard = '';
//creating a for loop to add the spaces and strings to variable 'chessboard'
for (let i = 0; i < param-1; i++) {
    // Creating a conditional statement that is to skip the space where the index is divisble by
    // 2, and add a '#' where the index is an odd number. 
   if (i % 2 === 0) {
       chessboard += '';
   } else (chessboard += '#');
    // Nesting a for loop within the first for loop. The nested for loop will print a space
    // or a '#' for every first space that is printed horizontally.
   for (let j = 0; j < param-1; j++) {
    //creating a conditional statement in the nested loop to determine where the space goes vs. where the 
    // '#' goes. Spaces are placed at even-numbered indices, whereas '#' is placed at odd-
    // numbered indices. 
     if (j % 2 === 0) { 
      chessboard += ' '; 
     } else (chessboard += '#');
    }
    chessboard += '\n';
  }
  return chessboard; 

}

////////////////////////////////////////////////////////////////////////////////
// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

if ((typeof process !== 'undefined') &&
  (typeof process.versions.node !== 'undefined')) {
  module.exports = {
    triangles,
    fizzBuzz,
    drawChessboard,
  };
}
