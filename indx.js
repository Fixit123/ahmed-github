
//console.log("Hello, Node.js!");

/*const http = require('http');

const server = http.createServer((req, res) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    res.end('Hello, World!\n');
});

server.listen(3000, () => {
    console.log('Server running at http://localhost:3000/');
}); */

    //new task for requesthandler

const http = require('http');
const handleRequest = require('./requestHandler');

const server = http.createServer(handleRequest);

server.listen(3000, () => {
    console.log('Server running at http://localhost:3000/');
});

