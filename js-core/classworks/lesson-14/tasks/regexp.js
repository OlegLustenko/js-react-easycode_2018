var str1 = 'JavaScript is rule';
var str2 = 'PHP is cool';

/abc/.test('abc');




















// JavaScript

const checkStr = str => /JavaScript/.test(str);

var str3 = 'JavaScript is is is is is is rule';

let replaceIS = str => {
  let re = new RegExp('is ', 'g');
  // new RegExp - используется когда нужно вычислить первый параметр
  return str
    .replace(/is/, '%%%') // добавляем якорь известный нам
    .replace(re, '')
    .replace(/%%%/, 'is'); // превращаем в то, что нужно
};

console.log(replaceIS(str3));

var files = ['main.js', 'app.js', 'home.js', 'index.html'];



/*
  Напишите функцию, которая в str3, сделать чтобы is остался 1
  Вам нужно использовать РЕГУЛЯРНЫЕ ВЫРАЖЕНИЯ!
  */

// ^
// & (and)
// $
// \
// /
// *

// checkIfRule(str1) // cool!;
// checkIfRule(str2) // PHP;  хардкод

var str = 'На дворе трава На дворе трава, на траве дрова';
