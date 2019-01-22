import axios from "axios";

const api = {
  getMovies: async () => {
    const response = await axios.get(
      "https://api.themoviedb.org/3/discover/movie?api_key=1f334378cac29e0294a146e77d2aa505"
    );
    return response.data.results;
  }
};

export default api;
