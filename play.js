// Importing conenct function from client
const { connect } = require('./client');
const { setupInput } = require('./input')

console.log('Connecting ...');
const conn = connect(); // Calls the connect function to initiate the connection.
// Pass the connection object to setupInput
setupInput(conn); // Now setupInput can use the connection