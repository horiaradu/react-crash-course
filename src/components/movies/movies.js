import React from "react";
import { Movie } from "../movie/movie";
import { getMovies } from "../../services/api";

export class Movies extends React.Component {
  state = { likes: 0, movies: [] };
  like = movie => {
    this.setState({ likes: this.state.likes + 1 });
  };

  componentDidMount() {
    getMovies().then(movies => this.setState({ ...this.state, movies }));
  }

  render() {
    return (
      <React.Fragment>
        <p>Total likes: {this.state.likes}</p>

        {this.state.movies.map(movie => (
          <Movie key={movie.id} movie={movie} onLike={this.like} />
        ))}
      </React.Fragment>
    );
  }
}
