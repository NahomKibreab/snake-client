// Stores the active TCP connection object.
let connection;
const { Move_Up, Move_Right, Move_Left, Move_Down } = require("./constants");

const setupInput = function (conn) {
  connection = conn;

  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding("utf8");
  stdin.resume();

  stdin.on("data", handleUserInput);

  return stdin;
};

const handleUserInput = function (key) {
  switch (key) {
    case "\u0003":
      // \u0003 maps to ctrl+c input
      process.exit();
    case "w":
      setTimeout(() => {
        connection.write(Move_Up);
      }, 50);
      break;
    case "a":
      setTimeout(() => {
        connection.write(Move_Left);
      }, 50);
      break;
    case "s":
      setTimeout(() => {
        connection.write(Move_Down);
      }, 50);
      break;
    case "d":
      setTimeout(() => {
        connection.write(Move_Right);
      }, 50);
      break;
    case "x":
      setTimeout(() => {
        connection.write("Say: hi hi hi!");
      }, 50);
      break;
  }
};
module.exports = { setupInput };
