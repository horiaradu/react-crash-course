import React from "react";
import PropTypes from "prop-types";
import { useState } from "react";

export const Counter = props => {
  const [count, setCount] = useState(0);

  const increment = () => setCount(count + 1);

  return (
    <p>
      <button onClick={increment}>click</button>
      <br />
      <br />
      <span>
        Counter ({props.name}): {count}
      </span>
    </p>
  );
};

Counter.propTypes = {
  name: PropTypes.string
};

Counter.defaultProps = {
  name: "fancy counter"
};
