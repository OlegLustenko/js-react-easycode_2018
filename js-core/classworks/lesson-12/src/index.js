/*
 Добавьте логику, чтобы если не была вызвана функция drive,
 функция стоп отображает: 'машина уже стоит'
 а если была, тогда: "%марка машины% остановилась"
*/

// 1. Когда машина поехала, запомнить машина поехала
// 2. Когда машина остановилась проверить ехала ли машина.

function Car(wheels, color, doors, type) {
  this.wheels = wheels;
  this.color = color;
  this.doors = doors;
  this.type = type;
}

Car.prototype.drive = function() {
  // Машина поехала
  this.run = true;
  console.log(this.type, 'car is driving');
}

Car.prototype.stop = function() {
  if (!this.run) {
    console.log('машина уже стоит')
  } else {
    console.log(this.type + ' is stopped');
  }
  this.run = undefined;
}

var bmw = new Car(4, 'red', 2, 'bmw');
var lexus = new Car(4, 'black', 6, 'lexus');
// bmw.stop();

// .__proto__ - для объектов
// .prototype - для функций-конструкторов(класс)

var cat = {
  legs: 4,
  callKitty(food, food2, food3 = '') {
    console.log(this.name, 'кис-кис-кис держи ', food)
    console.log(food2, food3);
  }
}

var myCat = {
  name: 'Hermiona'
}

var anotherCat = {
  name: 'Белящик'
}

myCat.__proto__ = cat;
// myCat.callKitty('рыбу', 'корм')

// cat.callKitty.call(anotherCat, 'вискас', 'хозяина')
// cat.callKitty.apply(anotherCat, ['вискас', "хозяина"]);
// var feedBelyash = cat.callKitty.bind(anotherCat);
// feedBelyash("индейку", 'asdasda qweqw qwe');

function bind(contextFN, object) {
  return (...args) => {
    contextFN.apply(object, args)
  }
}

var feedBelyash = bind(cat.callKitty, anotherCat);
// feedBelyash("передаем приветы!", "рыба", "корм");

// .bind
/*
* apply, call - принимает первым аргументом объект, который
* мы хотим установить в качестве контекста вызова функции
*
* call - принимает аргументы в вызываемую функцию, через
* запятую
* apply - принимает аргументы в виде массива
*
* СРАЗУ ЖЕ ВЫЗЫВАЮТ ФУНКЦИЮ
* 
* bind - привязывает определенный объект к функции
* НО НЕ ВЫЗЫВАЕТ ЕЕ
*/

/* метод doMagic
 doMagic, тогда вызывает метод magic если type маг
 все остальные случае, показывает в консоле вы человек
*/
function Creature(type) {
  this.name = 'Egor';
  this.type = type;
}
Creature.prototype.doMagic = function() {
  if (this.type === 'Mage') {
    this.magic();
    return;
  }
  console.log('привет человече!')
}
/* Добавьте наследование от Creature */
Human.prototype = Object.create(Creature.prototype);

function Human(type, ears) {
  // расширение свойств -- наследование
  Creature.call(this, type);
  this.ears = ears;
}

function Mage(type, name) {
  Creature.call(this, type)
  this.name = name
}


Mage.prototype = Object.create(Creature.prototype);
Mage.prototype.magic = function() {
  console.log('ТЫ ПРОЙДЕШЬ СОБЕСЕдование !')
}

var Jack = new Human('Воробей', 2);
var John = new Human('Коннор I\'ll be back', 150);
var Gendalf = new Mage('Mage', 'Гендальф');
Gendalf.doMagic();
