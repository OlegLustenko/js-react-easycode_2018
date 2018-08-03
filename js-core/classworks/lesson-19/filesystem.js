const fs = require('fs');

// fs.readdir('./', (err, data) => {
//   console.log(data);
//
//   console.log('--------');
//   const src = fs.readdirSync('./src');
//
//   console.log(src);
// });


console.log(fs.readFileSync('./index.html').toString());