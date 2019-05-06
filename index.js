const http = require('http');

const requestCallback = (req, res) => res.end('Hello World');

const server = http.createServer(requestCallback);

server.listen(8080);
