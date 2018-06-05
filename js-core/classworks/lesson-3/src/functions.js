function show3Numbers() {
  console.log(1)
  console.log(2)
  console.log(3)
}

console.log('собираюсь в магазин')
show3Numbers()
console.log('собираюсь в магазин #2')
show3Numbers()

function helloToUser(userName) {
  console.log('привет пользователю: ', userName)
}

helloToUser('Николь')

/*
* function showNumber
* Функция отображает число при вызове
*
* function numberX2()
* напишите функцию которая принимает в аргументах число и умножает его на 2
*
* */

function showNumber() {
  console.log(Math.random())
}

showNumber()

function numberX2(someNumber) {
  console.log(someNumber * 2)
  return someNumber * 2;
}

const numberTwenty = numberX2(10);

console.log(numberTwenty);


/*
*
* Напишите функцию которая будет
* возвращать приветствие к пользователю
* 'привет меня зовут <ваше имя>'
*
* присвойте результат этой фунции в переменную
*
* отобразите это в консоле
*
* */

function makeUserGreetings(userName) {
  const greeting = `hello ${userName}`;
  return greeting;
}

const userNameWithGreetings = makeUserGreetings('Oleh')
console.log(userNameWithGreetings);



