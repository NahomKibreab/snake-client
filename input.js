// Stores the active TCP connection object.
let connection;

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
        connection.write("Move: up");
      }, 50);
      break;
    case "a":
      setTimeout(() => {
        connection.write("Move: left");
      }, 50);
      break;
    case "s":
      setTimeout(() => {
        connection.write("Move: down");
      }, 50);
      break;
    case "d":
      setTimeout(() => {
        connection.write("Move: right");
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
