import React, { Component } from 'react';
import GitHub_Logo from '../../assets/GitHub_Logo.png';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={GitHub_Logo} className="App-logo" alt="logo" />
          <h2>Welcome to GitHub-Search</h2>
        </div>
      </div>
    );
  }
}

export default App;
