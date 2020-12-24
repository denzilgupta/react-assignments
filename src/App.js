import React, { Component } from 'react';
import UserInput from './UserInput/UserInput';
import UserOutput from './UserOutput/UserOutput';
import './App.css';

class App extends Component {
  state = {
    usernames: [
      { name: "Sam" },
      { name: "Rick" },
      { name: "Morty" }
    ]
  };

  nameChangeHandler = (event) => {
    this.setState({
      usernames: [
        { name: event.target.value },
        { name: "Rick" },
        { name: "Morty" }
      ]
    });
  };

  render() {
    return (
      <div className="App" >
        <UserInput
          change={this.nameChangeHandler}
          currentName={this.state.usernames[0].name}
        ></UserInput>
        <UserOutput
          name={this.state.usernames[0].name}
        />
        <UserOutput
          name={this.state.usernames[1].name}
        />
        <UserOutput
          name={this.state.usernames[2].name}
        />
      </div>
    );
  }
}

export default App;
