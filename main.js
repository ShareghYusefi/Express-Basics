// What are modules in Node?
// Modules are like libraries in node. They are reusable blocks of code. There are built in modules provided by node and third party modules available on the web.

// What is express?
// Express is used to create a web server in node. Express works on a middleware concept(callback function).
const express = require("express");
const cors = require("cors");
const app = express();

// Allows Cross-Origin-Resource sharing
app.use(cors());

// A middleware is a function that has access to the request, response, and next function.
// You can think of it as a layer that sits between the request and response.
function customMiddleware(req, res, next) {
  console.log("Middleware function called!");
  // next function is called to move onto the next middleware function
  next();
}

// use the middlware function when a request comes in to the web server.
app.use(customMiddleware);
// parse JSON to Javascript Object for req.body
app.use(express.json());
// parse x-www-form-urlencoded to Javascript Object for req.body
app.use(express.urlencoded({ extended: true }));

// Any file in a node is considered a module, giving us the ability to import and export code between files.

// An Http Server is responsible for managing Http requests coming in from a browser

// console.log(module);

// import logger module
const loggerFunction = require("./logger");
// ./ : current directory
// ../ : parent directory
// / : root directory of filesystem

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

// Install external modules from NPM registry
// npm install <module_name> or npm i <module_name>
const osPaths = require("os-paths/cjs");
const home = osPaths.home();
const temp = osPaths.temp();
console.log(home);
console.log(temp);

// Creating a server instance using createServer function
// const server = http.createServer(
//   // Callback Arrow function (similar to anonymous functions)
//   (req, res) => {
//     // check for url
//     if (req.url === "/api/menu") {
//       loggerFunction("Request came in!");
//       // define Http headers (meta data)
//       res.writeHead(200, { "Content-Type": "application/json" });
//       res.end(JSON.stringify(menu));
//     } else {
//       res.writeHead(200, { "Content-Type": "text/plain" });
//       // sending the response object back to browser
//       res.end("Not Found");
//     }
//   }
// );

// events in node js
const EventEmitter = require("node:events");

const myEmitter = new EventEmitter();

myEmitter.on("fire", () => {
  console.log("An event occured!");
});

// emit 'fire' event
myEmitter.emit("fire");

// starts a simple http server locally on port 3000
// server.listen(3000, "127.0.0.1", () => {
//   console.log("Listening on 127.0.0.1:3000");
// });

// What is a Restful API?
// Restful stand for Representational State Transfer.
// API stands for Application Programming Interface.
// A way to design your URL's to interact with a server.

// API's use HTTP methods to interact with the server.
// GET - Get data
// POST - Send data
// PATCH - Update data
// PUT - Override data
// DELETE - Delete data

// Responses contain an HTTP Status Code
// These are codes used to represent the status of the response from the server.
// 200 - Success/Ok
// 201 - Created
// 404 - Not Found
// 400 - Bad Request
// 500 - Internal Server Error

// URL stands for Uniform Resource Locator.
// Resource is any type of data that we are storing on the server.

// Mock data in Memory (instead of a database)
var users = [
  { id: 1, username: "JohnDoe", email: "JohnDoe@gmail.com" },
  { id: 2, username: "JaneDoe", email: "JaneDoe@gmail.com" },
  { id: 3, username: "JamesDow", email: "JamesDoe@gmail.com" },
];

// localhost:3000/users
app.get("/users", (req, res) => {
  res.status(200).send(users);
});

// localhost:3000/users/1
app.get("/users/:id", (req, res) => {
  // We can grand id from the URL query parameters
  var id = parseInt(req.params.id); // convert string id to integer
  //   find the user with id, the result is going be a user object
  var user = users.find((u) => {
    return u.id === id;
  });

  // if user is undefined, we return 404
  if (!user) {
    res.status(404).send({
      message: "User not found.",
    });
  }

  res.status(200).send(user);
});

app.get("/", (req, res) => {
  loggerFunction("Request came in again!");
  res.end("<h1>Home Page</h1><p>Welcome to our website!</p>");
});

app.get("/about", (req, res) => {
  res.end("<h1>About Us</h1><p>This site was built with Node.js</p>");
});

app.get("/contact", (req, res) => {
  res.end("<h1>Contact Us</h1><p>Email: info@site.com</p>");
});

app.get("/api/menu", (req, res) => {
  res.json(menu);
});

app.post("/api/login", (req, res) => {
  const email = req.body.email;
  const password = req.body.password;
  console.log(email, password);

  res.json("You have logged in as " + email);
});

app.listen(3000, "127.0.0.1", () => {
  console.log("Listening on 127.0.0.1:3000");
});

// run with `node main.js`

// Semantic Versioning
// Major.Minor.Patch
// Caret(^): ^1.2.2 means install the latest version of 1.x.x
// Tilda(~): ~1.2.2 means install the latest version of 1.2.x

// How can we update our packages?
// npm outdated
// npm update
// npm install <package-name>@1.2.2
// npm install <package-name>@latest
