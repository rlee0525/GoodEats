import React from 'react';

import Header from './modules/header';
import Home from './modules/home';

import './App.css';

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Home />
      </div>
    );
  }
}

export default App;