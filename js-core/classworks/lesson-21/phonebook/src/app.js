class App {
  constructor() {
    // sessionStorage + localStorage
    // Когда мы не хотим идти за данными на сервер

    /*
      offline-first
      localStorage, sessionStorage ...
    */
    this.state = {
      db: {
        users: [],
        activeUsers: [],
        lastMessages: []
      },
      locals: {
        forms: {
          input: 'qweqwe'
        }
      }
    };

    this.ui = {
      index: new Contacts(this.state), // users
      keypad: new Keypad(this.state)
    };
  }

  router() {
    // события для перехода
  }

  render() {
    this.ui.index.render();
  }
}

const app = new App();
