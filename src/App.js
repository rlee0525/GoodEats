import React from 'react';
import { Route } from 'react-router-dom';

import Header from './modules/header';
import Search from './modules/search';
import Result from './modules/result';

import './App.css';

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Route exact path="/" component={Search} />
        <Route path="/result" component={Result} />
      </div>
    );
  }
}

export default App;