// const person = require('./person')

// console.log(person.name)

// const person = require('./person')

// const person1 = new person('John Doe', '20') 
// console.log(person1.name)
// person1.greeting();


const http = require("http");
const path = require("path");
const fs = require("fs");

const server = http.createServer((req, res) => {
    // console.log(req.url);

    if (req.url === '/') {
        fs.readFile(
            path.join(__dirname, 'public', 'index.html'),
            (err, content) => {
                if (err) throw err;
                res.writeHead(200, { 'Content-Type': 'text/html' });
                res.end(content);
            }
        );
    }

    if (req.url === '/api/users') {
      const users = [
        { name: 'Bob Smith', age: 40 },
        { name: 'John Doe', age: 30 }
      ];
      res.writeHead(200, { 'Content-Type': 'application/json' });
      res.end(JSON.stringify(users));
    }



});

const PORT = process.env.PORT || 5000;

server.listen(PORT, () => console.log(`Server running on port ${PORT}`));