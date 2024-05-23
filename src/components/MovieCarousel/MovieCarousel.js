import React from "react";
import MoviePoster from "../MoviePoster/MoviePoster";

function MovieCarousel() {
  return (
    <div className="md:ml-[100px] flex md:justify-start justify-center md:mt-0 mt-5">
      <div className="flex md:flex-row flex-col">
        <MoviePoster />
        <MoviePoster />
        <MoviePoster />
        <MoviePoster />
      </div>
    </div>
  );
}

export default MovieCarousel;
