import MoviesCardList from "../MoviesCardList/MoviesCardList";
import SearchForm from "../SearchForm/SearchForm";
import {savedMovies} from '../../utils/constants';
import "./SavedMovies.css";

function SavedMovies() {
  return(
    <>
    <SearchForm />
    <MoviesCardList movies={savedMovies} isInSavedList={true}/>
    </>
  )
}

export default SavedMovies;