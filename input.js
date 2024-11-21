let connection;

const setupInput =  (conn) => {
  connection = conn;
  const stdin = process.stdin;  // create variable to hold the stdin object so we don't have to type process.stdin multiple times
  stdin.setRawMode(true); // Raw Mode allows us to listen for individual keypresses instead of waiting for the user to press enter
  stdin.setEncoding("utf8"); // utf8 encoding is set so that we can read the text data that is input
  stdin.resume(); // resume stdin so the program can listen for input
  stdin.on('data', handleUserInput); // Listens for user input from the terminal and calls the handleUserInput function whenever data is received.
  return stdin;   // return the stdin object so we can use it elsewhere in the program`
};

const handleUserInput = function (key) {
  if (key === 'w') {
    connection.write('Move: up');
  } else if (key === 'a') {
    connection.write('Move: left');
  } else if (key === 's') {
    connection.write('Move: down');
  } else if (key === 'd') {
    connection.write('Move: right')
  } else if (key === '1') {
    connection.write("Say: Is that all you got?!");
  } else if (key === '2') {
    connection.write('Say: You can move better!');
  } else if (key === '3') {
    connection.write("Say: Wow you're good!");
  }

  if (key === "\u0003") { // u0003 refers to ctrl + c
    process.exit();
  }
};


module.exports = { setupInput }; 