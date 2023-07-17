"use strict";

// const arr = [1, 2, 3, 45, 96, 6, 8, 10];
// arr.sort(compareNum);
// console.log(arr);

// function compareNum(a, b) {
// 	return a - b;
// }


//console.log(arr.length);
//arr.pop();
//arr.push(10);

// arr.forEach(function (item, i, arr) {
// 	console.log(`${i}: ${item} inside in array ${arr}`);
// });

//console.log(arr);

// for (let i = 0; i < arr.length; i++) {
// 	console.log(arr[i]);
// }

// for (let value of arr) {
// 	console.log(value);
// }
// const str = prompt("", "");
// const products = str.split(", ");
// products.sort();
// console.log(products.join("; "));

// let a = 5,
// 	b = a;
// b = b + 5;
// console.log(b);
// console.log(a);

// const obj = {
// 	a: 5,
// 	b: 1
// };
// const copy = obj;
// copy.a = 10;
// console.log(copy);
// console.log(obj);

// function copy(mainObj) {
// 	let objCopy = {};

// 	let key;
// 	for (key in mainObj) {
// 		objCopy[key] = mainObj[key];
// 	}
    
// 	return objCopy;
// }

// const numbers = {
// 	a: 2,
// 	b: 5,
// 	c: {
// 		x: 7,
// 		y: 4
// 	}
// };

// const newNumbers = copy(numbers);
// newNumbers.a = 10;
// newNumbers.c.x = 10;

//console.log(newNumbers);
//console.log(numbers);

// const add = {
// 	d: 17,
// 	e: 20
// };
//console.log(Object.assign(numbers, add));

// const clone = Object.assign({}, add);
// clone.d = 20;

// console.log(add);
// console.log(clone);
// const oldArray = ["a", "b", "c"];
// const newArray = oldArray.slice();

// newArray[1] = "adljfajf";
// console.log(newArray);
// console.log(oldArray);

// const video = ["youtube", "vimeo", "facebook"],
// 	blogs = ["wordpress", "livejournal", "blogger"],
// 	internet = [...video, ...blogs, "insta", "telegram"];
    
// console.log(internet);

// function log(a, b, c) {
// 	console.log(a);
// 	console.log(b);
// 	console.log(c);
// }

// const num = [2, 5, 7];

// log(...num);

//const array = ["a", "b"];

// const newAarray = [...array];

// const q = {
// 	one: 1,
// 	two: 2
// };

// const newObj = {...q};

// const personalPlanPeter = {
//     name: "Peter",
//     age: "29",
//     skills: {
//         languages: ['ru', 'eng'],
//         programmingLangs: {
//             js: '20%',
//             php: '10%'
//         },
//         exp: '1 month'
//     }
// };

// function showExperience(plan) {
// const { skills: { exp } } = plan;
//   return exp;
// }


// const personalPlanPeter = {
// 	name: "Peter",
// 	age: "29",
// 	skills: {
// 		languages: ["ru", "eng"],
// 		programmingLangs: {
// 			js: "20%",
// 			php: "10%"
// 		},
// 		exp: "1 month"
// 	},
// 	showAgeAndLangs: function(plan) {
// 		const {age} = plan;
// 		const { languages } = plan.skills;
// 		let str = `Мне ${age} и я владею языками: `;
// 		languages.forEach(function (lang) {
// 			str += `${lang.toUpperCase()} `;
// 		});
// 		return str;
// 	}
// };

// personalPlanPeter.showAgeAndLangs(personalPlanPeter);


// function showExperience(plan) {
// 	const { skills: { exp } } = plan;
// 	return exp;
// }

// showExperience(personalPlanPeter);

// function showProgrammingLangs(plan) {
// 	let str = "";
// 	const { programmingLangs } = plan.skills;
// 	for (let key in programmingLangs) {
// 		str += `Язык ${key} изучен на ${programmingLangs[key]}\n`;
// 	}
// 	return str;
// }

// showProgrammingLangs(personalPlanPeter);

const family = ["Peter", "Ann", "Alex", "Linda"];

function showFamily(arr) {
	let str = "";
	arr.length === 0 ? str = "Семья пуста" : str = "Семья состоит из: ";
	arr.forEach(member => {
		str += `${member}`;
	});
	return str;
}
showFamily(family);

const favoriteCities = ["liSBon", "ROME", "miLan", "Dublin"];

function standardizeStrings(arr) {
	arr.forEach(city => {
		console.log(city.toLowerCase());
	});
}

standardizeStrings(favoriteCities);

const someString = "This is some strange string";

function reverse(str) {
	if (typeof (str) !== "string") {
		return "Ошибка!";
	}
	return str.split("").reverse().join("");
}

reverse(someString);

const baseCurrencies = ["USD", "EUR"];
const additionalCurrencies = ["UAH", "RUB", "CNY"];

function availableCurr(arr, missingCurr) {
	let str = "";
	arr.length === 0 ? str = "Нет доступных валют" : str = "Доступные валюты:\n";
	arr.forEach(function (curr, i) {
		if (curr !== missingCurr) {
			str += `${curr}\n`;
		}
	});
	return str;
}
availableCurr([...baseCurrencies, additionalCurrencies], "CNY");

