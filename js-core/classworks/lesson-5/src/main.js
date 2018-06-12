const array = [1, 2, 3, 4, 5];

// function findInArray(array, numberToFind) {
let myNumber;
for (let i = 0; i < array.length; i++) {
  const elem = array[i];
  if (elem !== 2) {
    continue;
  }
  console.log(elem);
}
//
//   return myNumber;
// }

// const s = findInArray(array, 2);

// s;

const myArray = [1, 2, 3];
console.log(myArray);

/* добавляет элемент в конец массива
и ничего не возвращает
* */
myArray.push(4);

console.log(myArray);

/* pop - удаляет последний элемент
 и возвращает его
 */

const lastArray = myArray.pop();
console.log(lastArray);

console.log(myArray);

/* shift - удаляет первый элемент массива
 и возвращает его
 */

const firstElem = myArray.shift();

console.log(firstElem);
console.log(myArray);

/*
 unshift
 добавляет первый элемент массива
 и возвращает длину массива
*/
console.log(myArray.unshift(10));

const myArray2 = myArray.slice(1);

console.log('--->', myArray);
console.log('--->', myArray2);

console.log(myArray);
console.log(myArray.reverse());

const myString = 'JavaScript is Awesome';
// emosewA si tpircSavaJ
/*
* split
* join
* reverse
* 1. Как превратить строку в массив
*
* */

/*
* вам нужно перевернуть каждый символ
* в предложении в обратную сторону
* */


