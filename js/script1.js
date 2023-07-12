/* eslint-disable quotes */


"use strict";
// alert("holo");
// const numberOfFilms = +prompt("How many movies did you watched?", "");

let numberOfFilms;

function start() {
	numberOfFilms = +prompt(`How many films did you watched?`, "");
	while (numberOfFilms == "" || numberOfFilms == null || isNaN(numberOfFilms)) {
		numberOfFilms = +prompt(`How many films did you watched?`, "");
	}
}
start();

const personalMovieDB = {
	count: numberOfFilms,
	movies: {},
	actors: {},
	genres: [],
	private: false
};

function rememberMyFilms() {
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
}
rememberMyFilms();

function detectPersonalLevel() {
	if (personalMovieDB.count < 10) {
		console.log("You have seen several movies");
	} else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
		console.log("You are a classic viewer");
	} else if (personalMovieDB.count >= 30) {
		console.log("You are a movie buff");
	} else {
		console.log("Error");
	}
}

detectPersonalLevel();

//console.log(personalMovieDB);

function showMyDB(hidden) {
	if (!hidden) {
		console.log(personalMovieDB);
	}
}
showMyDB(personalMovieDB.private);

function writeYourGenders() {
	for (let i = 1; i <= 3; i++) {
		personalMovieDB.genres[i - 1] = prompt(`Your favorite genres number ${i}`);
	}
}
writeYourGenders();

// let val = 7;
// function createAdder() {
// 	function addNumbers(a, b) {
// 		let ret = a + b;
// 		return ret;
// 	}
// 	return addNumbers;
// }
// let adder = createAdder();
// let sum = adder(val, 8);
// console.log('example of function returning a function: ', sum);

// function createCounter() {
// 	let counter = 0;
// 	const myFunction = function() {
// 		counter = counter + 1;
// 		return counter;
// 	};
// 	return myFunction;
// }
// const increment = createCounter();
// const c1 = increment();
// const c2 = increment();
// const c3 = increment();
// console.log('example increment', c1, c2, c3);

// let c = 4;
// function addX(x) {
// 	return function(n) {
// 		return n + x;
// 	};
// }
// const addThree = addX(3);
// let d = addThree(c);
// console.log('example partial application', d);

// let num = 20;

// function showFirstMessage(text) {
// 	console.log(text);
// 	let num = 10;
// 	console.log(num);
// }
// showFirstMessage("Hello World");
// console.log(num);
// function calc(a, b) {
// 	return (a + b);
// }
// console.log(calc(4, 3));
// console.log(calc(5, 6));
// console.log(calc(10, 6));

// function ret() {
// 	let num = 50;
// 	return num;
// }

// const anotherNum = ret();
// console.log(anotherNum);

// const logger = function () {
// 	console.log("Hello");
// };
// logger();

// const calc = (a, b) => {
// 	console.log("1");
// 	return a + b;
// };
// console.log(calc);

// const usdCurr = 28;
// const eurCurr = 32;

// function convert(amount, curr) {
// 	console.log(curr * amount);
// }

// convert(500, usdCurr);
// convert(500, eurCurr);

// const usdCurr = 28;
// const eurCurr = 32;
// const discount = 0.9;

// function convert(amount, curr) {
// 	return curr * amount;
// }

// function promotion(result) {
// 	console.log(result * discount);
// 	return function () { };
// }

// promotion(convert(500, usdCurr));
// convert(500, eurCurr);

// function test() {
// 	for (let i = 0; i < 5; i++) {
// 		console.log(i);
// 		if (i === 3) return; 
// 	}
// 	console.log("Done");
// }
// test();

// function sayHello(name) {

// 	return (`Hello ${name}`);
// }
// sayHello("Romeo");

// function returnNeighboringNumbers(num) {
// 	return [num - 1, num, num + 1];
// }
// returnNeighboringNumbers(5);

// function getMathResult(num, times) {
// 	if (typeof (times) !== "number" || times <= 0) {
// 		return (num);
// 	}
// 	let str = "";
// 	for (let i = 1; i <= times; i++) {
// 		if (i === times) {
// 			str += `${num * i}`;
// 		} else {
// 			str += `${num * i}---`;
// 		}
// 	}
// 	return str;
// }
// getMathResult(10, 5);

//const str = "test";
//const arr = [1, 2, 4];
// console.log(str.toUpperCase());
// console.log(str.toLowerCase());
// console.log(str);

// const fruit = "Some fruit";
// console.log(fruit.indexOf("fruit"));

// const logg = "Hello World";
//console.log(logg.slice(6, 11));
//console.log(logg.substring(6, 11));
// console.log(logg.substr(6, 5));

// const num = 12.2;
// console.log(Math.round(num));

// const test = "12.2px";
// console.log(parseInt(test));

