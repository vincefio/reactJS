import React, { Component } from 'react';
import './App.css';

import Header from './components/Header'
import Provider from './context'
import Contact from './components/Contact'

class App extends Component {
  render() {
    return (
      <Provider>
        <div className="App">
          <Header />
          <Contact />
        </div>
      </Provider>
    );
  }
}

export default App;
