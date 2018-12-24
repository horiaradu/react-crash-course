import React from "react";
import { getMovies } from "../../services/api";
import { useState, useEffect } from "react";

// This function takes a component...
// can have multiple components which display movies differently
export function filteredMovies(MoviesListComponent, selector = () => true) {
  // ...and returns another component...
  return props => {
    const [movies, setMovies] = useState([]);

    useEffect(() => getMovies().then(movies => setMovies(movies)), []);

    return <MoviesListComponent movies={movies.filter(selector)} {...props} />;
  };
}
