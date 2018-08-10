// /*
// *
// * Сделать GET запрос на сервер и отобразить вернувшуюся информацию
// *
// * */
//
// const btn = document.querySelector('button');
// const btnAddUser = document.getElementById('add');
//
// const serverRequest = () => {
//   const xhr = new XMLHttpRequest(); // 0
//   xhr.onreadystatechange = () => {
//     if (xhr.readyState === XMLHttpRequest.DONE) {
//       console.log(xhr.responseText);
//       result.innerHTML = xhr.responseText;
//     }
//   };
//   /*
//    РЕЗУЛЬТАТ ЗАПРОСА ЗАПШИТЕ В тэг <pre> в HTML
//   */
//
//   xhr.open('GET', url, true); // 1
//   xhr.send();
// };
//
// btn.addEventListener('click', () => {
//   serverRequest();
// });
//
// const serverAddUser = user => {
//   const xhr = new XMLHttpRequest(); // 0
//   xhr.addEventListener('readystatechange', () => {
//     if (xhr.readyState === XMLHttpRequest.DONE) {
//       console.log(xhr.responseText);
//     }
//   });
//
//   xhr.open('POST', url, true); // 1
//   xhr.setRequestHeader('Content-Type', 'application/json');
//   xhr.send(JSON.stringify(user));
// };
//
// btnAddUser.addEventListener('click', () => {
//   serverAddUser();
// });
//
// const [myForm] = document.forms;
//
// myForm.addEventListener('submit', event => {
//   event.preventDefault();
//
//   const {email, fullName} = myForm.elements;
//
//   if (!email.value) {
//     alert('ЗАПОЛНИТЕ ПОЖАЛУЙСТА email');
//   }
//
//   if (!fullName.value) {
//     alert('ЗАПОЛНИТЕ ПОЖАЛУЙСТА fullName');
//   }
//
//   serverAddUser({
//     email: email.value,
//     fullName: fullName.value,
//     phone: '0999-123-13-123',
//   });
//   console.warn('PRIVET');
//
//   /*
//   *
//   * Давайте зарегистрируем этого человека в вашей базе данных
//   *
//   * */
// });
//
// /*
// *
// * Если fullName не заполнен отображаем в консоле
// * ЗАПОЛНИТЕ ПОЖАЛУЙСТА fullName
// *
// * Если email не заполнен отображаем в консоле
// * ЗАПОЛНИТЕ ПОЖАЛУЙСТА email
// *
// * */

// get-phone-users-api.js
const getPhoneUsersAPI = {
  getAllUser() {
    const url = 'http://easycode-js.herokuapp.com/ollu/users';
    return fetch(url).then(data => data.json());
  },
};

// router.js
class Router {
  constructor() {
  }
}

// app.js
class App {
  constructor() {
    this.state = {
      users: [],
      activePage: 'contacts',
    };

    this.pages = {
      contacts: new ContactsPage(this.state),
    };

    this.mountNode = document.getElementById('app');
  }

  showView() {
    const {activePage} = this.state;

    const currentPage = this.pages[activePage];

    this.mountNode.innerHTML = currentPage.render();
    currentPage.initializeEvents();
  }

  static initialize() {
    return new App().showView();
  }
}

// contacts.js
class ContactsPage {
  constructor(state) {
    this.globalState = state;
  }

  renderUsers() {
  }

  render() {
    return `<button id="request">Request @_@</button>`;
  }

  initializeEvents() {
    const requestButton = document.getElementById('request');

    requestButton.addEventListener('click', () => {
      getPhoneUsersAPI.getAllUser().then(users => {
        console.log(users);
      });

      console.log('privet kak dela');
      /*КАК СЮДА ВЕРНУТЬ ПОЛЬЗОВАТЕЛЕЙ? */
    });
  }
}

// App.initialize();

const url = `https://jsonplaceholder.typicode.com/users/`;
const getAllUser = (id, callback) => {
  const xhr = new XMLHttpRequest(); // 0

  xhr.onreadystatechange = () => {
    if (xhr.readyState === XMLHttpRequest.DONE) {
      const user = JSON.parse(xhr.responseText);
      callback(user);
    }
  };

  xhr.open('GET', url, true); // 1
  xhr.send();
};

const users = [1, 2, 3];

const usersPromise = users.map(user => {
  return fetch(url + user).then(response => response.json());
});

console.log(usersPromise);

Promise.all(usersPromise)
  .then(allUsers => {
    allUsers.forEach(user => {
      console.log(user.name);
    });
  })
  .catch(e => {
    console.log(e);
  });

const getUser = async () => {
  const data = await fetch(url + 1);
  const user = await data.json();

  console.log(user);
};

getUser().then(console.log);

const getUser2 = () => {
  return fetch(url + 1).then(data => data.json());
};

getUser2().then(users => {
  renderUser(users);
});
/* callback-hell */
// getAllUser(1, user1 => {
//   getAllUser(2, user2 => {
//     getAllUser(3, user3 => {
//       console.log(user1.id + user2.id + user3.id);
//       console.log(user1.name, user2.name, user3.name);
//     });
//   });
// });

// fetch(url + 1)
//   .then(response => {
//     return response.json();
//   })
//   .then(user1 => {
//
//   })
//   .then(userJson => console.log(userJson));

/* ПСЕВДО-КОД */
// getAllUser(2)
//   .then(user1 => {
//     return getAllUser(1);
//   })
//   .then(user2 => {
//   })
//   .then(user3 => {
//   });
//
// student('JS') // {name: 'Vasya', skills: []}
//   .acceptByHr('$300') // {name: 'Vasya', skills: []} -> 500$
//   .requestToLead('!!!'); // -> 'SUCCESS + 3mth of teaching'

// const myPromise = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     resolve({message: 'люблю тебя'});
//   }, 10000);
//
//   setTimeout(() => {
//     reject('обещать не значит...');
//   }, 50000);
// })
//   .then(husband => {
//     console.log(husband);
//     console.log(husband.message + ' и я тебя');
//
//     return {preparing: 'готовим свадьбу'};
//   })
//   .then(whatNext => {
//     console.log(whatNext);
//   })
//   .catch(error => {
//     console.error('not found', error);
//   });

const url2 = 'http://easycode-js.herokuapp.com/ollu/users';
fetch(url2)
  .then(data => data.json())
  .then(console.log);

const user = {
  fullName: 'NEW USER <3',
  email: 'valid@email.com',
};

// fetch(url2, {
//   method: 'POST',
//   headers: {
//     'Content-type': 'application/json'
//   },
//   body: JSON.stringify(user)
// });

const isAlreadyBeenHere = localStorage.getItem('user');

if (isAlreadyBeenHere) {
  alert('привет ' + isAlreadyBeenHere);
}

create.addEventListener('click', () => {
  localStorage.setItem('user', ':DADADADA');
});
