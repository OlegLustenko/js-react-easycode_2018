/* Created by dev on 26.11.16. */
'use strict';
if ('1' == 1) {
  console.log('hello!');
} else {
  console.log('what?');
}

if ('123' != 1 + '23') {
  console.log('Какое число получилось ?');
} else {
  console.log('Или это число ?');
}

if (null == undefined) {
  console.log('В чем правда брат ?');
} else if (null === undefined) {
  console.log('Или это число ?');
} else {
  console.log('где я ?');
}

if (!0 == true) {
  console.log('dada privet!');
}

let theMan = 'qwerty';
if (typeof theMan == 'string') {
  console.log('Hi');
}
