import MovieCard from "./MovieCard.jsx";
import React from "react";

function MovieList() {
  return (
    <section>
      <h2>הסרטים שלנו</h2>
      <MovieCard />
      <MovieCard />
    </section>
  );
}

export default MovieList;