const { connect } = require("./client");
const { setupInput } = require("./input");

console.log("Connecting ...");

// setup interface to handle user input from stdin

setupInput(connect());
