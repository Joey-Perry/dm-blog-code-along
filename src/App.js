import React, { Component } from "react";
import Nav from "./Components/Nav/Nav";
import Routes from './routes';
import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Nav />
        {Routes}
      </div>
    );
  }
}

export default App;
