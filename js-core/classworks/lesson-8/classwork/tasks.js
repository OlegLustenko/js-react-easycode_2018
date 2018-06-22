function checkActionType(action) {
  switch (action.type) {
    case 'INITIALIZE':
      return {initialized: true};
    case 'INCREMENT':
      return {salary: '+500$'};
    case 'DECREMENT':
      return {salary: '-500$'};
    default:
      return {}
  }
}

checkActionType({type: 'INITIALIZE'});
checkActionType({type: 'INCREMENT'});
checkActionType({type: 'DECREMENT'});

/*
*  INITIALIZE ->  содержащий свойство { initialized: true }
*  INCREMENT ->  с свойством { salary: '+500$' }
*  DECREMENT ->  с свойством { salary: '-500$' }
*            ->  {}
* */

/*

 Посчитайте сумму всех переданных аргументов-чисел в функцию,

*/

sum(10, 20); //30
sum(10, 20, 30, 40); // 100

// скопировать объект

const object = {
  name: 'your name',
  id: 50,
  friends: ['Lera', 'Vitya', 'Vladimir'],
  recepts: {
    pizza: {
      ingredients: ['cheeze', 'toast']
    }
  }
};
