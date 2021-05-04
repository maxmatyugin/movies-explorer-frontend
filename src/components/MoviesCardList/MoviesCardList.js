import MoviesCard from "../MoviesCard/MoviesCard";
import Preloader from "../Preloader/Preloader";
import "./MoviesCardList.css";

function MoviesCardList({
  movies,
  isInSavedList,
  isLoading,
  searchError,
  onSaveMovie,
  onDeleteMovie,
  savedMovies,
  isShortMovie
}) {

function filterMoviesByDuration(mov) {
  return mov.filter(m => m.duration <= 40);
}

// if(isShortMovie) {
//   if(movies) {
//     filterMoviesByDuration(movies);
//     console.log();
//   }  
//   if(savedMovies){
//     filterMoviesByDuration(savedMovies);
//   } 
// }



  return (
    <section className="movies">
      {isLoading && <Preloader />}
      {searchError !== "" && <span className="error">{searchError}</span>}
      {savedMovies?.length === 0 && (
        <span className="error">Вы ещё не сохранили ни одного фильма.</span>
      )}
      <ul className="movies__list">
        {movies &&
          (isShortMovie ? filterMoviesByDuration(movies) : movies).map((data) => {
            return (
              <MoviesCard
                isInSavedList={isInSavedList}
                key={data.id}
                movie={data}
                onSaveMovie={onSaveMovie}
              />
            );
          })}
        {savedMovies &&
          (isShortMovie ? filterMoviesByDuration(savedMovies) : savedMovies).map((data) => {
            return (
              <MoviesCard
                isInSavedList={isInSavedList}
                key={data._id}
                savedMovie={data}
                onDeleteMovie={onDeleteMovie}
              />
            );
          })}
      </ul>
    </section>
  );
}

export default MoviesCardList;
