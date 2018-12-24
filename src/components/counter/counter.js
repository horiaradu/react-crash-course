import React from "react";
import PropTypes from "prop-types";
import { useState, useEffect } from "react";

export const Counter = props => {
  const [count, setCount] = useState(0);

  const increment = () => setCount(count + 1);

  const [title, setTitle] = useState(`Counter (${props.name}): ${count}`);
  useEffect(() => setTitle(`Counter (${props.name}): ${count}`), [count]);

  return (
    <p>
      <button onClick={increment}>click</button>
      <br />
      <br />
      <span>{title}</span>
    </p>
  );
};

Counter.propTypes = {
  name: PropTypes.string
};

Counter.defaultProps = {
  name: "fancy counter"
};
