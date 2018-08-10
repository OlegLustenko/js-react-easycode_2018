const http = require('http');
const fs = require('fs');

http
  .createServer((req, res) => {
    const {url} = req;
    if (url === '/') {
      fs.createReadStream('./router.html').pipe(res);
      return;
    }
    fs.createReadStream('./router.js').pipe(res);
  })
  .listen(3000, () => {
    console.log('server running on localhost:%s', 3000);
  });
