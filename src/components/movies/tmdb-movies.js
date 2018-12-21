import React from "react";
import { getMovies } from "../../services/api";

// This function takes a component...
// can have multiple components which display movies differently
export function filteredMovies(MoviesListComponent) {
  // ...and returns another component...
  return class extends React.Component {
    constructor(props) {
      super(props);
      this.state = { movies: [] };
    }

    componentDidMount() {
      getMovies().then(movies => this.setState({ movies }));
    }

    render() {
      // ... and renders the wrapped component with the fresh data!
      // Notice that we pass through any additional props
      return <MoviesListComponent movies={this.state.movies} {...this.props} />;
    }
  };
}
