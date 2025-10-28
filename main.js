// An Http Server is responsible for managing Http requests coming in from a browser
// Import http object
const http = require("node:http");

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
