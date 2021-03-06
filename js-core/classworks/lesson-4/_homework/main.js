/*
* Напишите функцию которая будет принимать 1 аргумент и в зависимости от типа аргумента
*
* Если тип аргумента число или объект -> возвращать true
* Если тип аргумента функция -> возвращать false
* Если тип аргумента Строка и длина этой строки не равна 10 -> возвращать "длина вашей строки: <длина строки>
*                            Если длина 10 -> 'you win'
*
*
*
*
* */

/*
*
*  Задача в классе !
*
* */

/*
 1. Напишите функцию которая принимает 2 числа
 и возвращает массив содержащий числа между первым числом и вторым числом;
 */

function numbersBetween(a, b) {

}

numbersBetween(3, 5);
// 3, 4, 5

numbersBetween(10, 12);
// 10, 11, 12

/*
 2. Перепишите задачу FizzBuzz, но с использованием цикла.
 Расчет чисел должен идти до 100
 */

// 1. FizzBuzz 3, 5, 3 && % 5

function FizzBuzz(number) {

}

function fizzBuzz100(number) {

}

/*
 3. Напишите функцию которая принимает 1 аргумент - массив
 И возвращает новый массив содержащий типы значений переменных
 */

// let arr = [1, null, undefined, 'str', {}, [], function() {}];

/*
 1. @@SUPER@@. Вам дан массив array, содержащий внутри объекты.
 Напишите функцию которая внутри цикла проходится по каждому элементу массива
 И проверяет какой тип данных содержит свойство age, если age NaN,
 тогда добавляет данному объекту свойство unknownAge: true

 2. На основании нового массива, создайте новую функцию, которая вернет новый массив
  содержащий все объекты содержащие свойство unknownAge: true
 */

let array = Array.from({length: 35},
  (value, index) => (index % 2 ? {age: index + 2} : {age: NaN}),
);

function objectLoop(obj) {
  if (!obj.age) {
    return;
  }

  if (obj.age && isNaN(obj.age)) {
    console.log('aaaa');
  }
}

function solution(arr) {
  const newPatchedArray = [];
  for (let i = 0; i < arr.length; i++) {

    const elem = arr[i];
    if (!isNaN(elem.age)) {
      continue;
    }

    elem.unknownAge = true;
    newPatchedArray[newPatchedArray.length] = elem;
  }

  return newPatchedArray;
}

console.log(solution(array));


