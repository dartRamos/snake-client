// The line `const net = require("net");` imports the 'net' module in Node.js.
const net = require('net');

// establishes a connectiono with the game server
const connect = function () {
  const conn = net.createConnection({
    host: '172.22.37.191',
    port: 50541,
  })

  // This method interprets incoming data as text in UTF-8 encoding
  conn.setEncoding('utf8')

  conn.on('connect', () => {
    console.log('New user connected!');
  });

  conn.on('data', (data) => {
    console.log(data);
  });

  return conn;
};



console.log('Connecting ...');
connect(); // Calls the connect function to initiate the connection.