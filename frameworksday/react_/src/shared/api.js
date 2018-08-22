export const requestUsers = {
  getUsers() {
    const url = 'http://easycode-js.herokuapp.com/test';
    return fetch(url).then(response => response.json());
  }
};
