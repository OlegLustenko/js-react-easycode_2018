class Contacts {
  constructor(appState) {
    this.appState = appState;
    console.log(appState);
  }
  requestData() {
    api.requestUsers().then(users => {
      this.render(user);
    });
  }

  addUserToState() {
    this.appState.db.users.push(10);
  }
}
