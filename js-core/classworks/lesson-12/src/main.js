/*
*
*  prototype @_@
* Сделайте человека -> drinkCoffee
* Сделайте программиста -> проммист умеет createHelloWorld
*
* Сделайте Васю сначала человеком -> Human
* А потом научите васю вызывать метод createHelloWorld
*
* vasya.drinkCoffee()
* vasya.createHelloWorld()
*
* */

function AuthorizedUser(name, password, cash) {
  this.name = name;
  let secretPassword = password;
  let secretCash = cash;
  this.showUserCash = function(passwordToCompare) {
    if (this._isPasswordValid(secretPassword, passwordToCompare)) {
      console.log('> 505');
      return;
    }

    console.log(secretCash);
  };
  this.addCash = function(cashToAdd, passwordToCompare) {
    if (this._isPasswordValid(secretPassword, passwordToCompare)) {
      console.log('> 505');
      return;
    }

    secretCash += cashToAdd;
    console.log(secretCash);
  };

  /* ЗДЕСЬ ВАШ КОД
  * имя пользователя является публичным !
  * пароль секретный(приватный), cash - secret
  * _isPasswordValid - защищенный
  * --- у вас есть метод showUserCash
  *
  * при вызове у пользователя showUserCash
  * если вы передали правильный пароль вы узнаете
  * сколько у вас есть наличных
  *
  * если вы передали не правильный пароль
  * происходит ошибка
  *
  * addCash(cashToAdd)
  *   -> увеличивает ваш кеш на переданный аргумент
  *
  * var me = new AuthorizedUser('me', 'secret', 3500)
  * me.showUserCash('OHOHOHO') -> ERROR 505
  * me.showUserCash('secret') -> 3500
  * me.addCash(7000, 'secret') -> 'Success'
  * me.showUserCash('secret') -> 10500
  * */
}
AuthorizedUser.prototype._isPasswordValid = function(
  secretPassword,
  passwordToCompare
) {
  return secretPassword === passwordToCompare;
};

var me = new AuthorizedUser('me', 'secret', 3500);
me.showUserCash('OHOHOHO'); // error
me.showUserCash('secret'); // cash -> 3500
me.addCash(7000, 'secretsecret'); // 10500
me.showUserCash('secret'); // 10500

function Human(name, age) {
  const addToName = ' facebook inc.';
  this.name = name + addToName;
  this.age = age;
  let secreteMessage = '1233 1223 1231 222';

  this.getSecreteMessage = function() {
    return secreteMessage;
  };
}

Human.prototype.drinkCoffee = function() {
  this._createLogMessage('DRINK COFFEE');
};

Human.prototype.eatFood = function() {
  this._createLogMessage('EAT COFFEE');
};

Human.prototype._createLogMessage = function(message) {
  console.error(message);
};

function Developer(...args) {
  // args -> []
  Human.apply(this, args);
  this.skills = ['JS', 'HTML'];
}

Developer.prototype = Object.create(Human.prototype);

const vasya = new Developer('vasya', '20');
console.log(vasya);

vasya.drinkCoffee();

// Developer.prototype.createHelloWorld = function() {
//   console.log('Hello world !');
// };
//
// Human.prototype = Object.create(Developer.prototype);
// Human.prototype.drinkCoffee = function() {
//   console.log('Drink Drink');
// };
//
// const vasya = new Human();
// vasya.createHelloWorld();
// vasya.drinkCoffee();
