import React from "react";
import { Movie } from "../movie/movie";
import { getMovies } from "../../services/api";

export class Movies extends React.Component {
  state = { likes: 0 };
  like = movie => {
    this.setState({ likes: this.state.likes + 1 });
  };

  render() {
    const movies = getMovies();
    return (
      <React.Fragment>
        <p>Total likes: {this.state.likes}</p>

        {movies.map(movie => (
          <Movie movie={movie} onLike={this.like} />
        ))}
      </React.Fragment>
    );
  }
}
