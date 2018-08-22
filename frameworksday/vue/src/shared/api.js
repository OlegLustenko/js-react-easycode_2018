export const requestUsers = {
  getUsers() {
    const url = 'http://easycode-js.herokuapp.com/ollu';
    return fetch(url).then(response => response.json());
  }
};
