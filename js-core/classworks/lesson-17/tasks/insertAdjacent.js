'use strict';

const div = document.getElementById('app');

div.insertAdjacentHTML('beforeend', '<h1>Hello</h1>');
div.insertAdjacentHTML('afterend', '<h1>После элемента div</h1>');

// element.insertAdjacentHTML()
// element.insertAdjacentElement()
// element.insertAdjacentText()

let ul = document.createElement('ul');
let li = document.createElement('li');
li.textContent = 'asd';
ul.appendChild(li);
let documentFragment = document.createDocumentFragment();
documentFragment.append(ul);


var phone = {
  row(user) {
    let { name, lastName, email } = user;
    return `
    <tr>
      <td>${name}</td>
      <td>${lastName}</td>
      <td>${email}</td>
    </tr>`
  }
};
