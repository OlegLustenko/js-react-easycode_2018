const add = (a, b) => {
  console.log(a + b);
};

// add(100, 200);
//
// setTimeout(() => {
//   add(10, 20);
// }, 0);
//
// setTimeout(() => {
//   add(10, 20);
// }, 10);
//
// setTimeout(() => {
//   add(10, 20);
// }, 1000);
//
// setTimeout(() => {
//   add(1000, 2000);
// }, 1000);
//
// add(1, 2);

///
console.log('HELLO'); // 1

setTimeout(() => {
  console.log('hello world @@@@@'); // 4
}, 500);

console.time('ss');
for (let i = 0; i < 1000000000; i++) {
  if (i === 1000000000 - 1) {
    console.log('end of loop'); // 2
  }
}

setTimeout(() => {
  console.log('hello world with zeros'); // 7
}, 0);

console.timeEnd('ss');

console.log('qweertyu'); // 3
