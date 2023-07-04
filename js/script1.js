

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
for (let i = 0; i < 2; i++) {
	const a = prompt("One of the last movies you watched?", ""),
		b = prompt("How much would you rate him?", "");
	if (a != null && b != null && a != "" && b != "" && a.length < 50) {
		personalMovieDB.movies[a] = b;
		console.log("done");
	} else {
		console.log("error");
		i--;
	}
}

if (personalMovieDB.count < 10) {
	console.log("You have seen several movies");
} else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
	console.log("You are a classic viewer");
} else if (personalMovieDB.count >= 30) {
	console.log("You are a movie buff");
} else {
	console.log("Error");
}

console.log(personalMovieDB);
