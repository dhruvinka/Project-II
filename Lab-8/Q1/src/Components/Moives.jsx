function Movies() {
  const movies = ["A", "B", "C", "D", "E"];

  return (
    <ol>
      {movies.map((m, i) => <li key={i}>{m}</li>)}
    </ol>
  );
}

export default Movies;
