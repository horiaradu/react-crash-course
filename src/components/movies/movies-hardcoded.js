import React from "react";
import { Movie } from "../movie/movie";
import api from "../../services/api";

export class MoviesHardcoded extends React.Component {
  state = { likes: 0, movies: [] };
  like = movie => {
    this.setState({ likes: this.state.likes + 1 });
  };

  componentDidMount() {
    return api.getMovies().then(movies => {
      this.setState({ movies });
    });
  }

  render() {
    return (
      <React.Fragment>
        <p>Total likes: {this.state.likes}</p>
        <p>Total movies: {this.state.movies.length}</p>

        {this.state.movies.map(movie => (
          <Movie key={movie.id} movie={movie} onLike={this.like} />
        ))}
      </React.Fragment>
    );
  }
}
