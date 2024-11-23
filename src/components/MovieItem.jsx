import React from "react";

const MovieItem = ({ movie }) => {
  return (
    <div>
      <div className="relative w-[160px] sm:w-[200px] md:w-[240px] lg:w-[280px] inline-block rounded-lg overflow-hidden cursor-pointer m-2 ">
        <img
          src={`https://image.tmdb.org/t/p/original/${movie?.backdrop_path}`}
          alt={movie.title}
          className="transition-transform duration-300 ease-in-out hover:scale-125"
        />
        <h1 className="text-white text-base relative -mt-8">{movie.title}</h1>
        <h1 className=" text-white text-base relatve">{movie.duration}</h1>
      </div>
    </div>
  );
};

export default MovieItem;
