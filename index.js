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

const http = require('http')

const port = process.env.PORT;

const server = http.createServer((req,res)=>{
    if(req.url === '/' || req.url === '/home'){
        return res.end('<h1><b>HOME PAGE</b></h1>')
    }else if(req.url === '/services'){
        return res.end('<h1><b>SERVICES PAGE</b></h1>')
    }else if(req.url === '/about'){
        return res.end('<h1><b>ABOUT PAGE</b></h1>')
    }else{
        return res.end('<h1><b>404 Error Page NOT Found</b></h1>')
    }
})
server.listen(port,() => {
    console.log('Every thing is okay. Server is live.');
})
