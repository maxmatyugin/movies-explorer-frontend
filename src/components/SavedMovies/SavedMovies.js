import MoviesCardList from "../MoviesCardList/MoviesCardList";
import SearchForm from "../SearchForm/SearchForm";
import "./SavedMovies.css";

function SavedMovies({onChange}) {
  return(
    <>
    <SearchForm onChange={onChange}/>
    <MoviesCardList  isInSavedList={true}/>
    </>
  )
}

export default SavedMovies;