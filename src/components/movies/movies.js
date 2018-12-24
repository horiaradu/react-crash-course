import React from "react";
import { Movie } from "../movie/movie";
import { useState } from "react";

export const Movies = props => {
  const [likes, setLikes] = useState(0);
  const like = movie => setLikes(likes + 1);

  return (
    <React.Fragment>
      <p>Total likes: {likes}</p>

      {props.movies.map(movie => (
        <Movie key={movie.id} movie={movie} onLike={like} />
      ))}
    </React.Fragment>
  );
};
