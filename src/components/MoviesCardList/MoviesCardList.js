import MoviesCard from "../MoviesCard/MoviesCard";
import Preloader from "../Preloader/Preloader";
import "./MoviesCardList.css";
import React from "react";
import LoadMore from "../LoadMore/LoadMore";
import {
  SHORT_MOVIE_DURATION,
  DISPLAYED_NUMBER_OF_MOVIES_THREE_IN_ROW,
  DISPLAYED_NUMBER_OF_MOVIES_TWO_IN_ROW,
  DISPLAYED_NUMBER_OF_MOVIES_ONE_IN_ROW,
  LOAD_MORE_MOVIES_DESKTOP,
  LOAD_MORE_MOVIES_MOBILE,
} from "../../utils/constants";

function MoviesCardList({
  movies,
  isInSavedList,
  isLoading,
  searchError,
  onSaveMovie,
  onDeleteMovie,
  savedMovies,
  isShortMovie,
}) {
  function filterMoviesByDuration(mov) {
    return mov.filter((m) => m.duration <= SHORT_MOVIE_DURATION);
  }

  const [items, setItems] = React.useState([]);
  const [visible, setVisible] = React.useState(
    DISPLAYED_NUMBER_OF_MOVIES_THREE_IN_ROW
  );
  const [loadMore, setLoadMore] = React.useState(LOAD_MORE_MOVIES_DESKTOP);

  const [dimensions, setDimensions] = React.useState({
    height: window.innerHeight,
    width: window.innerWidth,
  });

  function debounce(fn, ms) {
    let timer;
    return (_) => {
      clearTimeout(timer);
      timer = setTimeout((_) => {
        timer = null;
        fn.apply(this, arguments);
      }, ms);
    };
  }

  React.useEffect(() => {
    const debouncedHandleResize = debounce(function handleResize() {
      setDimensions({
        height: window.innerHeight,
        width: window.innerWidth,
      });
    }, 1000);

    window.addEventListener("resize", debouncedHandleResize);

    return (_) => {
      window.removeEventListener("resize", debouncedHandleResize);
    };
  });

  React.useEffect(() => {
    movies && setItems(movies);
    if (dimensions.width > 1007) {
      setVisible(DISPLAYED_NUMBER_OF_MOVIES_THREE_IN_ROW);
      setLoadMore(LOAD_MORE_MOVIES_DESKTOP);
    }
    if (dimensions.width <= 1007 && dimensions.width > 683) {
      setVisible(DISPLAYED_NUMBER_OF_MOVIES_TWO_IN_ROW);
      setLoadMore(LOAD_MORE_MOVIES_MOBILE);
    }
    if (dimensions.width <= 683) {
      setVisible(DISPLAYED_NUMBER_OF_MOVIES_ONE_IN_ROW);
      setLoadMore(LOAD_MORE_MOVIES_MOBILE);
    }
  }, [movies, dimensions.width]);

  const showMoreItems = () => {
    setVisible((prevValue) => prevValue + loadMore);
  };

  return (
    <section className="movies">
      {isLoading && <Preloader />}
      {searchError !== "" && <span className="error">{searchError}</span>}
      {savedMovies?.length === 0 && (
        <span className="error">Вы ещё не сохранили ни одного фильма.</span>
      )}
      <ul className="movies__list">
        {movies &&
          (isShortMovie ? filterMoviesByDuration(items) : items)
            .slice(0, visible)
            .map((data) => {
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
          (isShortMovie
            ? filterMoviesByDuration(savedMovies)
            : savedMovies
          ).map((data) => {
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
      {movies && items.length > visible && (
        <LoadMore onLoadMoreClick={showMoreItems} />
      )}
    </section>
  );
}

export default MoviesCardList;
