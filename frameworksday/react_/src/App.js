import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';

import {ListEasyCode} from './components/list';
import {requestUsers} from './shared/api';

class App extends Component {
  constructor() {
    super();

    this.state = {
      users: ['qwe'],
    };
  }

  componentDidMount() {
    requestUsers.getUsers().then(response => {
      this.setState({
        users: response.users,
      });
    });
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo"/>
          <h1 className="App-title">Welcome to React EasyCode</h1>
        </header>
        <ListEasyCode users={this.state.users} />

      </div>
    );
  }
}

export default App;
