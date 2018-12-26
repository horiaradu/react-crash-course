import React from "react";

export class ControlledForm extends React.Component {
  state = { value: null };

  onChange = event => this.setState({ value: event.target.value });

  handleSubmit = event => {
    console.log("A name was submitted: " + this.state.value);
    event.preventDefault();
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          Name:
          <input type="text" onChange={this.onChange} />
        </label>
        <input type="submit" value="Submit" />
      </form>
    );
  }
}
