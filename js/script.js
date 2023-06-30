
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



// if (num < 49) {
// 	console.log("Error");
// } else if (num > 100) {
// 	console.log("Too much");
// } else {
// 	console.log("Ok!");
// }
// (num == 50) ? console.log("Ok") : console.log("Error");

const num = 51;
switch (num) {
case 49:
	console.log("Wrong");
	break;
case 100:
	console.log("Wrong");
	break;
case 50:
	console.log("Write");
	break;
default:
	console.log("Not this time");
	break;
}