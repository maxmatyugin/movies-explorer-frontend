import "./PageNotFound.css";
import { Link } from "react-router-dom";

function PageNotFound() {
  return (
    <section className="not-found">
      <article className="not-found__article">
        <h2 className="not-found__title">404</h2>
        <p className="not-found__text">Страница не найдена</p>
      </article>
      <Link className="not-found__return-link" to="/">
        Назад
      </Link>
    </section>
  );
}

export default PageNotFound;
