import React, { Component } from 'react';
import ValidationComponent from './ValidationComponent/ValidationComponent';
import './App.css';

class App extends Component {

  state = {
    input_string_length: 0,
  };

  inputChangeListener = (event) => {
    let input_string = event.target.value;
    this.setState({
      input_string_length: input_string.length
    });
  };

  render() {
    let validation_component = null;
    validation_component = (
      <div>
        {
          this.state.input_string_length > 5 ? <ValidationComponent message="Long"></ValidationComponent> : <ValidationComponent message="Short"></ValidationComponent>
        }
      </div>
    );
    return (
      <div>
        <input type="text" onChange={this.inputChangeListener}></input>
        <p>String length: {this.state.input_string_length}</p>
        {validation_component}
      </div>
    )
  }
}

export default App;
