import React, { Component } from 'react';
import './App.css';
import UserInput from './UserInput/UserInput';
import UserOutput from './UserOutput/UserOutput';

class App extends Component {
  state = {
    userNames: [
      { userName: 'user 1' },
      { userName: 'user 2' },
      { userName: 'user 3' },
    ]
  }
  render () {
    return (
      <div className="App">
        <h1>Lets' start mate!</h1>
        <UserInput />
        <UserOutput userName={this.state.userNames[0].userName}/>
        <UserOutput userName={this.state.userNames[1].userName}/>
        <UserOutput userName={this.state.userNames[2].userName}/>
      </div>
    );
  }
}

export default App;
