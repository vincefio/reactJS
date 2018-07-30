import React, { Component } from "react";

import "./App.css";

class App extends Component {
  render() {
    const name = "Larry Bird";

    return (
      <div className="App">
        <h1>app component</h1>
        <h4>Hello {name.toUpperCase()}</h4>
      </div>
    );
  }
}

export default App;
