let query = selector => document.querySelector(selector);

const block1 = query('.block1');
const block2 = query('.block2');
const block3 = query('.block3');

// block1.addEventListener('click', function (event) {
//   console.log('BLOCK 1');
// });
//
// block2.addEventListener('click', function (event) {
//   console.log('BLOCK 2');
// });

/*
* После нажатия 3 раза на Block 3 - удалите событие привязанное
* к блоку 3
*
* */

let counter = 0;
const clickHandler = function (event) {
  counter++;
  if (counter > 3) {
    block3.removeEventListener('click', clickHandler, true);
  }
  console.log('BLOCK 3');
};

block3.addEventListener('click', clickHandler, true);

const googleLink = query('a');

googleLink.addEventListener('click', (event) => {
  event.preventDefault();
  window.location.href = '/qwe';
});

