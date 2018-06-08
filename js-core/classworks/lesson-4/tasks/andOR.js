// alert(alert(1) || 2 || alert(3));



// 1.
// alert(1 && null && 2);

// let Jack = true && false;

// if (-1 || 0) alert('первое');
// if (-1 && 0) alert('второе');
// if (null || -1 && 1) alert('третье');



// var superPuperValue = true;

// Напишите функцию, которая принимает 1 аргумент объект 
// И если у этого объекта нет свойста salary 
// ИЛИ значение salary не заполнено, 
// добавляет эту переменную в salary с значением 800

let checkSalary = function(dev) {

  //1. Проверить, если ли у объекта свойсто salary;
  //2. Или это свойство не заполнено, мы заполняем 800
  let salaryIsTrue = dev.salary || 800;
  dev.salary = salaryIsTrue;
  return dev;
  //3. Во всех остальных случаях возвращаем то, что есть

  // dev.salary = salaryIsTrue;

  // return dev;

}

let devVasya = { salary: 1500 };
let devJack = { salary: null };
let easyCodeStudent = {};

console.log(checkSalary(devVasya)) // {salary:1500}
console.log(checkSalary(devJack)) // {salary:800}
console.log(checkSalary(easyCodeStudent)) // {salary:800}


console.log(2);
console.log(4);
console.log(6);
console.log(8);
console.log(10);
console.log(12);
console.log(14);
console.log(16);