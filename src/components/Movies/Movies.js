import Footer from "../Footer/Footer";
import Header from "../Header/Header";
// import LoadMore from "../LoadMore/LoadMore";
import MoviesCardList from "../MoviesCardList/MoviesCardList";
import SearchForm from "../SearchForm/SearchForm";
import "./Movies.css";

function Movies({
  movies,
  onSubmit,
  onChange,
  searchValue,
  handleCheck,
  isLoggedIn,
  isLoading,
  searchError,
  onSaveMovie,
  isShortMovie
}) {
  
  return (
    <>
      <Header isLoggedIn={isLoggedIn} />
      <SearchForm
        onSubmit={onSubmit}
        onChange={onChange}
        searchValue={searchValue}
        handleCheck={handleCheck}
      />
      <MoviesCardList
        movies={movies}
        isLoading={isLoading}
        searchError={searchError}
        onSaveMovie={onSaveMovie}
        isShortMovie={isShortMovie}
      />
      {/* <LoadMore /> */}
      <Footer />
    </>
  );
}

export default Movies;
