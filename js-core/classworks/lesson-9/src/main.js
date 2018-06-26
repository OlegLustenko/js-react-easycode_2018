// const myJson = {
//   name: 'my library',
//   version: 10,
//   dependency: {
//     react: '^16.4.0',
//     babel: false,
//     plugins: ['env', 'qwerty']
//   },
//   methodES5: function() {
//     console.log(Object.key(myJson));
//   },
//   methodES6() {
//     console.log(Object.key(myJson));
//   },
//   set length(version) {
//     console.log('50');
//     myJson.version = version;
//   },
//   get length() {
//     return myJson.version;
//   }
// };

// myJson.length = 20;

/*
* явное лучше не явного
* */

/*
*
* Добавьте метод который будет отображать
* все ключи этого объекта
*
* */

// var validJSON = JSON.stringify(myJson);
//
// console.log(JSON.parse(validJSON));

/*
*
* FUNCTIONS
*
* */

function addES5(a, b) {
  return a + b;
}

const addES6_v1 = (argument1, argument2) => {
  return argument1 + argument2;
};

const addES6_v2 = (a, b) => a + b;

/*
*
* напишите функцию которая принимает 1 аргумент
* имя и возвращает 'привет меня зовут <Имя>'
*
*
* напишите функцию которая принимает 1 аргумент
* имя и возвращает объект { name: 'example' }
* */

const usersArray = ['Vasya', 'Petr', 'Alexander'];
/*
[{name: 'Vasya'}, {name: 'Petr}, {name: 'Alexander'}]
*/

const arrayUsers = arr => arr.map(name => ({name}));

// console.log(arrayUsers(usersArray));

const createUser = name => {
  return {
    name,
  };
};

const userVasya = createUser('Vasya', 'Petrovich');
const userPetya = createUser('PEtya', 'Vasilievich');

// console.log(userVasya);
// console.log(userPetya);

const myJson = {
  name: 'my library',
  version: 10,
  dependency: {
    react: '^16.4.0',
    babel: false,
    plugins: ['env', 'qwerty'],
  },
  methodES6() {
    console.log(this);
  },
};

const anotherObject = {
  name: 'easycode-stundent',
  id: 0,
  salary: '+500$',
  methodES6() {
    console.log(this);
  },
};

// anotherObject.methodES6();
// myJson.methodES6();

function methodES6() {
  return this;
}

// methodES6();

var pages = 100500;

const showPages = () => {
  console.log(this.pages);
};

let book1 = {
  name: 'Learn Ruby',
  pages: 200,
  showPages
};

let book2 = {
  name: 'Be a pro in JavaScript',
  pages: 10,
  showPages
};

/*
 Напишите функцию которая будет отображать количество
 страниц в книге, данную функцию можно будет вызвать как
 для объекта book1 так и для объекта book2
 */
