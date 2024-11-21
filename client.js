// The line `const net = require("net");` imports the 'net' module in Node.js.
const net = require('net');

const { IP, PORT, DEFAULT_PLAYER_NAME } = require("./constants");

// establishes a connectiono with the game server
const connect = function () {
  const conn = net.createConnection({
    host: IP,
    port: PORT,
  });

  // This method interprets incoming data as text in UTF-8 encoding
  conn.setEncoding('utf8');

  // This code runs when the connection is successful and prints a message
  conn.on('connect', () => {
    console.log('Successfully conneceted to game server!')
    conn.write(`Name: ${DEFAULT_PLAYER_NAME}`); // Send the player's name to the server
  });


  // This code listens for incoming data from the server.
  conn.on('data', (data) => {
  console.log(data);
});

return conn;
};

module.exports = { connect }; 