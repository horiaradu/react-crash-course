import React from "react";
import { Movie } from "../movie/movie";

export class Movies extends React.Component {
  state = { likes: 0 };
  like = movie => {
    this.setState({ likes: this.state.likes + 1 });
  };

  render() {
    return (
      <React.Fragment>
        <p>Total likes: {this.state.likes}</p>

        {this.props.movies.map(movie => (
          <Movie key={movie.id} movie={movie} onLike={this.like} />
        ))}
      </React.Fragment>
    );
  }
}
