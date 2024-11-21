let connection;

const { 
  MOVE_UP_KEY, 
  MOVE_LEFT_KEY, 
  MOVE_DOWN_KEY, 
  MOVE_RIGHT_KEY, 
  KEY_MAPPINGS
} = require("./constants"); 



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
  if (key === MOVE_UP_KEY) {
    connection.write('Move: up');
  } else if (key === MOVE_LEFT_KEY) {
    connection.write('Move: left');
  } else if (key === MOVE_DOWN_KEY) {
    connection.write('Move: down');
  } else if (key === MOVE_RIGHT_KEY) {
    connection.write('Move: right');
  } else if (key in KEY_MAPPINGS) {
    connection.write(KEY_MAPPINGS[key]);
  }

  if (key === "\u0003") {
    process.exit();
  }
};



module.exports = { setupInput }; 