import React, { useState } from "react";
import { BiChevronLeft, BiChevronRight } from "react-icons/bi";

const MovieItem = ({ movie }) => {
  const [showArrows, setShowArrows] = useState(false);
  return (
    <div
      onMouseEnter={() => setShowArrows(true)}
      onMouseLeave={() => setShowArrows(false)}
      className="group"
    >
      <div className="relative w-[160px] sm:w-[200px] md:w-[240px] lg:w-[280px]  inline-block rounded-lg overflow-hidden cursor-pointer m-2 ">
        <img
          src={`https://image.tmdb.org/t/p/original/${movie?.backdrop_path}`}
          alt={movie.title}
          className="transition-transform duration-300 ease-in-out hover:scale-125"
        />
        <h1 className="text-white text-xs md:text-base  relative -mt-8 text-center">
          {movie.title}
        </h1>
        <h1 className=" text-white text-base relatve">{movie.duration}</h1>
      </div>
      {/* {showArrows && (
        <div>
          {" "}
          <button
            className="absolute top-1/2 -translate-y-1/2 left-5 md:left-10 flex items-center flex justify-center
        size-12 rounded-full bg-black bg-opacity-50 hover:bg-opacity-75 text-white z-10"
          >
            <BiChevronLeft size={24}></BiChevronLeft>
          </button>
          <button
            className="absolute top-1/2 -translate-y-1/2 right-5 md:right-10 flex items-center flex justify-center
        size-12 rounded-full bg-black bg-opacity-50 hover:bg-opacity-75 text-white z-10"
          >
            <BiChevronRight size={24}></BiChevronRight>
          </button>
        </div>
      )} */}
    </div>
  );
};

export default MovieItem;
