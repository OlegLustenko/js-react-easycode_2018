'use strict';

/*
 *
 * (Первая)
 * Напишите 1 функцию и
 * запустите данную функцию через 3 секунды
 *
 *
 *
 *
 *
 *
 * (-> тут еще 2 функции)
 *
 * Напишите еще 2 функции и запустите сначала
 * последнюю потом пред-последнюю затем
 * первую функцию через таймеры
 *
 *
 *
 *
 *
 *
 *
 * Запустите таймер который будет каждые 3 секунды
 * выполнять первую функцию
 *
 *
 *
 *
 *
 *
 *
 *
 *
 * Очистите Таймер в консоле
 *
 *
 *
 *
 *
 *
 *
 *
 * Давайте счетчик + 1 в консоле каждую секунду
 *
 *
 *
 * */

const showName = () => {
  console.log('easycode #1');
};
const showName2 = () => {
  console.log('easycode #2');
};

const showName3 = () => {
  console.log('easycode #3');
};

setTimeout(showName, 3000);
setTimeout(showName2, 2000);
setTimeout(showName3, 1000);

var interval = setInterval(showName, 3000);

clearInterval(interval);

var counter = 0;

setInterval(() => {
  console.log(++counter);
}, 1000);

