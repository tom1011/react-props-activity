import React, { Component } from 'react';

class Header extends Component {
  render() {
    return (
      <>
        <header className="App-header">
        <h1>React Components</h1>
        <p> Enter a number and click up or down. The total will increase or decrease by that amount.</p>
        </header>
      </>
    );
  }
}

export default Header;