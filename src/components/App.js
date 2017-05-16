import React, { Component } from 'react';
import './App.css';

import Search from './Search'
import Header from './Header';

export default class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <Search />
      </div>
    );
  }
}

//export default App;
