import LoadMore from "../LoadMore/LoadMore";
import MoviesCardList from "../MoviesCardList/MoviesCardList";
import SearchForm from "../SearchForm/SearchForm";
import "./Movies.css";
import { movies } from "../../utils/constants";

function Movies() {
  return (
    <>
      <SearchForm />
      <MoviesCardList movies={movies} />
      <LoadMore />
    </>
  );
}

export default Movies;
