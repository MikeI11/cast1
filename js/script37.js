
"use strict";

const personalMovieDB = {
	count: 0,
	movies: {},
	actors: {},
	genres: [],
	private: false,
	start: function() {
		personalMovieDB.count = +prompt("How many films did you watched?", "");
		while (personalMovieDB.count == "" || personalMovieDB.count == null || isNaN(personalMovieDB.count)) {
			personalMovieDB.count = +prompt("How many films did you watched?", "").trim();
		}
	},
	rememberMyFilms: function() {
		for (let i = 0; i < 1; i++) {
			const a = prompt("One of the last movies you watched?", "").trim(),
				b = prompt("How much would you rate him?", "").trim();
			if (a != null && b != null && a != "" && b != "" && a.length < 50) {
				personalMovieDB.movies[a] = b;
				console.log("done");
			} else {
				console.log("error");
				i--;
			}
		}
	},
	detectPersonalLevel: function() {
		if (personalMovieDB.count < 10) {
			console.log("You have seen several movies");
		} else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
			console.log("You are a classic viewer");
		} else if (personalMovieDB.count >= 30) {
			console.log("You are a movie buff");
		} else {
			console.log("Error");
		}
	},
	showMyDB: function(hidden) {
		if (!hidden) {
			console.log(personalMovieDB);
		}
	},
	toggleVisibleMyDB: function () {
		if (personalMovieDB.private) {
			personalMovieDB.private = false;
		} else {
			personalMovieDB.private = true;
		}
	},
	writeYourGenres: function() {
		for (let i = 1; i < 2; i++) {
			// let genre = prompt(`Your favorite genres number ${i}`);
            
			// if (genre === "" || genre == null) {
			// 	console.log("You have entered incorrect data");
			// 	i--;
			// } else {
			// 	personalMovieDB.genres[i - 1] = genre;
			// }
			let genres = prompt("Enter you favorite genres with a comma").toLowerCase();

			if (genres === "" || genres == null) {
				console.log("You have entered incorrect data");
				i--;
			} else {
				personalMovieDB.genres = genres.split(", ");
				personalMovieDB.genres.sort();
			}
		}
        
		personalMovieDB.genres.forEach((item, i) => {
			console.log(`Your favorite genre ${i + 1} - it is ${item}`);
		});
	}
};

