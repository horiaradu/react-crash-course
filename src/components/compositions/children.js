import React from "react";

export class HideShow extends React.Component {
  render() {
    const { children, ...rest } = this.props;

    const childrenWithProps = React.Children.map(children, child =>
      React.cloneElement(child, rest)
    );

    return this.props.show ? childrenWithProps : <p>nothing!</p>;
  }
}

export class Paragraph extends React.Component {
  render() {
    return (
      <p style={{ color: this.props.color || "black" }}>
        {this.props.children}
      </p>
    );
  }
}
