function MoviePoster({ name, year, poster }) {
  return (
    <div className="ml-5 mt-2 mr-10 mb-10 cursor-pointer w-20">
      <img
        src={`https://image.tmdb.org/t/p/original/${poster}`}
        alt="poster"
        className="w-[200px] h-[300px]"
      />
      <h1 className="text-white mt-2">{name}</h1>
      <p className="text-gray-400 mt-1">{year}</p>
    </div>
  );
}

export default MoviePoster;
