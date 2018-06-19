function add(x, y) {
  const number = 0;

  return x + y;
}

add(1, 2);
/*выход -> сборщик мусора -> garbage collector */
add(1, 2);
add(1, 2);
add(1, 2);
add(1, 2);

function closureCounter() {
  let counter = 0;
  let someVariable = 'JavaScript';

  function addCounter() {
    return ++counter;
  }

  return addCounter;
}

const addCounter = closureCounter();

console.log(addCounter()); // 1
console.log(addCounter()); // 2

function counter() {
  let myCounter = 0;
  let wwww = '123123';

  return function () {
    return myCounter++;
  };
}

const newCounter = counter();
// newCounter == newFunction
console.log(newCounter());
console.log(newCounter());

/*
* создать функцию которая вернет новую функцию..
* и будет складывать строки внутри себя
* */

function helloWorldClosure() {
  let s = function (str) {
    return str;
  };

  console.log(s);
  return s;
}

const helloWorld = helloWorldClosure();

console.log(helloWorld('hello'));
/*hello*/
console.log(helloWorld('world'));
/*hello world*/
console.log(helloWorld('world'));
/*hello world world*/

/*
* функция будет складывать 2 числа
* */

function plusSomething(number1) {
  return function (number2) {
    return number1 + number2;
  };
}

plusSomething.myName = 'myName';
console.log(plusSomething.myName);

const numberTwenty = plusSomething(); // 20
console.log(numberTwenty(20)); // 30

function add(x, y) {
  return x + y;
}

function sum(functionAdd, number1, number2, number3, number10, number1123123) {
  return function () {
  };
}

sum(add, 10, 20);

const myObject = {};
myObject.add = sum;

/*
* напишите функцию которая будет возвращать объект
* и у этого объекта будет свойство add
* которое будет равняться функции

* add() {}
* при вызове этого свойства отобразите в консоле 1

const myCounter = createCounter();
myCounter.add() // 1
myCounter.add() // 2
myCounter.add() // 3

при создании счетчика укажите изначальное состояние счетчика

Храните предыдущее состояние счетчика
получить это состояние можно добавив еще 1 свойство в объект
которое равняется функции - lastState()
* */

function createCounter(initialState) {
  let obj = {};
  let counter = initialState || 0;
  let counterPreviousState = counter;

  function add() {
    /*
       TODO advanced-level-closure напишите функцию
     * которая не будет внутри себя каждый раз делать
     *   counterPreviousState = counter;
     * */
    counterPreviousState = counter;
    return (counter = counter + 1);
  }

  function add10() {
    counterPreviousState = counter;
    return (counter = counter + 10);
  }

  function add20() {
    counterPreviousState = counter;
    return (counter = counter + 10);
  }

  function lastState() {
    return counterPreviousState;
  }

  obj.add = add;
  obj.lastState = lastState;
  obj.add10 = add10;
  return obj;
}

const myCounter = createCounter();
console.log(myCounter.add());
console.log(myCounter.add());
console.log(myCounter.add());
console.log(myCounter.add());
