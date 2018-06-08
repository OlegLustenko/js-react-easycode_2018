// var add2 = console.log(sum(10, 20));
//
// /* Function expression - выражение */
// var add = function newNameAdd(a, b) {
//   return a + b;
// };
//
// /* Function declaration - выражение */
// function sum(a, b) {
//   return a + b;
// }
//
// /*
// * 1 - фазе иннициализация переменных и функций
// * 2 - запуск программы
// * */
//
// function plusOne(number) {
//   return number + numberOne;
// }
//
// // console.log(plusOne(100));
//
// // const numberOne = 1;
//
// const someUser = {
//   skill: {
//     programmingLanguages: 'JS',
//   },
// };
//
// const userName = someUser.name || 'defaultName';
// const userWithDeveloperSkills =
//   someUser.skill && someUser.skill.programmingLanguages;
// const sss = '1' && 1 && [] && someUser;
//
// console.log(someUser);
// console.log(userWithDeveloperSkills);
//
// /*
// * Напишите функцию которая будет принимать 1 аргумент
// *
// * Если это массив и первый элемент массива это число -> winner
// * Если это объект или строка отобразите объект или строку
// *
// * -> false
// * */
//
// /*
// * 1. создаю функцию в которую передаю 1 аргумент
// * 2. синтаксис для условия if (... ) {}
// * 3. (внутри if) Проверяю является ли переданный аргумент массивом ?
// *  Array.isArray([]) -> true
// *  Array.isArray({}) -> false
// * 4. Получаю первый элемент массива
// * 5. Проверяю какой тип у данного элемента
// * 6. Если тип данного элемента число
// * 7. Отображаю в консоле winner
// * ---
// * Если переданный аргумент это объект тогда показываю этот объект
// * Если переданный аргумент строка -> отображаю эту строку
// * ИЛИ
// *
// * Если переданный аргумент объект ИЛИ строка отображаю в консоле
// *
// *
// * */
//
// /*
// * Напишите функцию которая будет принимать 1 аргумент
// * Если это массив и первый элемент массива это число -> winner
// * Если это объект или строка отобразите объект или строку
// *
// * -> false
// * */
//
// function isObjectOrString(data) {
//   return typeof data === 'object' || typeof data === 'string';
// }
//
// function validatePassedArgument(someData) {
//   if (
//     Array.isArray(someData)
//     && typeof someData[0] === 'number') {
//     return 'winner';
//   }
//
//   if (isObjectOrString(someData)) {
//
//     return someData;
//   }
// }
//
// let number = 10;
//
// number = number + 1;
// number += 1;
//
// console.log(++number);
//
// function chetnoeChislo(number) {
//
//   // if (number % 2 === 0) {
//   //   return 'HELLO EASY CODE';
//   // }
//   // return 'ternary operator';
//
//   return number % 2 === 0 ? 'HELLO EASY CODE' : 'ternary operator';
//
// }
//
// console.log(chetnoeChislo(2));
// console.log(chetnoeChislo(3));
//
// console.log('ЦИКЛЫ: братсво начало');
// for (let num = 0; num < Infinity; num++) {
//   /* num == 0 */
//   /* num == 1*/
//   console.log(num);
//   /* END */
// }
// console.log('ЦИКЛЫ: Властелин циклов');

/*
* ОТОБРАЖАЛ НЕ-ЧЕТНЫЕ ЧИСЛА
* */

// let number = 0;
// while(number < 10) {
//   console.log(number);
//   number++
// }

const array = [
  'JavaScript Ninja',
  'Clean Code ch. 3',
  'Harry Potter',
  'JavaScript Good Parts',
  'Eloquent JavaScript !',
];

for (let i = 0; i < array.length; i++) {
  const elem = array[i];
  console.log(i + 1, 'название книги: ', elem);
  // 1
  // 2
  // 3
  // 4
  // 5
}

// while (false) {
//
// }

const webStore = {
  category: {
    noteBook: ['Asus', 'Lenovo', 'Dell', 'HP'],
    mobile: ['Nokia', 'Apple', 'Sony'],
  },
};
const category = webStore.category;
for (let key in category) {
  const someArray = category[key];
}
/*
* Напишите функцию которая принимает объект категорий
* Отобразите пожалуйста в консоле
* Название категории
*   а потом на новой строке что лежит внутри категории!
*   (если что-то там есть)
*  категория: noteBook
*    Содержимое категория: Asus
*    Содержимое категория: Lenovo
*    Содержимое категория: Dell
*    Содержимое категория: HP
*  категория: mobile
*    Содержимое категория: Nokia
*    Содержимое категория: Apple
*    Содержимое категория: Sony
* */



