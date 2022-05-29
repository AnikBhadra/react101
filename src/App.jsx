import React, { Component } from "react";

export class ControlledComponents extends Component {
  constructor(props) {
    super(props);

    this.state = {
      username: "",
      suggestions: "",
    };
  }

  handleChange = (event) => {
    this.setState({
      username: event.target.value,
    });
  };

  handleSuggestions = (event) => {
    this.setState({
      suggestions: event.target.value,
    });
  };

  render() {
    return (
      <div>
        <div>
          <label>Username</label>
          <input
            type="text"
            value={this.state.username}
            onChange={this.handleChange}
          />
        </div>

        <div>
          <label>Suggestions</label>
          <textarea
            value={this.state.suggestions}
            onChange={this.handleSuggestions}
          ></textarea>
        </div>
      </div>
    );
  }
}

export default ControlledComponents;