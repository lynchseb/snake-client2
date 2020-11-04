const { moveUp, moveLeft, moveDown, moveRight, messageOne, messageTwo} = require('./constants');
let connection;
/**
 * Setup User Interface 
 * Specifically, so that we can handle user input via stdin
 */

const handleUserInput = (data) => {
  if (data === '\u0003') {
    console.log('See you later!');
    process.exit()
    }
  if (data === 'w'){
    connection.write(moveUp)
  }  

  if (data === 'a'){
    connection.write(moveLeft)
  }
  if (data === 's'){
    connection.write(moveDown)
  }
  if (data === 'd') {
    connection.write(moveRight)
  }
  
}

const setupInput = function(conn) {
  connection = conn
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding('utf8');
  stdin.resume();
  stdin.on('data', handleUserInput)
  return stdin;
}

module.exports = { setupInput }