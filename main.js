// An Http Server is responsible for managing Http requests coming in from a browser
// Import http object
const http = require("node:http");

// Creating a server instance using createServer function
const server = http.createServer(
  // Callback Arrow function (similar to anonymous functions)
  (req, res) => {
    // define Http headers (meta data)
    res.writeHead(200, { "Content-Type": "text/plain" });
    // sending the response object back to browser
    res.end("Hello World!");
  }
);

// starts a simple http server locally on port 3000
server.listen(3000, "127.0.0.1", () => {
  console.log("Listening on 127.0.0.1:3000");
});

// run with `node main.js`
