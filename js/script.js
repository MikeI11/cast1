
"use strict";
// alert("holo");
// const numberOfFilms = +prompt("How many movies did you watched?", "");
// const personalMovieDB = {
// 	count: numberOfFilms,
// 	movies: {},
// 	actors: {},
// 	genres: [],
// 	private: false
// };
// const a = prompt("One of the last movies you watched?", ""),
// 	b = prompt("How much would you rate him?", ""),
// 	c = prompt("One of the last movies you watched?", ""),
// 	d = prompt("How much would you rate him?", "");

// personalMovieDB.movies[a] = b;
// personalMovieDB.movies[c] = d;
// console.log(personalMovieDB);
// console.log(personalMovieDB);



// if (num < 49) {
// 	console.log("Error");
// } else if (num > 100) {
// 	console.log("Too much");
// } else {
// 	console.log("Ok!");
// }
// (num == 50) ? console.log("Ok") : console.log("Error");

// const num = 51;
// switch (num) {
// case 49:
// 	console.log("Wrong");
// 	break;
// case 100:
// 	console.log("Wrong");
// 	break;
// case 50:
// 	console.log("Write");
// 	break;
// default:
// 	console.log("Not this time");
// 	break;
// }

// const hamburger = true;
// const fries = true;

// if (hamburger && fries) {
// 	console.log("I ate my fill");
// }
// console.log((hamburger && fries));
// const hamburger = 3;
// const fries = 1;
// const cola = 0;

// console.log(hamburger === 3 && cola && fries);
// console.log(1 && 0);
// console.log(1 && 5);

// if (hamburger === 3 && cola === 1 && fries) {
// 	console.log("All filling by food");
// } else {
// 	console.log("We are leaving");
//}

// const hamburger = 3;
// const fries = 3;
// const cola = 0;
// const nuggets = 2;


// if (hamburger === 3 && cola === 2 || fries === 3 && nuggets ) {
// 	console.log("All are happy");
// } else {
// 	console.log("We are leaving");
// }
// console.log(hamburger === 3 && cola === 2);
// let johnReport, alexReport, samReport, mariaReport = "done";
// console.log(johnReport || alexReport || samReport || mariaReport);

// console.log(5 === 5 && 3 > 1 || 5);

// const hamburger = 3;
// const fries = 3;
// const cola = 0;
// const nuggets = 2;


// if (hamburger === 3 && cola || fries === 3 && nuggets) {
// 	console.log("Done!");
// }
// let hamburger;
// const fries = NaN;
// const cola = 0;
// const nuggets = 2;


// if (hamburger && cola || fries === 3 && nuggets) {
// 	console.log("Done!");
// }

//let num = 50;
// while (num <= 55) {
// 	console.log(num);
// 	num++;
// }
// do {
// 	console.log(num);
// 	num++;
// }
// while (num < 55);
// for (let i = 1; i < 10; i++) {
// 	if (i === 6) {
// 		//break;
// 		continue;
// 	}
// 	console.log(i);
// }

// for (let i = 0; i < 3; i++) {
// 	console.log(i);
// 	for (let j = 0; j < 3; j++) {
// 		console.log(j);
// 	}
// }
// *
// **
// ***
// ****
// *****
// ****** 
// let result = "";
// const length = 7;
// for (let i = 1; i < length; i++) {

// 	for (let j = 0; j < i; j++) {
// 		result += "*";
// 	}

// 	result += "\n";
// }

// console.log(result);
// first: for (let i = 0; i < 3; i++) {
// 	console.log(`First level: ${i}`);
// 	for (let j = 0; j < 3; j++) {
// 		console.log(`Second level: ${j}`);
// 		for (let k = 0; k < 3; k++) {
// 			if (k === 2) continue first;
// 			console.log(`Third level: ${k}`);
// 		}
// 	}
// }
// for (let i = 5; i <= 10; i++) {
// 	console.log(i);
// }
// for (let i = 20; i >= 10; i--) {
// 	if (i === 12) break;
// 	console.log(i);
// }
// for (let i = 2; i <= 10; (i = i + 2)) {
// 	console.log(i);
// }
// for (let i = 2; i <= 16; i++) {
// if (i % 2 === 0) {
// continue;
// } else {
// console.log(i);
// }
// }

//let num = 50;
// while (num <= 55) {
// 	console.log(num);
// 	num++;
// }

// let i = 2;
// while (i <= 16) {
// 	if (i % 2 === 0) {
// 		i++;
// 		continue;
// 	} else {
// 		console.log(i);
// 		i++;
// 	}
// }

// const arrayOfNumbers = [];
// for (let i = 5; i <= 10; i++) {
// 	arrayOfNumbers[i - 5] = i;
// }
// console.log(arrayOfNumbers);
// return arrayOfNumbers;

// const arr = [3, 5, 8, 16, 20, 23, 50];
// const result = [];
// for (let i = 0; i < arr.length; i++) {
// 	result[i] = arr[i];
// }
// console.log(result);

// const data = [5, 10, "Shopping", 20, "Homework"];
// for (let i = 0; i < data.length; i++) {
// 	if (typeof (data[i]) === "number") {
// 		data[i] = data[i] * 2;
// 	} else if (typeof (data[i]) === "string") {
// 		data[i] = `${data[i]} - done`;
// 	}
// }

// const data = [5, 10, 'Shopping', 20, 'Homework'];
// const result = [];
// for (let i = 1; i <= data.length; i++) {
// 	result[i - 1] = data[data.length - i];
// 	console.log(result);
// }
// section 2/23 loop

// const lines = 5;
// let result = "";
// for (let i = 0; i <= lines; i++) {
// 	for (let j = 0; j < lines - i; j++) {
// 		result += " ";
// 	}
// 	for (let j = 0; j < 2 * i + 1; j++) {
// 		result += "*";
// 	}
// 	result += "\n";
// }
// console.log(result);

// const rows = 6;
// const space = " ";
// const asterisk = "*";

// for (let i = 1; i <= rows; i++) {
// 	let row = "";

// 	// Add spaces before the asterisks
// 	for (let j = 1; j <= rows - i; j++) {
// 		row += space;
// 	}

// 	// Add asterisks for each row
// 	for (let k = 1; k <= 2 * i - 1; k++) {
// 		row += asterisk;
// 	}

// 	console.log(row);
// }
