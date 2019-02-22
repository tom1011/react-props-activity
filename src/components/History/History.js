import React, { Component } from 'react';

class History extends Component {
  render() {
    return (
      <div>
       <h2> History</h2>
       <p>{this.props.history}</p>
      </div>
    );
  }
}

export default History;
