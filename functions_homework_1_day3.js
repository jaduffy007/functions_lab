function greeting () {
	console.log("hello world!");
}
greeting();


function friend (name) {
	console.log("Hello " + name);
}
friend("John");


function friend (name) {
	return("Hello " + name);
}
var friendJohn = friend("John");
console.log(friendJohn);


function add (num1, num2) {
	return (num1 + num2);
}
var sum = add(2,2);
console.log(sum);


function sub (num1, num2) {
	return (num1 - num2);
}
var subTotal = sub(5,2);
console.log(subTotal);


function combine (num1, num2, boolean) {
	if (boolean === true) {
		return add(num1, num2);
	} else {
		return sub(num1, num2);
	}
}
var combineTotal = combine(5, 2, 10 > 8);
console.log(combineTotal);


var called = 0;
var numberOfFunctions = function () {
called++;
return ("I have been called"+called+"number of times");
};
numberOfFunctions();



