import React, { Component } from "react";
import "./App.css";
import ClickCounter from "../Components/ClickCounter";
import HoverCounter from "../Components/HoverCounter";

class App extends Component {
  render() {
    return (

      <div >
        <ClickCounter />
        <HoverCounter />
      </div>
    )
  }

}

export default App;
