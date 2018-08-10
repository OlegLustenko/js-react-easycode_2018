const usersId = [1, 2, 3];
const url = 'https://jsonplaceholder.typicode.com/users/';
const urlEasy =
  'https://easycode-js.herokuapp.com/xxx/users';
// GET запрос по умолчанию
const myUser = {
  fullName: '___________',
  email: 'qwerty@www.ua'
};
fetch(urlEasy, {
  method: 'POST',
  headers: {
    'Content-type': 'application/json'
  },
  body: JSON.stringify(myUser)
})
  .then(data => data.json())
  .then(data => console.log(data))
  .catch(e => {
    console.error(e);
  });

usersId.map(userId => {
  fetch(url + userId).then(data => data.json()); // PROMISE
});

const user1 = fetch(url + 1).then(data => data.json());
const user2 = fetch(url + 2).then(data => data.json());
const user3 = fetch(url + 3).then(data => data.json());

// Современный JavaScript
const users = Promise.all([
  user1,
  user2,
  user3
]).then(usersReady => {
  console.log(usersReady);
});

// users.map(userPromise => {
//   userPromise.then(user => {
//     console.log(user);
//   });
// });
