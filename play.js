const { connect } = require('./client')

/**
 * Setup User Interface 
 * Specifically, so that we can handle user input via stdin
 */

const handleUserInput = (data) => {
  if (data === '\u0003') {
    console.log('See you later!');
    process.exit()
    }
}

const setupInput = function() {
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding('utf8');
  stdin.resume();
  stdin.on('data', handleUserInput)
  return stdin;
}


console.log('Connecting ...');
connect();
setupInput();

// const handleUserInput = (data) => {
//   if (data === '\u0003') {
//     console.log('See you later!');
//     process.exit()
//     }
//     if (data === 'w') {
//     connection.write(moveUp)
//     }
//     if (data === 'a') {
//     connection.write(moveLeft)
//     }
//     if (data === 's') {
//     connection.write(moveDown)
//     }
//     if (data === 'd') {
//     connection.write(moveRight)
//     }
//     if (data === 'q') {
//     connection.write(messageOne)  
//     }
//     if (data === 'e') {
//     connection.write(messageTwo)  
//     }
// }