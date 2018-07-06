function Database(databaseName) {
  this.databaseName = databaseName;
  // this.whatsup = function() {
  //   console.log('wwwwW')
  // }
}

Database.prototype.whatsup = function() {
  console.log('whatsup!');
};

// Database.prototype.registerUser = function(name, password) {
//   this.user = {
//     name: name,
//     password: password
//   };
// };

// Database.prototype = {
//   table: 'MAIN',
//   registerUser() {
//     console.log(this.databaseName)
//   }
// };

/*
* То что было в prototype функции конструктора
*
* присвоилось(передалась ссылка) в новый экземпляр в __proto__
*
* */

var mySQL = new Database('MySQL');

/*
*
* mySQL.__proto__ == aef35x0
*
*  */

mySQL.whatsup();

// Database.prototype = {
//   asd() {
//
//   }
// };

var mongoDB = new Database('mongodb');

/*
*
* функцию конструктор Transport которая будет принимать 3 аргумента
* color, name, doors
* каждой машине добавьте 4 колеса
*
* и создайте себе машину той марки которую вы желаете
* на зарплату мидла
*
*
* добавьте метод beepBeep всем машинам, при вызове данного
* метода отобразите в консоле -> сигнал
*
*
* создайте еще одну функцию конструктор Bus
*
* функция конструктора будет наследоваться от Transport
* и добавлять стоимость проезда новому экземпляру
*
* */

function Transport(color, name, doors) {
  this.color = color;
  this.name = name;
  this.doors = doors;
  this.wheel = 4;
}

Transport.prototype.beepBeep = function() {
  console.log('beep beep');
};

var mazda = new Transport('yellow', 'mazda', 5);

function Bus() {
}

Bus.prototype = Object.create(Transport.prototype);
/*
* new instance у него уже в __proto__ лежит beepBeep
* */

Bus.prototype.getPrice = function() {
  console.log('price 3 uah');
};

var bus = new Bus('yellow', 'mazda', 10);
bus.beepBeep();
bus.getPrice();


































