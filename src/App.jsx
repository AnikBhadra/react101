import React, { Component } from "react";
import "./App.css";
import ClickCounterTwo from "../Components/ClickCounterTwo";
import HoverCounterTwo from "../Components/HoverCounterTwo";

class App extends Component {
  render() {
    return (

      <div >
        <ClickCounterTwo />
        <HoverCounterTwo />
      </div>
    )
  }

}

export default App;
