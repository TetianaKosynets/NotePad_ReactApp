import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import Header from './components/header';
import Home from './components/home';
import Add from './components/add';

class App extends Component {
  render() {
    return (
        <div>
            <Header />
            <Route path="/" exact component={Home} />
            <Route path="/add" component={Add} />
      </div>
    );
  }
}

export default App;
