import React from "react";
import ReactDOM from "react-dom";
import { Counter } from "./counter";

describe("Counter", () => {
  it("renders without crashing", () => {
    const div = document.createElement("div");
    ReactDOM.render(<Counter />, div);
    ReactDOM.unmountComponentAtNode(div);
  });

  it("has a default name", () => {
    const div = document.createElement("div");
    const counter = ReactDOM.render(<Counter />, div);

    expect(counter.props.name).toEqual("fancy counter");
  });

  it("reads the name from props", () => {
    const div = document.createElement("div");
    const counter = ReactDOM.render(<Counter name="my counter" />, div);

    expect(counter.props.name).toEqual("my counter");
  });

  it("has a default value of 0", () => {
    const div = document.createElement("div");
    const counter = ReactDOM.render(<Counter />, div);

    expect(counter.state.count).toEqual(0);
  });

  it("increments the value", () => {
    const div = document.createElement("div");
    const counter = ReactDOM.render(<Counter />, div);

    counter.increment();
    expect(counter.state.count).toEqual(1);
  });

  it("matches the snapshot", () => {
    const div = document.createElement("div");
    ReactDOM.render(<Counter />, div);
    expect(div).toMatchSnapshot();
  });
});
