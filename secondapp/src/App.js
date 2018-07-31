import React, { Component } from "react";
import logo from "./logo.svg";
import Contact from "./components/Contact";
import Header from "./components/Header";

import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header branding="Ding Dong" />
        <Contact name="Johnny Boy" phone="911 244 311" email="dboy@gmail.com" />
      </div>
    );
  }
}

export default App;
