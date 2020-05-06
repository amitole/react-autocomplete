import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import AutoCompleteText from "./components/AutoCompleteText";
import Countries from "./Countries";


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
