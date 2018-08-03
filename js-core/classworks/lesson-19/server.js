const http = require('http');
const fs = require('fs');
const util = require('util');

http
  .createServer((request, response) => {
    const index = fs.readFileSync('./index.html');

    console.log(request.url);

    if (!fs.statSync(`.${request.url}`).isDirectory()) {
      const file = fs.readFileSync(`.${request.url}`);
      response.end(file);
      return;
    }

    // if(request.url === '/src/main.js') {
    //   const mainjs = fs.readFileSync('./src/main.js');
    //
    //   response.end(mainjs)
    // }
    //
    // if(request.url === '/src/cat.jpg') {
    //   const mainjs = fs.readFileSync('./src/cat.jpg');
    //
    //   response.end(mainjs)
    // }


    response.end('NOT FOUND', 404);
  })
  .listen(3000, err => {
    console.log('server started http://localhost:3000');
  });
