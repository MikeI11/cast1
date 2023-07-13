// function getTimeFromMinutes(minutesTotal) {
// 	if (typeof (minutesTotal) !== "number" || minutesTotal < 0 || !Number.isInteger(minutesTotal)) {
// 		return "Ошибка, проверьте данные";
// 	}
// 	const hours = Math.floor(minutesTotal / 60);
// 	const minutes = minutesTotal % 60;
// 	let hoursStr = "";
// 	switch (hours) {
// 	case 0:
// 		hoursStr = "часов";
// 		break;
// 	case 1:
// 		hoursStr = "час";
// 		break;
// 	case 2:
// 	case 3:
// 	case 4:
// 		hoursStr = "часа";
// 		break;
// 	default:
// 		hoursStr = "часов";
// 	}
    
// 	return `Это ${hours} ${hoursStr} и ${minutes} минут`;
// }
// getTimeFromMinutes(180);
// console.log(getTimeFromMinutes(180));

// function findMaxNumber(a, b, c, d) {
// 	if (typeof (a) !== "number" ||
//         typeof (b) !== "number" ||
//         typeof (c) !== "number" ||
//         typeof (d) !== "number") {
// 		return 0;
// 	} else {
// 		return Math.max(a, b, c, d);
// 	}
// }
// findMaxNumber(1, 5, 6.6, 10.5);
//findMaxNumber(1, 5, "6", "10");
//console.log(findMaxNumber());

// 	if (typeof (times) !== "number" || times <= 0) {
// 		return (num);

// function fib(n) {
// 	if (typeof (n) !== "number" || n <= 0 || !Number.isInteger(n)) {
// 		return "";
// 	} else {
// 		var fibSequence = [0, 1];
// 		for (var i = 2; i < n; i++) {
//             fibSequence[i] = fibSequence[i - 1] + fibSequence[i - 2];
//             return fibSequence.join(", ");
// 		}
// 	}
// }
// fib(5);
// console.log(fib(5));

// function fib(n) {
// 	if (typeof n !== "number" || n <= 0 || !Number.isInteger(n)) {
// 		return "";
// 	} else {
// 		var fibSequence = [0, 1];
// 		for (var i = 2; i < n; i++) {
// 			fibSequence[i] = fibSequence[i - 1] + fibSequence[i - 2];
// 		}
// 		return fibSequence.slice(0, n).join(" "); 
// 	}
// }

// var fibonacciString = fib(7);
// console.log(fibonacciString);

// function fib(num) {
// 	if (typeof(num) !== "number" || num <= 0 || !Number.isInteger(num)) {
// 		return "";
// 	}

// 	let result = "";
// 	let first = 0;
// 	let second = 1;

// 	for (let i = 0; i < num; i++) {
// 		if (i + 1 === num) {
// 			result += `${first}`;
// 			// Без пробела в конце
// 		} else {
// 			result += `${first} `;
// 		}

// 		let third = first + second;
// 		first = second;
// 		second = third;
// 	}

// 	return result;
// }

// fib(5);
