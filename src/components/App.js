import React, { Component } from 'react';
import { map } from 'lodash';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: "Please write an essay about your favorite DOM element."
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
      Name:
      <textarea value={this.state.value} onChange={this.handleChange}/>
      </label>
      <input type="submit" value="Submit"/>
      </form>
    );
  }
}

export default App;
