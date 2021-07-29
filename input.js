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
      console.log("Move: up");
      setTimeout(() => {
        connection.write("Move: up");
      }, 50);
      break;
    case "a":
      console.log("Move: left");
      setTimeout(() => {
        connection.write("Move: left");
      }, 50);
      break;
    case "s":
      console.log("Move: down");
      setTimeout(() => {
        connection.write("Move: down");
      }, 50);
      break;
    case "d":
      console.log("Move: right");
      setTimeout(() => {
        connection.write("Move: right");
      }, 50);
      break;
  }
};
module.exports = { setupInput };
