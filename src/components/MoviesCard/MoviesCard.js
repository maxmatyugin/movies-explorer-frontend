import "./MoviesCard.css";

function MoviesCard({ movie }) {
  return (
    <li className="movie">
      <div className="movie__caption">
        <h2 className="movie__title">{movie.title}</h2>
        <span className="movie__duration">{movie.duration}</span>
        <button className="movie__save-button"></button>
      </div>
      <div className="movie__image-container">
        <img
          className="movie__image"
          alt={`Картинка к ${movie.title}`}
          src={movie.image}
        ></img>
      </div>
    </li>
  );
}

export default MoviesCard;
