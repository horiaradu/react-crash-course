import React from "react";
import api from "../../services/api";

// This function takes a component...
// can have multiple components which display movies differently
export function filteredMovies(MoviesListComponent, selector = () => true) {
  // ...and returns another component...
  return class extends React.Component {
    constructor(props) {
      super(props);
      this.state = { movies: [] };
    }

    componentDidMount() {
      return api.getMovies().then(movies => {
        this.setState({ movies });
      });
    }

    render() {
      // ... and renders the wrapped component with the fresh data!
      // Notice that we pass through any additional props
      return (
        <div>
          <MoviesListComponent
            movies={this.state.movies.filter(selector)}
            {...this.props}
          />
        </div>
      );
    }
  };
}
