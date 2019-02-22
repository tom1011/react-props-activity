import React, { Component } from 'react';

class History extends Component {


  render() {
    return (
      <div>
       <h2> History</h2>
        <>
        {this.props.history.map(number => <li>{number}</li>)}
        </>
      </div>
    );
  }
}

export default History;
