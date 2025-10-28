// An Http Server is responsible for managing Http requests coming in from a browser
// Import http object
const http = require("node:http");

// Creating a server instance using createServer function
const server = http.createServer(
  // Callback Arrow function (similar to anonymous functions)
  (req, res) => {
    // define Http headers (meta data)
    res.writeHead(200, { "Content-Type": "text/html" });
    // check for url
    if (req.url === "/") {
      res.end("<h1>Home Page</h1><p>Welcome to our website!</p>");
    } else if (req.url === "/about") {
      res.end("<h1>About Us</h1><p>This site was built with Node.js</p>");
    } else if (req.url === "/contact") {
      res.end("<h1>Contact Us</h1><p>Email: info@site.com</p>");
    } else {
      // sending the response object back to browser
      res.end("<h1>Page Not Found</h1>");
    }
  }
);

// starts a simple http server locally on port 3000
server.listen(3000, "127.0.0.1", () => {
  console.log("Listening on 127.0.0.1:3000");
});

// run with `node main.js`
