/*

Добавьте на страницу список который будет 
содержать 3 любимые вещи в JavaScript

let JSThings = ['DOM', "Замыкания"]



Создайте строку которая будет содержать:
<ul>
  <li>DOM</li>
  <li>Замыкания</li>
</ul>
*/
let JSThings = ['DOM', "Замыкания"];

function createList() {
  // 0. Создать пустую строку
  var emptyString = '<ul>';
  // 1. Вначале цикла добавить к пустой строке тэг <ul>
  // 2. Перебирать каждый элемент массива в цикле
  JSThings.forEach(value => {
      emptyString += `<li>${value}</li>`;
    })
    // 3. Добавить каждому элементу вначале <li> потом значение и в конце </li>
    // 4. Добавить данный элемент к пустой строке
    // 5. В конце цикла закрыть тэг </ul> у "пустой" строки
  emptyString += '</ul>';
  // 6. Добавить в list наш новый список
  const myList = document.getElementById('list');
  myList.innerHTML += emptyString;
}

// 1. Получить кнопку из DOM
let button = document.querySelector('button');
let button2 = button.nextElementSibling;
// 2. Добавить кнопке в свойство onclick вызов функции createList
button.onclick = () => {
  createList()
};
button2.onclick = () => {

  let checkedInputs = document.querySelectorAll('input:checked');
  console.log(checkedInputs);

}

// 1) DRY
// DO not reapeat yourself;
// 2) Вы должны учесть все возможные варианты в функционале
// 3) Если вы получаете значение по индексу - это дурной тон