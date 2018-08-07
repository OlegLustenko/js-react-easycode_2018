/*
*
* app.js
* contacts.js
* edit-user.js
* add-user.js
* keypad.js
* user-page.js
* link.js
* */

class ContactsPage {
  constructor(globalState) {
    this.globalState = globalState;
  }

  render() {
    return `<...>`;
  }
}

class KeypadPage {
  render() {
    return `<...>`;
  }
}

class EditUserPage {
  constructor(globalState) {
    this.globalState = globalState;
  }

  editUser(userIndex) {
    this.globalState.users[userIndex] = newUser;
  }

  render() {
    return `<...>`;
  }
}

class App {
  constructor() {
    this.state = {
      users: [
        {name: 'Fedor', email: 'fedor@ask.fm'},
      ],
      activePage: 'contacts',
    };
    this.pages = {
      contacts: new ContactsPage(this.state),
      editPage: new EditUserPage(this.state),
    };
    this.initializeRouter();
  }

  initializeRouter() {
    /*
    * 1) Если обновлять контент внутри тэга
    * 2)
    *
    * */
    mountNode.innerHTML = `
        <main>
         <div id="app"></div>
         <footer>
            <a>contacts</a>
            <a>edit</a>
            <a>keypad</a>
          </footer>
        </main>
    `;
    this.initializeRouterHandlers();
    this.appDOMNode = mountNode.getElementById('app');
  }

  renderNewPage() {
    this.appDOMNode.innerHTML = this.pages[activePage].render();
  }

  updateView() {
    this.pages[activePage].updateState(this.state);
  }

  render() {
    const {
      activePage,
    } = this.state;

    this.updateView();
    this.pages[activePage].render();
  }
}

const editPage = new EditUserPage();
editPage.render();