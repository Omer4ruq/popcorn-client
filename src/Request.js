const key = `1e6cce1403f64c656f8ffe11e3c8a77c`;

const request = {
  populer: `https://api.themoviedb.org/3/movie/popular?api_key=${key}`,
  topRated: `https://api.themoviedb.org/3/movie/top_rated?api_key=${key}`,
  upComing: `https://api.themoviedb.org/3/movie/upcoming?api_key=${key}`,
  // horror: `https://api.themoviedb.org/3/movie/horror?api_key=${key}`,
};

export default request;
