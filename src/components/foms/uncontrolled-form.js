import React from "react";

export class UncontrolledForm extends React.Component {
  constructor(props) {
    super(props);
    this.input = React.createRef();
  }

  handleSubmit = event => {
    console.log("A name was submitted: " + this.input.current.value);
    event.preventDefault();
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          Name:
          <input type="text" ref={this.input} />
        </label>
        <input type="submit" value="Submit" />
      </form>
    );
  }
}
