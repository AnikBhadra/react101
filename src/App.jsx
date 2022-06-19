import React, { Component } from "react";
import "./App.css";
import HoverCounter from "../Components/HoverCounter";
import Click_Counter from "../Components/Click_Counter";

class App extends Component {
  render() {
    return (

      <div >
        <Click_Counter />
        <HoverCounter />
      </div>
    )
  }

}

export default App;
