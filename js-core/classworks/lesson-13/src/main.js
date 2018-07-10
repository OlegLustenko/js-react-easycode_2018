// function User(name, cash) {
//   this.name = name;
//   let secretCash = cash;
//
//   this.getSecretCash = () => secretCash;
//   this._validateSomething = () => 1001;
// }
//
// User.prototype.sayHello = function() {
//   console.log('say hello ', this.name);
// };
//
// function Worker() {}
//
// Worker.prototype = Object.create(User.prototype);
//
// Worker.prototype.sayHello = function() {
//   console.log('Hello from worker');
// };
//
// var afanasui = new Worker();
//
// afanasui.sayHello();
//
// function CountryConstrcutor(countryName) {
//   this.countryName = countryName;
// }
//
// CountryConstrcutor.prototype.showCity = function() {
//   console.log('qwerty');
// };
// // -------------------------------
// const ukraine = new CountryConstrcutor('ukraine');
//
// /*{countryName: 'ukraine'}*/
// function City(city) {
//   CountryConstrcutor.apply(this, city);
//
//   this.cityName = city;
// }
//
// City.prototype = Object.create(CountryConstrcutor.prototype);
// City.prototype.showCity = function() {
//   this.__proto__.showCity();
// };
//
// class CountryClass {
//   constructor(options) {
//     this.countryName = options.age;
//     let secretMassonsPlace = 'Island';
//     this.showSecretMassonsPlace = () => {
//       secretMassonsPlace;
//     };
//   }
//
//   showCity() {
//     console.log(this.countryName);
//   }
// }
//
// const ukraine2 = new CountryClass('ukraine');
// const ukraine3 = new CountryClass('ukraine');
//
// /*{countryName: 'ukraine'}*/
//
// class CityClass extends CountryClass {
//   constructor({name, age}) {
//     super(); // super!
//     this.cityName = name;
//   }
//
//   showCity() {
//     console.log(this.cityName);
//     super.showCity();
//   }
// }
//
// const kharkiv = new CityClass({name: 'kharkiv', age: 18});
//
// /*
// *
// * Добавьте всем массивам метод sum
// * который сумирует все аргументы в массиве
// *
// * */
//
// const arr = [1, 2, 3];
// const arr2 = [10, 20, 50]; // 80
//
// Array.prototype.sum = function() {
//   return this.reduce((a, b) => a + b, 0);
// };
//
// arr.sum(); // 6
// arr2.sum(); // 80
//
//
//
//
//
//
//
//
//
/*
* Сделайте класс Animal с 4 ногами
*
* добавьте классу Animal метод roar()
*
*  -> зверь с <лапы> рычит
*
* Добавьте класс-животного которое
* проживает у вашего соседа
*
* Пускай этот животный наследуется от Animal
* Узнайте сколько у него ног и как зовут
*
* -> имя
* -> добавьте метод (умение животного)
*
* */

class Animal {
  constructor(legs) {
    this.legs = legs;
  }

  roar() {
    console.log(`зверь с ${this.legs} рычит`);
  }
}

class Duck extends Animal {
  constructor() {
    super();
  }

  roar() {
    super.roar();
    console.log(`зверь с ${this.legs} рычит`);
  }
}

class Dog extends Duck {
  constructor() {
    super();
  }
  roar() {
    console.log(`зверь с ${this.legs} рычит`);
  }
}

function multiInherit(classToInherit, class1, class2) {

}

var myAnimal = new Animal(4);
myAnimal.roar();


//
