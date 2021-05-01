import MoviesCard from "../MoviesCard/MoviesCard";
import "./MoviesCardList.css";



function MoviesCardList({movies, isInSavedList}) {
  return (
    <section className="movies">
      <ul className="movies__list">
        {movies && movies.map((data) => {
          return <MoviesCard isInSavedList={isInSavedList} key={data.id} movie={data} />;
        })}
      </ul>
    </section>
  );
}

export default MoviesCardList;
