import React from "react";
import { Counter } from "../components/counter/counter";

export const Counters = () => {
  return (
    <React.Fragment>
      <Counter />
      <Counter name="another fancy counter" />
    </React.Fragment>
  );
};
