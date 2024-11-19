// The line `const net = require("net");` imports the 'net' module in Node.js.
const net = require('net');

// establishes a connectiono with the game server
const connect = function () {
  const conn = net.createConnection({
    host: 'localhost',
    port: 50541,
  })

  // This method interprets incoming data as text in UTF-8 encoding
  conn.setEncoding('utf8');

  // This code listens for incoming data from the server.
  conn.on('data', (data) => {
    console.log(data);
  });

  return conn;
};



console.log('Connecting ...');
connect(); // Calls the connect function to initiate the connection.