const { connect } = require("./client");
const { setupInput } = require("./input");

console.log("Connecting ...");
connect();

// setup interface to handle user input from stdin

setupInput();
