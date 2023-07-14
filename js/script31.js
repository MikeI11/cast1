"use strict";

// function first() {
// 	// Do something
// 	setTimeout(function () {
// 		console.log(1);
// 	}, 500);
// }

// function second() {
// 	console.log(2);
// }

// first();
// second();

// function learnJS(lang, callback) {
// 	console.log(`I learn: ${lang}`);
// 	callback();
// }

// function done() {
// 	console.log("I completed this lesson!");
// }

// learnJS("JavaScript", done);

const options = {
	name: "test",
	width: 1024,
	height: 1024,
	colors: {
		border: "black",
		bg: "red"
	},
	makeTest: function () {
		console.log("Test");
	}
};
options.makeTest();

const { border, bg } = options.colors;
console.log(border,  bg);

//console.log(Object.keys(options).length);

//console.log(options["colors"]["border"]);

// delete options.name;

// console.log(options);


let counter = 0;
for (let key in options) {
	if (typeof (options[key]) === "object") {
		for (let i in options[key]) {
			console.log(`Property ${i}, have value ${options[key][i]}`);
			counter++;
		}
	} else {
		console.log(`Property ${key}, have value ${options[key]}`);
		counter++;
	}
    
	console.log(counter);
}