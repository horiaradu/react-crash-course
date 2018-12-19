import React from "react";
import PropTypes from "prop-types";

export class Counter extends React.Component {
  state = { count: 0 };

  increment = () => {
    this.setState({ count: this.state.count + 1 });
  };

  render() {
    return (
      <p>
        <button onClick={this.increment}>click</button>
        <br />
        <br />
        <span>
          Counter ({this.props.name}): {this.state.count}
        </span>
      </p>
    );
  }
}

Counter.propTypes = {
  name: PropTypes.string
};

Counter.defaultProps = {
  name: "fancy counter"
};
