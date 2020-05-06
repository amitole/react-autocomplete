import React, { Component } from "react";
import "./App.css";
import AutoCompleteText from "./components/AutoCompleteText";

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1 className="App-header">Country Search</h1>
        <div className="Container">
          <AutoCompleteText />
        </div>
      </div>
    );
  }
}

export default App;
