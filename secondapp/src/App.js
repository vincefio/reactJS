import React, { Component } from "react";
import logo from "./logo.svg";
import Contacts from "./components/Contacts";
import Header from "./components/Header";

import { Provider } from './context';

import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

class App extends Component {
  render() {
    return (
      <Provider>
        <div className="App">

          <Header branding="Ding Dong" />
          <div className="container">
            <Contacts />
          </div>
        </div>
      </Provider>
    );
  }
}

export default App;
