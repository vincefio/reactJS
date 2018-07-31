import React, { Component } from "react";
import logo from "./logo.svg";
import Contacts from "./components/Contacts";
import Header from "./components/Header";

import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="container">
          <Header branding="Ding Dong" />
          <Contacts />
        </div>
      </div>
    );
  }
}

export default App;
