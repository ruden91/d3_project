import React, { Component } from 'react';
import { map } from 'lodash';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: "4"
    }
  }
  handleChange = (e) => {
    this.setState({
      value: e.target.value
    })
  }

  handleSubmit = (e) => {
    e.preventDefault();
    console.log(this.state.value)
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
      <label>
      Pick Me:
      <select value={this.state.value} onChange={this.handleChange}>
        <option value="1">1</option>
        <option value="2">2</option>
        <option value="3">3</option>
        <option value="4">4</option>
      </select>
      </label>
      <input type="submit" value="Submit"/>
      </form>
    );
  }
}

export default App;
