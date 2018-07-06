# Prototype

> + [Prototype YDKJS Series](https://github.com/getify/You-Dont-Know-JS/blob/master/this%20%26%20object%20prototypes/ch4.md)


## Методы объектов, this
+ Статья:  http://learn.javascript.ru/object-methods
## Задачи:
* [call - this](http://learn.javascript.ru/task/call-array-this)
* [check-syntax](http://learn.javascript.ru/task/check-syntax)
* [why-this](http://learn.javascript.ru/task/why-this)
* [property-this](http://learn.javascript.ru/task/object-property-this)
* [return this](http://learn.javascript.ru/task/return-this)
* [return-object-this](http://learn.javascript.ru/task/return-object-this)
* [calculator](http://learn.javascript.ru/task/calculator)
* [chain-calls](http://learn.javascript.ru/task/chain-calls)

### Создание объектов через «new»
Статья: http://learn.javascript.ru/constructor-new
## Задачи:
+ [two-one](http://learn.javascript.ru/task/two-functions-one-object)
+ [calc-constructor](http://learn.javascript.ru/task/calculator-constructor)
+ [accumulator](http://learn.javascript.ru/task/accumulator)
+ [calc extendable](http://learn.javascript.ru/task/calculator-extendable)

## [[Scope]] для new Function
[Статья: Scope-new-function](http://learn.javascript.ru/scope-new-function)

Еще задачи:
> [http://learn.javascript.ru/task/filter-through-function](http://learn.javascript.ru/task/filter-through-function)

----

# Чтобы каждый из вас подумал, как может выглядить ПРИЛОЖЕНИЕ
# ТЕЛЕФОННЫЙ СПРАВОЧНИК

Приложение телефонный справочник

+ Создайте функцию конструктор.
 > У данной функции должны быть методы:
  1. Преобразование телефонного номера из формата 0993378130 в (099) 33-78-130
  2. Проверка, что телефонный номер содержит только числа
  3. Добавление пользователей в справочник
  7. Удаление пользователя по имени, фамилии
  4. Поиск пользователей по имени - отображает всех пользователей с одинаковым именем
  5. Изменение имени, фамилии, телефонного номера у выбраного пользователя ( здесь должно быть реализовано через this )
  6. Сортировка пользователей по номеру телефона, фамилии, имени и тд, по любому из свойств пользователя
  7. Фильтр по указанному свойству

```js
function PhoneApp() {
  this.dataBase = [
        {id:1, name:'Vasya', phone:'qweqwe'},
        {id:1, name:'Vasya', phone:'qweqwe'},
        {id:1, name:'Vasya', phone:'qweqwe'},
        {id:1, name:'Vasya', phone:'qweqwe'},
    ]
}

PhoneApp.prototype.editUser = function(id, options) {
  /*
   options.name
   options.
  */  
}

PhoneApp.prototype._validate= function(id, options) {
  /*
   options.name
   options.
  */  
}

const myApp = new PhoneApp();

```


## Кто умеет верстать и хочет проявить свое творчество сделать верстку ?
 # Сверстать можно грид или div + flex
 # нужно:

* Навигация на каждой странице
* Страница набора номера - keypad
* Страница поиска контактов ( просто таблица с колонками ) - Contacts
* Страница контакта - User
* Страница контакта - edit contact
* Страница контакта - new contact


  