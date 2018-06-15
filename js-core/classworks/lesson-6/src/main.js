// // const arr = [10, 20, 30];
//
// const arrayLogs = function (value, index, arr) {
//   console.log('value: ', value);
//   console.log('index: ', index);
//   console.log('arr: ', arr);
// };
//
// arr.forEach(function (value, index, arr) {
//   console.log('value: ', value);
//   console.log('index: ', index);
//   console.log('arr: ', arr);
// });
// // goo.gl / 5;
// // JkKXZ;
//
// /*
// *
// * функция принимает массив listOfCompany
// * и возвращает новый массив внутри которого лежит только название компании
// *
// * */
//
// function getCompaniesNames(companyArr) {
//   return companyArr.map(function (value) {
//     return value.company;
//   });
// }
//
// let listOfCompany = [
//   {
//     company: 'ASIMILINE',
//     name: {
//       last: 'Watkins',
//       first: 'Lindsay',
//     },
//     eyeColor: 'brown',
//     age: 20,
//     picture: 'http://placehold.it/32x32',
//     balance: '$1,091.09',
//     isActive: true,
//     guid: '294814e3-4c89-428f-b0c9-da5c4c37ea5e',
//     index: 0,
//     _id: '584babb6eeb4137cf14c37a3',
//   },
//   {
//     company: 'ENJOLA',
//     name: {
//       last: 'Price',
//       first: 'Greene',
//     },
//     eyeColor: 'brown',
//     age: 39,
//     picture: 'http://placehold.it/32x32',
//     balance: '$3,533.55',
//     isActive: true,
//     guid: 'e7b0824f-d6d1-4a82-b2c5-cd7a1ec8310c',
//     index: 1,
//     _id: '584babb6c7be9c2398ed263f',
//   },
//   {
//     company: 'ZINCA',
//     name: {
//       last: 'Robertson',
//       first: 'Barbara',
//     },
//     eyeColor: 'brown',
//     age: 22,
//     picture: 'http://placehold.it/32x32',
//     balance: '$1,395.22',
//     isActive: false,
//     guid: '0735d8d9-a165-4ad1-893f-e821da37bf63',
//     index: 2,
//     _id: '584babb6cca4dbefa6001820',
//   },
//   {
//     company: 'TALKOLA',
//     name: {
//       last: 'Cooke',
//       first: 'Lea',
//     },
//     eyeColor: 'blue',
//     age: 31,
//     picture: 'http://placehold.it/32x32',
//     balance: '$3,074.16',
//     isActive: false,
//     guid: '7d13cbc4-6b4d-4954-b3d3-df3cfe5f2373',
//     index: 3,
//     _id: '584babb6391a2b568f1e9416',
//   },
//   {
//     company: 'GEEKKO',
//     name: {
//       last: 'Webb',
//       first: 'Kline',
//     },
//     eyeColor: 'blue',
//     age: 34,
//     picture: 'http://placehold.it/32x32',
//     balance: '$1,520.21',
//     isActive: false,
//     guid: '2b179de0-a659-4423-b3c4-11c6490e5c74',
//     index: 4,
//     _id: '584babb66d6ea73e8ed51208',
//   },
// ];
//
// console.log(getCompaniesNames(listOfCompany));
//
// // const arr = [1, 2, 3, 4]; // -> 2, 4, 6, 8
// const newArr = [];
// for (let i = 0; i < arr.length; i++) {
//   const elem = arr[i];
//   if (elem <= 2) {
//     newArr.push(elem);
//   }
// }
// console.log(newArr);
//
// const user = {
//   english: 'B1',
// };

// const arr = [
//   {
//     salary: 500,
//     expectedEnglishLevel: 'rus',
//   },
//   {
//     salary: 800,
//     expectedEnglishLevel: 'B0',
//   },
//   {
//     salary: 1000,
//     expectedEnglishLevel: 'B1+',
//   },
//   {
//     salary: 2000,
//     expectedEnglishLevel: 'B1+',
//   },
// ];
//
// arr.filter(function (value, index, arr) {
//   return arr;
// });
//
// const isSalaryMoreThan2000 = arr.some(function (value, index, arr) {
//   if (value.salary >= 3000) {
//     return true;
//   }
// });
//
// // filter + some
//
// console.log(isSalaryMoreThan2000);
//
// function forEach(arr, callback) {
//   for (let i = 0; i < arr.length; i++) {
//     const value = arr[i];
//     callback(value, i, arr);
//   }
// }

//
// forEach(arr, function (value, index, arr) {
//   console.log('value: ', value);
//   console.log('index: ', index);
//   console.log('arr: ', arr);
// });

const users = [
  {
    age: 20,
    salary: 0,
  },
  {
    age: 10,
    salary: 1500,
  },
  {
    age: 10,
    salary: 1000,
  },
];

console.log(users.sort(function (a, b) {
  return 0;
}));

/*
* '0' - пропускает текущую итерацию
* '-1' - возвращает текущее
* '1' - возвращает следующее число
* */

// const arr = [10, 20, 30];

/*
* Сумму всех чисел внутри массива
* */

/*
* 1. Создать переменную которая равна 0
* 2. Пройтись циклом по массиву
* 3. Взять значение из текущего цикла и добавить его в созданную переменную
* 4.
* */

function sum(arr) {
  let counter = 0;
  arr.forEach(function (value) {
    counter += value;
  });
  return counter;
}

// console.log(sum(arr));

const arr = ['JS', 'Easy', 'For', 'Life'];

console.log(arr.reduce(function (newValue, value, index, arr) {
  console.log(index);
  return newValue + ' - ' + value ;
}));

/*
- JS - EASY - For - Life
*/