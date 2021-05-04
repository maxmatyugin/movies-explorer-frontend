import "./MoviesCard.css";
import React from "react";
import { IMAGE_BASE_URL } from "../../utils/constants";

function MoviesCard({
  movie,
  savedMovie,
  isInSavedList,
  onSaveMovie,
  onDeleteMovie,
}) {
  const convertDuration = (min) => {
    const totalHours = Math.floor(min / 60);
    const minutes = min % 60;
    const hours = totalHours % 24;
    return `${hours}ч ${minutes}м`;
  };

  const [isLiked, setIsLiked] = React.useState(false);
  const savedMoviesInStore = JSON.parse(localStorage.getItem("savedMovies"));

  React.useEffect(() => {
    if (movie) {
      savedMoviesInStore?.some((i) => i.movieId === movie.id)
        ? setIsLiked(true)
        : setIsLiked(false);
    }
  }, [movie, savedMoviesInStore]);

  const handleLike = () => {
    onSaveMovie(movie, isLiked, setIsLiked, savedMovie);
  };

  const handleDelete = () => {
    onDeleteMovie(savedMovie);
  };

  const saveButtonClassName = `movie__save-button ${
    isLiked ? "movie__save-button_saved" : ""
  } ${isInSavedList ? "movie__save-button_in-list" : ""}`;

  return (
    <li className="movie">
      <h2 className="movie__title">
        {movie ? movie.nameRU : savedMovie.nameRU}
      </h2>
      <span className="movie__duration">
        {movie
          ? convertDuration(movie.duration)
          : convertDuration(savedMovie.duration)}
      </span>
      <button
        className={saveButtonClassName}
        onClick={movie ? handleLike : handleDelete}
      ></button>

      <img
        className="movie__image"
        alt={
          movie
            ? `Картинка к ${movie.nameRU}`
            : `Картинка к ${savedMovie.nameRU}`
        }
        src={
          movie ? `${IMAGE_BASE_URL}${movie.image?.url}` : `${savedMovie.image}`
        }
      ></img>
    </li>
  );
}

export default MoviesCard;
