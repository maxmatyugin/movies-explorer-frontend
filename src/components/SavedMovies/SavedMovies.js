import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import MoviesCardList from "../MoviesCardList/MoviesCardList";
import SearchForm from "../SearchForm/SearchForm";
import "./SavedMovies.css";

function SavedMovies({
  onChange,
  isLoggedIn,
  movies,
  savedMovies,
  onDeleteMovie,
  searchValue,
  onSubmit,
  searchError,
  handleCheck,
  isShortMovie
}) {
  return (
    <>
      <Header isLoggedIn={isLoggedIn} />
      <SearchForm
        onChange={onChange}
        searchValue={searchValue}
        onSubmit={onSubmit}
        handleCheck={handleCheck}
      />
      <MoviesCardList
        isInSavedList={true}
        movies={movies}
        savedMovies={savedMovies}
        onDeleteMovie={onDeleteMovie}
        searchError={searchError}
        isShortMovie={isShortMovie}
      />
      <Footer />
    </>
  );
}

export default SavedMovies;
