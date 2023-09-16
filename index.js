const http = require('http');
require('dotenv').config();

const port = process.env.PORT || 3000; // Default to port 3000 if PORT is not set

const server = http.createServer((req, res) => {
    if (req.url === '/' || req.url === '/home') {
        res.setHeader('Content-Type', 'text/html');
        res.end('<h1><b>HOME PAGE</b></h1>');
    } else if (req.url === '/services') {
        res.setHeader('Content-Type', 'text/html');
        res.end('<h1><b>SERVICES PAGE</b></h1>');
    } else if (req.url === '/about') {
        res.setHeader('Content-Type', 'text/html');
        res.end('<h1><b>ABOUT PAGE</b></h1>');
    } else {
        res.statusCode = 404;
        res.setHeader('Content-Type', 'text/html');
        res.end('<h1><b>404 Error Page NOT Found</b></h1>');
    }
});

server.listen(port, () => {
    console.log('Everything is okay. Server is live.');
});

