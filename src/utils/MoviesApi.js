import {MOVIE_BASE_URL} from "../utils/constants"


export const HEADERS = {
  "Content-Type": "application/json",
};

const handleRes = (res) => res.ok ? res.json() : Promise.reject(`Ошибка: ${res.status}`);


export const getMovies = () => {
  return fetch(`${MOVIE_BASE_URL}`).then(handleRes);
};
