//Dates
let myDate = new Date() // current date and time
console.log(myDate);
// console.log(myDate.typeof myDate); // object
console.log(myDate.getFullYear()); // gets the year
console.log(myDate.getMonth()); // gets the month (0-11, where 0 is January and 11 is December) 
console.log(myDate.getDate()); // gets the day of the month (1-31)
console.log(myDate.getDay()); // gets the day of the week (0-6, where 0 is Sunday and 6 is Saturday)       
console.log(myDate.getHours()); // gets the hours (0-23)
console.log(myDate.getMinutes()); // gets the minutes (0-59)
console.log(myDate.getSeconds()); // gets the seconds (0-59)
console.log(myDate.getMilliseconds());  // gets the milliseconds (0-999)


let timestamp = Date.now() // returns the number of milliseconds since January 1, 1970, 00:00:00 UTC
console.log(timestamp);