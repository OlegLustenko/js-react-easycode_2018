// for (let i = 0; i < 1000; i = i + 1) {
//   if (i % 2 === 0) {
//     // console.log(i);
//   }
// }

const arr = [10, 20, 30, 40];

// for (let i = 0; i < arr.length; i = i + 1) {
//   console.log(arr[i]);
// }

/*

Напишите функцию, которая принимает первым
параметром массив с числами
и отображает в консоле последовательно все значения
умноженные на 2

*/










function sumArr(arr) {
  for (let i = 0; i < arr.length; i++) {
    console.log(arr[i]);
    console.log(arr[i] * 2);
  }
}

// sumArr([10, 203, 500, 20]);

/*

Напишите функцию, которая ВЕРНЕТ массив
с нечетными значениями

*/

const qwerty = [11, 20, 31, 40, 51, 60, 71, 80, 91, 100];

// 1. Создать функцию, которая принимает 1 параметр
function filterEven(arr) {
  // 2. Создать пустой массив
  // 3. Начать перебирать массив который пришел в параметрах
  for (let i = 0; i < arr.length; i = i + 1) {
    let elem = arr[i];
    // 4. Проверить элемент массива, является ли он четным
    // 11
    if (elem % 2 > 0) {
      const myArr = [];
      // 5. Если не является, тогда добавить в созданный массив
      myArr.push(elem); // 11
    }
  }
  // 6. Вернуть созданный изначально массив
  return myArr;
}

// console.log(filterEven(qwerty));

var myArr = [10, 20, { age: 27 }, 30, 51];
let i = 0;
// while (i < myArr.length) {
//   console.log(myArr[i]);
//   if (myArr[i].age) {
//     console.log('YOU are winners');
//     break;
//   }
//   i = i + 1;
// }
// let counter = 0;
// let randomValue = Math.random() * 10;
// while (randomValue < 9) {
//   randomValue = Math.random() * 10;
//   console.log(counter, 'react');
//   console.log(randomValue);
//   counter = counter + 1;
// }
// console.log(randomValue);

// do {
//   console.log('xxx');
//   // randomValue = Math.random() * 10;
// } while (randomValue < 9);

var project = {
  name: 'Landing page',
  salary: '1200$',
  technology: ['CSS3', 'HTML5', 'jQuery'],
  method: function() {
    console.log('что делать ?');
  }
};

for (let key in project) {
  let elem = project[key];
  console.log('key: ', key);
  console.log('value: ', project[key]);
  // если значение является массивом, тогда
  // отобразите все значения последовательно на новой строке
  // Array.isArray( [] )
  if (Array.isArray(elem)) {
    for (let i = 0; i < elem.length; i++) {
      let itemInArray = elem[i];
      console.log('item in array: ', itemInArray);
    }
  }
}
