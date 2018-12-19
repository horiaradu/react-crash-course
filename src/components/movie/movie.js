import React from "react";
import "./movie.scss";

export class Movie extends React.Component {
  render() {
    const { movie } = this.props;
    return (
      <div className="movie">
        <p className="movie-title">{movie.title}</p>
        <p className="movie-overview">{movie.overview}</p>

        <button onClick={() => this.props.onLike(movie)}>like</button>
      </div>
    );
  }
}
