import React, { Component } from 'react';
import './App.css';

import Header from './components/Header'
import Provider from './context'
import Contacts from './components/Contacts'

class App extends Component {
  render() {
    return (
      <Provider>
        <div className="App">
          <Header />
          <Contacts />
        </div>
      </Provider>
    );
  }
}

export default App;
