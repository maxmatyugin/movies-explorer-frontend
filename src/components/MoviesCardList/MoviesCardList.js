import MoviesCard from "../MoviesCard/MoviesCard";
import Preloader from "../Preloader/Preloader";
import "./MoviesCardList.css";
import React from 'react';
import LoadMore from '../LoadMore/LoadMore';

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

const [items, setItems] = React.useState([]);
const [visible, setVisible] = React.useState(3);

React.useEffect(() => {
  setItems(movies)
  setVisible(3);
}, [movies]);

const showMoreItems = () => {
setVisible((prevValue) => prevValue + 3);
}

  return (
    <section className="movies">
      {isLoading && <Preloader />}
      {searchError !== "" && <span className="error">{searchError}</span>}
      {savedMovies?.length === 0 && (
        <span className="error">Вы ещё не сохранили ни одного фильма.</span>
      )}
      <ul className="movies__list">
        {movies &&
          (isShortMovie ? filterMoviesByDuration(items) : items).slice(0, visible).map((data) => {
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
      {movies && (items.length > visible && (<LoadMore onLoadMoreClick={showMoreItems} />))}
    </section>
  );
}

export default MoviesCardList;
