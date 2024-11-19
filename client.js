// The line `const net = require("net");` imports the 'net' module in Node.js.
const net = require('net');

// establishes a connectiono with the game server
const connect = function () {
  const conn = net.createConnection({
    host: 'localhost',
    port: 50541,
  });

  // This method interprets incoming data as text in UTF-8 encoding
  conn.setEncoding('utf8');

  // This code runs when the connection is successful and prints a message
  conn.on('connect', () => {
    console.log('Successfully conneceted to game server!')
    conn.write('Name: DRO'); // Send the player's name to the server
  });

  // This code listens for incoming data from the server.
  conn.on('data', (data) => {
  console.log(data);
});

return conn;
};

module.exports = connect; 