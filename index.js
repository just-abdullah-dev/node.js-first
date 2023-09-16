const http = require('http');
require('dotenv').config();

const port = process.env.PORT || 3000; // Default to port 3000 if PORT is not set

const server = http.createServer((req, res) => {
    let str = "";
    if (req.url === '/' || req.url === '/home') {
        str = "HOME PAGE";
    } else if (req.url === '/services') {
        str = "SERVICES PAGE";
    } else if (req.url === '/about') {
        str = "ABOUT PAGE";
    } else {
        res.statusCode = 404;
        str = "404 Error Page NOT Found";
    }
    res.setHeader('Content-Type', 'text/html');
    res.end(`<h1>${str}</h1>`);
});

server.listen(port, () => {
    console.log('Everything is okay. Server is live.');
});
