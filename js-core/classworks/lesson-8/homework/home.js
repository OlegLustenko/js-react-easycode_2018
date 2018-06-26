'use strict';

/*
 *
 * TASK 1
 *
 * Создайте функцию которая будет запоминать переданные
 * ей аргументы, и прибавлять их в строку
 * и отображать в консоле всю строку
 *
 * */

function solution1(someString) {
  /* ВАШ КОД */
}

let stringBuffer = solution1();

stringBuffer('Замыкания'); // Замыкания
stringBuffer('Использовать нужно'); // Замыкания Использовать нужно
stringBuffer('Привет'); // Замыкания Использовать нужно Привет вызываем много раз

/*
 *
 * TASK 2
 * Напишите функцию которая принимает в качестве аргумента строку
 * из скобочек и посчитайте, * что все скобочки закрываются корректно
 *
 * */

function validBraces(str) {
  while (
    str.indexOf('()') !== -1 ||
    str.indexOf('{}') !== -1 ||
    str.indexOf('[]') !== -1
  ) {
    str = str.replace('()', '');
    str = str.replace('[]', '');
    str = str.replace('{}', '');
  }
  return str.length === 0;
}

validBraces('(){}[]'); // => returns true
validBraces('(}'); // => returns false
validBraces('[(])'); // => returns false
validBraces('([{}])'); // => returns true
validBraces('({[]})'); // => returns true

// @SUPER

/*
 *
 * Напишите функцию которая будет принимать одно число и выводить сумму
 * всех натуральных чисел
 * sum(5) // 5+4+3+2+1
 *
 * Вычисления должны кешироваться, если в функцию попадает закешированное
 * значение, в консоле должно отобразиться
 * Значение взято из кэша
 *
 * Нельзя использовать внешние значения/переменные/функции
 *
 * */

function sum(initialNumber) {
  if (sum.cachedNumber && sum.cachedNumber[initialNumber]) {
    return `значение взятo из кеша ${sum.cachedNumber[initialNumber]}`;
  }
  let newNumber = initialNumber;
  sum.cachedNumber = {
    [initialNumber]: 0
  };

  while (newNumber > 0) {
    sum.cachedNumber[initialNumber] = sum.cachedNumber[initialNumber] + newNumber;
    newNumber--;
  }

  return sum.cachedNumber[initialNumber] + ' Значение кешировано';
}

sum(5); // 15 Значение кешировано
sum(5); // 15 Значение взято из кэш

sum(6); // 21 Кешировано
sum(6); // 21 Значение взято из кэша
