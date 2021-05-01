import LoadMore from "../LoadMore/LoadMore";
import MoviesCardList from "../MoviesCardList/MoviesCardList";
import SearchForm from "../SearchForm/SearchForm";
import "./Movies.css";

function Movies({movies, onSubmit, onChange, searchValue, handleCheck}) {
  return (
    <>
      <SearchForm onSubmit={onSubmit}  onChange={onChange} searchValue={searchValue} handleCheck={handleCheck}/>
      <MoviesCardList movies={movies} />
      <LoadMore />
    </>
  );
}

export default Movies;
