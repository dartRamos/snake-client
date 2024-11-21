// Importing conenct function from client
const { connect } = require('./client');
const { setupInput } = require('./input')

console.log('Connecting ...');
connect(); // Calls the connect function to initiate the connection.
setupInput();