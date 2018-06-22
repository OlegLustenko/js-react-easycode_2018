

let object = {};
let object2 = new Object();
const qwerty = {};
qwerty.name = 'Oleg';
console.log(qwerty);

object.htmlTags = ['<div>', '<ul>', '<li>'];
object['headersTags'] = ['<h1>', '<h2>', '<h3>'];
object[true] = ['HTML тэги имеют формат <названиеТэга> </названиеТэга>'];
object['one-two-three'] = [`<body><h1>Hello</h1></body>`];


object[qwerty] = 'kto zdes ?';


// скопировать объект

// var object = {
//   name: 'your name',
//   id: 50,
//   friends: ['Lera', 'Vitya', 'Vladimir'],
//   recepts: {
//     pizza: {
//       ingredients: ['cheeze', 'toast']
//     }
//   }
// };

function cloneObject(someObj) {
  // создаем новый объект
  var obj = {};

  // пройтись при помощи цикла for-in
  for (let key in someObj) {
    obj[key] = someObj[key];
  }
  // по всем свойствам someObj
  // добавить такие же ключи из someObj в уже созданный объект
  // вернуть уже созданный объект
  return obj;
}

var clonedObject = cloneObject(object);
var es5ObjectClone = Object.assign({}, object, {
  friends: [...object.friends]
});
// #Immutable
var es7ObjectClone = {...object, friends: [...object.friends]}; // {name:'', id:''}

object.recepts.hachapuriWithCheeze = {
  ingredients: ['@', '@']
};
console.log(clonedObject);
