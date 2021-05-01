import "./MoviesCard.css";
import React from "react";
import {IMAGE_BASE_URL} from "../../utils/constants";

function MoviesCard({ movie, isInSavedList }) {
  const convertDuration = (min) => {
    const totalHours = Math.floor(min / 60);
    const minutes = min % 60;
    const hours = totalHours % 24;
    return `${hours}ч ${minutes}м`;
  };

  const [isSaved, setIsSaved] = React.useState(false);

  const handleSave = () => {
    isSaved ? setIsSaved(false) : setIsSaved(true);
  };

  

  const saveButtonClassName = `movie__save-button ${
    isSaved ? "movie__save-button_saved" : ""
  } ${isInSavedList ? "movie__save-button_in-list" : ""}`;

  return (
    <li className="movie">
      <h2 className="movie__title">{movie.nameRU}</h2>
      <span className="movie__duration">
        {convertDuration(movie.duration)}
      </span>
      <button className={saveButtonClassName} onClick={handleSave}></button>

      <img
        className="movie__image"
        alt={`Картинка к ${movie.nameRU}`}
        src={`${IMAGE_BASE_URL}${movie.image?.url}`}
      ></img>
    </li>
  );
}

export default MoviesCard;
