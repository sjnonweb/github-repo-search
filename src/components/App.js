import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import './App.css';

import Search from './Search'
import Header from './Header';
import Repo from './Repo';

export default class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Header />
          <div className="container marginTop">
            <Switch>
              <Route exact path="/" component={Search} />
              <Route path="/:id" component={Repo} />
            </Switch>
          </div>
        </div>
      </Router>
    );
  }
}
