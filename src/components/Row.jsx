import axios from "axios";
import React, { useEffect, useRef, useState } from "react";
import MovieItem from "./MovieItem";
import { BiChevronLeft, BiChevronRight } from "react-icons/bi";

const Row = ({ title, fetchURL }) => {
  const [movies, setMovies] = useState([]);
  const [showArrows, setShowArrows] = useState(false);
  const sliderRef = useRef(null);

  // Scroll Left Function
  const scrollLeft = () => {
    if (sliderRef.current) {
      sliderRef.current.scrollBy({
        left: -sliderRef.current.offsetWidth,
        behavior: "smooth",
      });
    }
  };

  // Scroll Right Function
  const scrollRight = () => {
    if (sliderRef.current) {
      sliderRef.current.scrollBy({
        left: sliderRef.current.offsetWidth,
        behavior: "smooth",
      });
    }
  };

  // Fetch movies from API
  useEffect(() => {
    axios.get(fetchURL).then((res) => setMovies(res.data.results));
  }, [fetchURL]);

  return (
    <div>
      <h1 className="text-white font-bold md:text-xl p-4">{title}</h1>
      <div
        onMouseEnter={() => setShowArrows(true)}
        onMouseLeave={() => setShowArrows(false)}
      >
        <div className="relative">
          {/* Slider container */}
          <div
            id={`slider`}
            ref={sliderRef}
            className="flex items-center w-full h-full group overflow-x-scroll whitespace-nowrap scroll-smooth scrollbar-hide"
          >
            {movies.map((movie) => (
              <MovieItem key={movie.id} movie={movie} />
            ))}
          </div>

          {/* Arrows */}
          {showArrows && (
            <>
              <button
                className="absolute top-1/2 -translate-y-1/2 left-2 flex items-center justify-center w-8 h-8 rounded-full bg-black bg-opacity-50 hover:bg-opacity-75 text-white z-10"
                onClick={scrollLeft}
              >
                <BiChevronLeft size={24} />
              </button>
              <button
                className="absolute top-1/2 -translate-y-1/2 right-2 flex items-center justify-center w-8 h-8 rounded-full bg-black bg-opacity-50 hover:bg-opacity-75 text-white z-10"
                onClick={scrollRight}
              >
                <BiChevronRight size={24} />
              </button>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default Row;
