
"use strict";
alert("holo");
const numberOfFilms = +prompt("How many movies did you watched?", "");
const personalMovieDB = {
	count: numberOfFilms,
	movies: {},
	actors: {},
	genres: [],
	private: false
};
const a = prompt("One of the last movies you watched?", ""),
	b = prompt("How much would you rate him?", ""),
	c = prompt("One of the last movies you watched?", ""),
	d = prompt("How much would you rate him?", "");

personalMovieDB.movies[a] = b;
personalMovieDB.movies[c] = d;
console.log(personalMovieDB);
console.log(personalMovieDB);


