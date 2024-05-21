// Create web server
// Create a new file named comments.js and add the following code to it:
// comments.js
// Load the http module
var http = require('http');
// Create a http server with a callback function to handle requests
http.createServer(function (req, res) {
    // Set the response HTTP header with HTTP status and Content type
    res.writeHead(200, {'Content-Type': 'text/plain'});
    // Send the response body "Hello World"
    res.end('Hello World\n');
}).listen(8080); // listen for any incoming requests on port 8080
console.log('Server running at http://