var myArr = [1, 2, 3];
// 1,2,3
myArr.push(50);
// просто последний элемент в конец
// 1,2,3, 50
const xxx = myArr.pop(); // удаляем последний элемент и возвращаем его

var firstEleme = myArr.shift(); // удаляет первый элемент и возвращает его

console.log(myArr);
myArr.unshift(800);
// [2, 3]
//  0, 1
// [800, 2, 3]
// Нужно пересчитать индексы и подвинуть все значения на 1 индекс вправо
myArr.push(100, 200, 300, 400);
console.log(myArr.slice());
const someArr = [1, 2, 3, 4, 5, 6];

var qwe = [1, 2, 3];

// console.log(qwe.splice(1, 1));
console.log(qwe);

// qwe.concat()

console.log(qwe.reverse());

console.log('JavaScript'.indexOf('t'));
console.log('JavaScript'.split('').indexOf('t'));

const js = 'JavaScript is cool language with awesome community';
// перевернуть каждое слово в этом приложении
console.log(js.split('').join(' '));

// const js = 'JavaSCRIPT_COOL-language';
console.log(js.split('').reverse().join(''));
// перевернуть
