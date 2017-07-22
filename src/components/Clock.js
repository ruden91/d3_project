import React, { Component } from 'react';
import FormattedDate from './FormattedDate';

class Clock extends Component {
  constructor(props) {
    super(props);
    this.state = {
      date: new Date()
    }
  }

  // lifecycle hooks
  componentDidMount() {
    this.timerID = setInterval(
      () => this.tick(),
      1000
    )
  }
  componentWillUnmount() {
    clearInterval(this.timerID);
  }
  render() {
    return (
      <div>
        <h1>current Time</h1>
        <FormattedDate date={this.state.date.toLocaleTimeString()}/>
      </div>
    )
  }

  tick() {
    this.setState({
      date: new Date()
    })
  }
}

export default Clock;
