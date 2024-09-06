
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

/*const http = require('http');
const handleRequest = require('./requestHandler');

const server = http.createServer(handleRequest);

server.listen(3000, () => {
    console.log('Server running at http://localhost:3000/');
}); */


 // axios package


 /*const axios = require('axios');

axios.get('https://jsonplaceholder.typicode.com/posts')
    .then(response => {
        console.log(response.data);
    })
    .catch(error => {
        console.error('Error fetching data:', error);
    }); */


        //ASYNC/AWAIT

        /*const axios = require('axios');

async function fetchData() {
    try {
        const response = await axios.get('https://jsonplaceholder.typicode.com/posts');
        console.log(response.data);
    } catch (error) {
        console.error('Error fetching data:', error);
    }
}

fetchData();   */

    //EVENT EMITTER
    const http = require('http');
const EventEmitter = require('events');
const handleRequest = require('./requestHandler');

class MyEmitter extends EventEmitter {}
const myEmitter = new MyEmitter();

myEmitter.on('requestReceived', () => {
    console.log('Request received at server');
});

const server = http.createServer((req, res) => {
    myEmitter.emit('requestReceived');
    handleRequest(req, res);
});

server.listen(3000, () => {
    console.log('Server running at http://localhost:3000/');
});


