const numberOfFilms = +prompt(`How many movies?`, "");

const personalMovieDB = {
  count: numberOfFilms,
  movies: {},
  actors: {},
  genres: [],
  privat: false,
};

const a = prompt("One of last movie", ""),
  b = prompt("Evaluate movie", ""),
  c = prompt("One of last movie", ""),
  d = prompt("Evaluate movie", "");

personalMovieDB.movies[a] = b;
personalMovieDB.movies[c] = d;
console.log(personalMovieDB);
