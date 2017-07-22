import React, { Component } from 'react';

class FormattedDate extends Component {
  render() {
    return (
      <div>
        <h2>{this.props.date}</h2>
      </div>
    )
  }
}

export default FormattedDate;
