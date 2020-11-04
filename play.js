const { connect } = require('./client')
const { setupInput } = require('./input')


console.log('Connecting ...');

setupInput(connect());

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