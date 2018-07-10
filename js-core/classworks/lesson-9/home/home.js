// Отобразите достаточно ли у developers навыков ?
// Отобразите всех разработчиков и вызовете у каждого
// разработчика метод goodDev --

/*
 * Количество требований к разработчику совпадает с его навыками.
 * Используйте в задаче this
 * */

let developer1 = {
  skills: ['JavaScript', 'linux', 'html', 'OOP', 'Node.js'],
  requirements: ['Node.js', 'JavaScript', 'OOP'],
  goodDev: goodDev
};

let developer2 = {
  experience: [
    {technology: 'java'},
    {technology: 'c++'},
    {technology: 'aws'},
    {technology: 'docker'}
  ],
  requirements: ['java', 'json', 'c++', 'JavaScript'],
  goodDev: goodDev
};

function extractDevTechnologies(experience) {
  return experience.map(technologySkill => technologySkill.technology);
}

function goodDev() {
  const devSkills = this.skills || extractDevTechnologies(this.experience);

  this.requirements.forEach(requirmentToDeveloper => {
    const isDevKnowIt = devSkills.includes(requirmentToDeveloper);

    const successFailLabel = isDevKnowIt ? 'success' : 'fail';
    console.log(`required: ${requirmentToDeveloper} ... ${successFailLabel}`);
  });
}

const developers = [developer1, developer2];

developers.forEach((dev, index) => {
  console.log('developer ', index + 1);
  dev.goodDev();
});

// developer 1
// required: Node.js ... success
// required: JavaScript ... success
// required: OOP ... success
// ---

// developer 2
// required: json ... fail
// required: JavaScript ... fail
// required: Java ... success
// required: OOP ... success

/*
 *
 * TASK 2
 *
 *
 * Напишите функцию принимает 1 аргумент сортирует объект по
 * переданному значению (например age или name)
 *
 * При вызове функции используйте this
 *
 * */

let myObject = {
  database: [{age: 100, name: 'b'}, {age: 15, name: 'c'}, {age: 25, name: 'a'}]
};

myObject.myFilter = function(param) {
  return this.database.sort((user1, user2) => {
    return user1[param] > user2[param];
  });
};

// {age:15, name:'c'}, {age:25, name:'a'} {age:100, name:'b'}
console.log(myObject.myFilter('age'));

// {age:25, name:a}, {age:100, name: b} ...
console.log(myObject.myFilter('name'));

/*
 * TASK 3
 *
 * Перепишите homework 5 с использованием методов массивов и
 * => arrow functions
 *
*/

////// @ TODO -- LVL Strong Junior

/*
 *
 * TASK 1
 * Напишите функцию которая принимает 3 аргумента:*
 *
 *  - объект к которому привязывается метод
 *  - Имя свойства с которым связывается метод
 *  - Объявление привязываемого метода( функция )
 *
 *  Если количество аргументов у функции fn совпадает с переданными
 *  параметрами тогда сохраняет метод в замыкании
 *  и привязывает функцию к методу объекта
 *
 *  при вызове одного и того же метода с разным количеством аргументов,
 *  должно давать различный результат
 *
 * */

let junior = {};

// fn.length == arguments.length

function addMethod(object, name, fn) {
  let oldMethod = object[name]; // ok => function
  object[name] = function(...args) {
    if (fn.length === args.length) {
      fn.apply(this, args);
    } else if (typeof oldMethod === 'function') {
      oldMethod.apply(this, args);
    }
  };
}

addMethod(junior, 'ok', function() {
  console.log('zero arguments');
});
addMethod(junior, 'ok', function(one) {
  console.log('one arguments');
});
addMethod(junior, 'ok', function(one, two) {
  console.log('two arguments');
});
addMethod(junior, 'ok', function(one, two, three) {
  console.log('three arguments');
});

junior.ok(1, 2, 3); // 'three arguments'
junior.ok(1, 2); // 'two arguments'
junior.ok(1); //'one arguments'
junior.ok(); //'zero arguments'
junior.ok(); //'zero arguments'
