var myName = 'Олег'
let myNameLet = 'Железный Человек 2'

myNameLet = 'Халк 3'
const myNameConst = 'Олег 3'
// myNameConst = 'YES'

const primitiveTypeBoolenTrue = true
const primitiveTypeBoolenFalse = false

const primitiveTypeNumber = 10
const primitiveTypeNumberFloat = 10.5
const primitiveTypeNumberInfinity = Infinity
const primitiveTypeNumberNotANumber = NaN

const primitiveTypeString = 'Привет моя строка'
const primitiveTypeString_v2 = 'Привет моя строка'
const primitiveTypeString_v3 = `Привет моя строка`

const primitiveTypeNull = null

const primitiveTypeUndefined = undefined

var s

console.log('привет ', primitiveTypeNumber)
console.log('привет ', primitiveTypeNumberInfinity)
console.log('привет ', primitiveTypeNull)
console.log('привет ', primitiveTypeUndefined)
console.log('привет ', primitiveTypeNumberNotANumber)

const user = {
  shoes: 'Летние тапки',
}

console.log(user)

/*
*
* Сделайте пользователя у которого будет 2 поля
* Фамилия и Имя
*
* друг
* у друга есть имя
* и есть собака у которой есть кличка
*
*
*
* Добавьте друзей myUser
*
* HIGH -> несколько друзей
* */

const randomFriend = {
  name: 'some friend',
  surname: 'hello surname',
}

const myUser = {
  name: 'Oleh',
  surname: 'Lustenko',
  friend: {
    name: 'Egor',
    dogName: 'Хитрость',
    dog: {
      name: 'sssss',
    },
  },
  friends: [
    'Alesha',
    'Jenya',
    'Vladislav',
  ],
}

console.log(myUser)

const myArray = [
  'красный карандаш',
  'зеленый карандаш',
  primitiveTypeNumberInfinity,
]

console.log(myArray)


const mySymbol = Symbol('WWW');

console.log(mySymbol);


co
