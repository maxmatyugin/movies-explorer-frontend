import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import MoviesCardList from "../MoviesCardList/MoviesCardList";
import SearchForm from "../SearchForm/SearchForm";
import "./SavedMovies.css";

function SavedMovies({ onChange, isLoggedIn }) {
  return (
    <>
      <Header isLoggedIn={isLoggedIn} />
      <SearchForm onChange={onChange} />
      <MoviesCardList isInSavedList={true} />
      <Footer />
    </>
  );
}

export default SavedMovies;
