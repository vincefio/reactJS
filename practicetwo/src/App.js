import React, { Component } from 'react';

import './App.css';
import Header from './components/Header'
import Contacts from './components/contacts/Contacts'


class App extends Component {
  render() {
    return (
      <div className="App">
        <Header name="VinnyBoy Floyd" age="25" />
        <Contacts />
      </div>
    );
  }
}

export default App;
