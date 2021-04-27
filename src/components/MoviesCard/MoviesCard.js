import "./MoviesCard.css";

function MoviesCard({ movie, isInSavedList }) {
  const millisecondsToTime = (mil) => {
    const totalSeconds = Math.floor(mil / 1000);
    const totalMinutes = Math.floor(totalSeconds / 60);
    const totalHours = Math.floor(totalMinutes / 60);
    const minutes = totalMinutes % 60;
    const hours = totalHours % 24;
    return `${hours}ч ${minutes}м`;
  };

  const isSaved = false;
  const saveButtonClassName = `movie__save-button ${
    isSaved ? "movie__save-button_saved" : ""
  } ${isInSavedList ? "movie__save-button_in-list" : ""}`;

  return (
    <li className="movie">
      <h2 className="movie__title">{movie.title}</h2>
      <span className="movie__duration">
        {millisecondsToTime(movie.duration)}
      </span>
      <button className={saveButtonClassName}></button>

      <img
        className="movie__image"
        alt={`Картинка к ${movie.title}`}
        src={movie.image}
      ></img>
    </li>
  );
}

export default MoviesCard;
