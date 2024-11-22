import axios from "axios";
import React, { useEffect, useState } from "react";
import MovieItem from "./MovieItem";

const Row = ({ title, fetchURL }) => {
  console.log(title);
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    axios.get(fetchURL).then((res) => setMovies(res.data.results));
  }, [fetchURL]);
  console.log(movies);
  return (
    <div>
      <h1 className="text-white font-bold md:text-xl p-4">{title}</h1>
      <div className="">
        <div
          id={`slider`}
          className="relative flex items-center w-full h-full overflow-x-scroll whitespace-nowrap scroll-smooth scrollbar-hide"
        >
          {movies.map((movie) => (
            <MovieItem key={movie.id} movie={movie}></MovieItem>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Row;
