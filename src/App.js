import React, { Component } from 'react';
import ValidationComponent from './ValidationComponent/ValidationComponent';
import CharComponent from './CharComponent/CharComponent';
import './App.css';

class App extends Component {

  state = {
    input_string: '',
  };

  inputChangeHandler = (event) => {
    let input_string = event.target.value;
    this.setState({
      input_string: input_string
    });
  };

  deleteCharHandler = (index) => {
    const input_string = this.state.input_string.split('');
    input_string.splice(index, 1);
    const updated_input_string = input_string.join('');
    this.setState({
      input_string: updated_input_string
    });
  }

  render() {
    const charList = this.state.input_string.split('').map((char, index) => {
      return <CharComponent
        character={char}
        key={index}
        clicked={() => this.deleteCharHandler(index)} />
    });

    return (
      <div>
        <input
          type='text'
          onChange={this.inputChangeHandler}
          value={this.state.input_string} />
        <p>String length: {this.state.input_string.length}</p>
        <ValidationComponent inputLength={this.state.input_string.length} />
        {charList}
      </div>
    )
  }
}

export default App;
