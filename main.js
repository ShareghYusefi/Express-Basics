// What are modules in Node?
// Modules are like libraries in node. They are reusable blocks of code. There are built in modules provided by node and third party modules available on the web.

// Any file in a node is considered a module, giving us the ability to import and export code between files.

// An Http Server is responsible for managing Http requests coming in from a browser

// console.log(module);

// var, let, const are used to define variables of node modules.

// Import http object
const http = require("node:http");

// What are some built in modules in Node?
// 1. http: used to create a web server
// 2. fs: allow file manipulation on server (read, write, updating, and deleting files).
// 3. path: use to work with file paths.
const path = require("node:path");
var x = path.parse(__filename);
console.log(x);

// 4. OS: get information about the operating system
const os = require("node:os");
var type = os.type();
console.log(type);
var freeMemory = os.freemem();
console.log(freeMemory);

var menu = [
  { id: 1, name: "Turkish Coffee", price: 3 },
  { id: 2, name: "Americano", price: 4 },
  { id: 3, name: "Iced Latte", price: 5 },
];

// Creating a server instance using createServer function
const server = http.createServer(
  // Callback Arrow function (similar to anonymous functions)
  (req, res) => {
    // check for url
    if (req.url === "/api/menu") {
      // define Http headers (meta data)
      res.writeHead(200, { "Content-Type": "application/json" });
      res.end(JSON.stringify(menu));
    } else {
      res.writeHead(200, { "Content-Type": "text/plain" });
      // sending the response object back to browser
      res.end("Not Found");
    }
  }
);

// starts a simple http server locally on port 3000
server.listen(3000, "127.0.0.1", () => {
  console.log("Listening on 127.0.0.1:3000");
});

// run with `node main.js`
