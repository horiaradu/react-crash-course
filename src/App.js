import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";

import { Movies } from "./components/movies/movies";
import { ContextConsumer } from "./components/context-consumer/context-consumer";
import { filteredMovies } from "./components/movies/movies-hoc";
import { HideShow, Paragraph } from "./components/compositions/children";
import { MouseTracker } from "./components/compositions/cat-and-mouse";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { Counters } from "./containers/counters";
import { Forms } from "./containers/forms";

const defaultValue = "light";
export const MyContext = React.createContext(defaultValue);

const AllMovies = filteredMovies(Movies);
const TopMovies = filteredMovies(Movies, m => m.vote_average > 7.5);

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

        <BrowserRouter>
          <Switch>
            <Route path="/counters" exact component={Counters} />
            <Route path="/movies" exact component={AllMovies} />
            <Route path="/top-movies" exact component={TopMovies} />
            <Route path="/forms" exact component={Forms} />
          </Switch>
        </BrowserRouter>

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
