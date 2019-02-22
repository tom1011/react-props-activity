import React, { Component } from 'react';
import Header from '../Header/Header';
import EnderNumber from '../EnterNumber/EnderNumber';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <EnderNumber />
      </div>
    );
  }
}

export default App;
