function NotFoundMovies(props) {

  const findResultClass = props.error ? "notfound-movies__text-error" : "notfound-movies__text";
  const text = props.error || props.message;

  return (
    <section className="notfound-movies">
      <h2 className={findResultClass}>{text}</h2>
    </section>
  );
}

export default NotFoundMovies;