'use strict';
/*
*
* https://habr.com/post/310794/
*
* */

/*
* Создать конструктор у который будет создавать новый объект
   myArray = параметр1 : Array
   cars = параметр2    : Object
   name = параметр3    : string
*
*
* */

function MyFirstConstructor(myArray, cars, name) {
  /* var obj = {} */
  if (myArray) {
    this.myArray = myArray;
  }

  if (cars) {
    this.cars = cars;
  }

  if (name) {
    this.name = name;
  }
  /* return obj   */
}

var s = new MyFirstConstructor();
var s2 = new MyFirstConstructor('a', 'b');

function Car(color, modelType) {
  this.color = color;
  this.modelType = modelType;
}

const audi = new Car('white', 'audi');
const bmw = new Car('black', 'bmw');

console.log(s);

// экземпляр

/* -------------------
// Создайте функцию конструктор -- всего может быть 3
// которая в зависимости от количества параметров
// будет создавать объект с количеством свойств
// равное количеству аргументов
*/

// --------------
// Создайте функцию конструктор,
// которая иметь приватный счетчик,
// данный счетчик можно будет увеличить только
// вызвав метод counter()
// --------------

function Counter() {
  let counter = 0;
  this.addCounter = function() {
    console.log(counter++);
  };
}

var myCounter = new Counter();
var myCounter2 = new Counter();

myCounter.addCounter();

myCounter2.addCounter();
myCounter2.addCounter();


