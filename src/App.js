import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";

import { Counter } from "./components/counter/counter";
import { Movies } from "./components/movies/movies";
import { ContextConsumer } from "./components/context-consumer/context-consumer";

const defaultValue = "light";
export const MyContext = React.createContext(defaultValue);

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>

        {/* <Counter /> */}
        {/* <Counter name="another fancy counter" /> */}

        <MyContext.Provider value="something">
          <ContextConsumer />
        </MyContext.Provider>

        {/* <Movies /> */}
      </div>
    );
  }
}

export default App;
