/*
*
* Сделать GET запрос на сервер и отобразить вернувшуюся информацию
*
* */

const btn = document.querySelector('button');
const btnAddUser = document.getElementById('add');

const url = 'http://easycode-js.herokuapp.com/qwerty1234/users';
const serverRequest = () => {
  const xhr = new XMLHttpRequest(); // 0
  xhr.onreadystatechange = () => {
    if (xhr.readyState === XMLHttpRequest.DONE) {
      console.log(xhr.responseText);
      result.innerHTML = xhr.responseText;
    }
  };
  /*
   РЕЗУЛЬТАТ ЗАПРОСА ЗАПШИТЕ В тэг <pre> в HTML
  */

  xhr.open('GET', url, true); // 1
  xhr.send();
};

btn.addEventListener('click', () => {
  serverRequest();
});

const serverAddUser = user => {
  const xhr = new XMLHttpRequest(); // 0
  xhr.addEventListener('readystatechange', () => {
    if (xhr.readyState === XMLHttpRequest.DONE) {
      console.log(xhr.responseText);
    }
  });

  xhr.open('POST', url, true); // 1
  xhr.setRequestHeader('Content-Type', 'application/json');
  xhr.send(JSON.stringify(user));
};

btnAddUser.addEventListener('click', () => {
  serverAddUser();
});

const [myForm] = document.forms;

myForm.addEventListener('submit', event => {
  event.preventDefault();

  const {email, fullName} = myForm.elements;

  if (!email.value) {
    alert('ЗАПОЛНИТЕ ПОЖАЛУЙСТА email');
  }

  if (!fullName.value) {
    alert('ЗАПОЛНИТЕ ПОЖАЛУЙСТА fullName');
  }

  serverAddUser({
    email: email.value,
    fullName: fullName.value,
    phone: '0999-123-13-123'
  });
  console.warn('PRIVET');

  /*
  *
  * Давайте зарегистрируем этого человека в вашей базе данных
  *
  * */
});

/*
*
* Если fullName не заполнен отображаем в консоле
* ЗАПОЛНИТЕ ПОЖАЛУЙСТА fullName
*
* Если email не заполнен отображаем в консоле
* ЗАПОЛНИТЕ ПОЖАЛУЙСТА email
*
* */
