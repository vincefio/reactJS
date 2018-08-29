import React, { Component } from 'react';
import './App.css';

import Header from './components/Header'
import Provider from './context'
import Contacts from './components/Contacts'
import AddContact from './components/AddContact'

class App extends Component {
  render() {
    return (
      <Provider>
        <div className="App">
          <Header />
          <Contacts />
          <AddContact />
        </div>
      </Provider>
    );
  }
}

export default App;
