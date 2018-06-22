'use strict';

/*
 *
 * TASK 1
 *
 * Напишите функцию которая будет вызываться трижды и складывать
 * все передаваемые ей числа
 *
 * */

function add(x) {
  return function (y) {
    return function (z) {
      return x + y + z;
    };
  };
}

// console.log(add(1)(2)(3)); // 6
// console.log(add(10)(5)(15)); // 30

/*
 *
 * TASK 2
 *
 * Напишите функцию которая возвращает объект и одно из свойств объекта
 * это функция
 * После каждого нового вызова метода объекта(функции объекта) в консоле должно отображаться
 * число на 1 больше чем предыдущее
 * ---------------------------------------
 * так же у объекта должен быть метод обнуления счетчика
 * Узнать счетчик напрямую в объекте, нельзя
 *
 * */

function patternModule() {
  const obj = {};
  let counter = 0;

  function add() {
    return ++counter;
  }

  function resetCounter() {
    counter = 0;
  }

  obj.add = add;
  obj.resetCounter = resetCounter;
  return obj;
}

// patternModule

let test = patternModule(); // 0
test.add(); //1
test.add(); //2
test.add(); //3

/*
 * TASK 1
 *
 * Напишите функцию которая принимает 4 аргумента:
 *
 * -  Объект
 * -  Имя свойства с которым связывается метод
 * -  Сколько раз можно вызвать метод *
 * -  Объявление привязываемого метода ( функция )
 *
 *  При вызове метода отобразите сумму передаваемых
 *  параметров.

 *  Когда заканчивается счетчик, отображается ошибка
 *
 * */

let jun = {};

function methodCounter(obj, name, num, fn) {
  /*
  * мне нужно добавить метод объекту
  * в зависимости от того чему равняет сейчас счетчик
  * или вызвать функцию(аргумент 4)
  * или отправить сообщение об ошибке
  *
  * */
  let counter = num;
  obj[name] = function (...args) {
    if (counter === 0) {
      return 'ERROR ! add more methods';
    }
    counter--;

    console.log('у вас осталось попыток: ', counter);
    return fn(args);
  };
}

methodCounter(jun, 'logger', 2, function (args) {
  return args.reduce(function (previousElem, elem) {
    return previousElem + elem;
  }, 0);
});

methodCounter(jun, 'qwerty', 2, function (a, b, c, d) {
  return a + b + c + d;
});

jun.logger(1, 2, 3, 4); // 2, 10
jun.logger(5, 5, 5, 5); // 1, 20
jun.logger(5, 5); // ERROR ! add more methods

jun.addCounter(10, 'qwerty');
// @SUPER,

/*
 * Добавьте функции methodCounter, возможность увеличивать счетчик
 * на заданное число
 *
 * */
