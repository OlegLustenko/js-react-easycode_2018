var bar = 'global';

function foo() {
  console.log(this.bar);
}

var obj1 = {
  bar: 'это мой контекст',
  foo: foo
};

var obj2 = {
  bar: 'Привет объект 2'
};

foo(); // "global"
// obj1.foo();         // "obj1" - мой контекст
foo.call(obj2); // "obj2"

// new foo();       // undefined

function User(name, surname) {
  // var obj = {};
  // неявно создает объект
  this.name = name;
  this.surname = surname;

  // неявно возвращает this
  // return obj;
}

var oleg = new User('oleg', 'Lustenko');
var dan = new User('Dan', 'Abramov');

console.log(oleg);
console.log(dan);



