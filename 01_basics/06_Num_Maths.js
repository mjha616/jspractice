const score = 85;
console.log(score);

const balance = new Number(1000);
console.log(balance);

console.log(balance.toString()); // converts the number to a string
console.log(balance.toFixed(2)); // formats the number to 2 decimal places

const otherNumber = 23.5688;
console.log(otherNumber.toPrecision(3)); // formats the number to 3 significant digits


// *****************Maths******************

console.log(Math.abs(-4)); // absolute value
console.log(Math.round(4.6)); // rounds to the nearest integer. If the decimal part is 0.5 or higher, it rounds up; otherwise, it rounds down.

console.log(Math.ceil(4.2));  // rounds up to the nearest integer, regardless of the decimal part.
console.log(Math.floor(4.8)); // rounds down to the nearest integer, regardless of the decimal part.

console.log(Math.max(3, 5, 1)); // returns the largest of the given numbers.
console.log(Math.min(3, 5, 1)); // returns the smallest of the given numbers.

console.log(Math.random()); // returns a random number between 0 (inclusive) and 1 (exclusive).
console.log(Math.random() * 10); // returns a random number between 0 (inclusive) and 10 (exclusive).
console.log(Math.floor(Math.random() * 10)); // returns a random integer between 0 (inclusive) and 10 (exclusive).  
