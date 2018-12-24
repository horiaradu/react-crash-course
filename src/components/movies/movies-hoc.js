import { getMovies } from "../../services/api";
import { useState, useEffect } from "react";

export function useFilteredMovies(selector = () => true) {
  const [movies, setMovies] = useState([]);

  useEffect(() => getMovies().then(movies => setMovies(movies)), []);

  return movies.filter(selector);
}
