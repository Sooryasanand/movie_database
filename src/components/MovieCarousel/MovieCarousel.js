import React, { useState } from "react";
import MoviePoster from "../MoviePoster/MoviePoster";
import axios from "axios";

function MovieCarousel({ url }) {
  const [movieData, setMovieData] = useState();

  const options = {
    method: "GET",
    url: url,
    headers: {
      accept: "application/json",
      Authorization: `Bearer {APIKEY}`,
    },
  };

  axios
    .request(options)
    .then(function (response) {
      console.log(response.data.results);
      setMovieData(response.data.results);
    })
    .catch(function (error) {
      console.error(error);
    });

  return (
    <div className="md:ml-[100px] md:justify-start justify-center md:mt-0 mt-5">
      <div className="grid grid-flow-col overflow-x-scroll ">
        {movieData?.map((item) => (
          <MoviePoster
            key={item}
            name={item.title}
            year={item.release_date}
            poster={item.poster_path}
          />
        ))}
      </div>
    </div>
  );
}

export default MovieCarousel;
