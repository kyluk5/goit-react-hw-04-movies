import axios from "axios";

export const popularFilms = () => {
  return axios.get(
    `
https://api.themoviedb.org/3/trending/movie/day?api_key=${process.env.REACT_APP_KEY}`
  );
};

export const showAllInfo = (id) => {
  return axios.get(
    `https://api.themoviedb.org/3/movie/${id}?api_key=${process.env.REACT_APP_KEY}&language=en-US`
  );
};

export const viewCredits = (id) => {
  return axios.get(
    `https://api.themoviedb.org/3/movie/${id}/credits?api_key=a71ee21a323f0746cf52494ffbbd4ef9`
  );
};

export const getReview = (id) => {
  return axios.get(
    `https://api.themoviedb.org/3/movie/${id}/reviews?api_key=${process.env.REACT_APP_KEY}&language=en-US&page=1`
  );
};
