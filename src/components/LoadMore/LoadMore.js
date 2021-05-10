import "./LoadMore.css";

function LoadMore({onLoadMoreClick}) {
  return (
    <div className="load-more">
      <button className="load-more__button" onClick={onLoadMoreClick} >Ещё</button>
    </div>
  );
}

export default LoadMore;
