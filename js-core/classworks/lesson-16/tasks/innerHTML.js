const javaScriptOneLove = ['Arrow', 'Замыкания', 'классы'];

/*
Сделайте список используя innerHTML

добавьте этот список ниже теста
<ul>
  <li>Arrow</li>
  <li>Замыкания</li>
  <li>Классы</li>
</ul>
*/
let createList = arr => {
  const liItems = arr.map(item =>
    `<li>${item}</li>`
  ).join('');

  return `
   <ul>
    ${liItems}
   </ul>
  `;
};
