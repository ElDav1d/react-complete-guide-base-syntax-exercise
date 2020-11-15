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
  };

  userNameChangedHandler = (userIndex, event) => {
    this.setState(prevState => {
      let userNames = { ...prevState.userNames };
      userNames[userIndex].userName = event.target.value;
      return { userNames };
    });
  };

  render () {
    return (
      <div className="App">
        <h1>Lets' start mate!</h1>
        <UserOutput 
          userName={this.state.userNames[0].userName}>
          <UserInput
            changed={this.userNameChangedHandler.bind(this, 0)}
            name= {this.state.userNames[0].userName}
          />
        </UserOutput>
        <UserOutput 
          userName={this.state.userNames[1].userName}>
          <UserInput
            changed={this.userNameChangedHandler.bind(this, 1)}
            name= {this.state.userNames[1].userName}
          />
        </UserOutput>
        <UserOutput 
          userName={this.state.userNames[2].userName}>
          <UserInput
            changed={this.userNameChangedHandler.bind(this, 2)}
            name= {this.state.userNames[2].userName}
          />
        </UserOutput>
      </div>
    );
  };
}

export default App;
