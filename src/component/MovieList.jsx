import React from "react";
import MovieCard from "./MovieCard";

const MovieList = ({ movieData, title, rating }) => {
  console.log(movieData);
  return (
    <div style={{ display: "flex" }}>
      {movieData
        .filter(
          (movie) =>
            movie.title.toLowerCase().includes(title.toLowerCase().trim()) &&
            movie.rating === rating
        )
        .map((movie) => (
          <MovieCard movie={movie} key={movie.id} />
        ))}
    </div>
  );
};

export default MovieList;
