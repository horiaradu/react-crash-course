import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";

import { Movies } from "./components/movies/movies";
import { ContextConsumer } from "./components/context-consumer/context-consumer";
import { filteredMovies } from "./components/movies/movies-hoc";
import { HideShow, Paragraph } from "./components/compositions/children";
import { MouseTracker } from "./components/compositions/cat-and-mouse";
import { Router, Switch, Route } from "react-router-dom";
import { Counters } from "./containers/counters";
import { Forms } from "./containers/forms";
import { BootstrapShowcase } from "./containers/bootstrap-showcase";

import { RequireAuth } from "./components/require-auth";

import history from "./history";

import "./App.scss";

const defaultValue = "light";
export const MyContext = React.createContext(defaultValue);

const AllMovies = filteredMovies(Movies);
const TopMovies = filteredMovies(Movies, m => m.vote_average > 7.5);

const requireAuth = componentName => props => (
  <RequireAuth>{React.createElement(componentName, { ...props })} </RequireAuth>
);

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

        <Router history={history}>
          <Switch>
            <Route path="/counters" exact component={Counters} />
            <Route path="/movies" exact component={AllMovies} />
            <Route path="/top-movies" exact component={TopMovies} />
            <Route path="/forms" exact render={requireAuth(Forms)} />
            <Route path="/bootstrap" exact component={BootstrapShowcase} />
          </Switch>
        </Router>

        {/* <MyContext.Provider value="something">
          <ContextConsumer />
        </MyContext.Provider> */}

        {/* <HideShow show={true} color="red">
          <Paragraph>first paragraph</Paragraph>
          <Paragraph>second paragraph</Paragraph>
        </HideShow> */}

        {/* <MouseTracker /> */}
      </div>
    );
  }
}

export default App;
