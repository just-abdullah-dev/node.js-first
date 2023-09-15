/*
const a = {
    sum: (a, b) => {
        return a + b;
    },
    avg: (a, b) => {
        return (a + b) / 2;
    },
    percent: (a, b) => {
        return (a / b) * 100;
    }
}

module.exports = a;

const fs = require('fs');

// fs.readFileSync('./intro.txt', 'utf-8', (err, data) => {
//     err ?
//         console.log(err) :
//         console.log(data)
// })

// console.log(fs.readFileSync('./intro.txt', 'utf-8'));

fs.writeFile(
    'profession.txt',
    'MERN Full Stack Web Developer, Entrepreneur',
    (err) => {
        if (err) {
            throw err;
        } else {
            console.log('File has been created succesfully.');
        }
    }
)

console.log('I am firstly printed.');
console.log('I am firstly printed');
*/
// const path = require('path')
/*--------------------------------------------------------------------*/

const http = require('http');

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

