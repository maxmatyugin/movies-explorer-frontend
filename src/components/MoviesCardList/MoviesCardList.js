import MoviesCard from "../MoviesCard/MoviesCard";
import "./MoviesCardList.css";



function MoviesCardList({movies}) {
  return (
    <section className="movies">
      <ul className="movies__list">
        {movies && movies.map((data) => {
          return <MoviesCard key={data._id} movie={data} />;
        })}
      </ul>
    </section>
  );
}

export default MoviesCardList;
