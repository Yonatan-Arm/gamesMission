import React, { useEffect } from "react";
import Preview from "./Preview";

export default function List({ movies }) {
  return (
    <div className="list">
      <h1>Best Movies </h1>
      <div className="movie-list">
      {movies.map((movie) =>(
        <Preview movie={movie} key={movie.id} />
      ))}
      </div>

    </div>
  );
}
