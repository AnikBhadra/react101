import React, { Component } from "react";
import "./App.css";
import ComponentC from "../Components/ComponentC"
import { UserProvider } from "../Components/userContext"
class App extends Component {
  render() {
    return (
      <>
        <UserProvider value="Anik">
          <ComponentC />
        </UserProvider>

      </>

    )
  }

}

export default App;
