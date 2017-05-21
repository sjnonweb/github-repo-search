import React, { Component } from 'react';
import GitHub_Logo from '../../assets/GitHub_Logo.png';
import './App.css';


export default class Header extends Component {
  render() {
    return (
      <div className="container-fluid text-center">
        <div className="row App-header">
          <img src={GitHub_Logo} className="App-logo" alt="logo" />
          <h2>Welcome to GitHub-Search</h2>
        </div>
      </div>
    );
  }
}
