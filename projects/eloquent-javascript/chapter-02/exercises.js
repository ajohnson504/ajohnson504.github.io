
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
var board = '';
//creating a for loop to add the spaces and strings to variable 'chessboard'
for (let i = 0; i < param; i++) {
  for (var j = 0; j < param; j++) {//nested for loop
    if ((i+j) % 2 == 0) {//conditiona statement,
      board += ' ';
    } else {
      board += '#';
    }
  }
  board +='\n';
}

console.log(board);

  
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
