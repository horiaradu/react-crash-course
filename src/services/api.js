import axios from "axios";

export const getMovies = () => {
  return axios
    .get(
      "https://api.themoviedb.org/3/discover/movie?api_key=1f334378cac29e0294a146e77d2aa505"
    )
    .then(response => response.data.results);
};
