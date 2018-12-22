import React from "react";

export class HideShow extends React.Component {
  render() {
    return this.props.show ? this.props.children : <p>nothing!</p>;
  }
}

export class Paragraph extends React.Component {
  render() {
    return <p>{this.props.children}</p>;
  }
}
