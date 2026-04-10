const accountId = 14453456
let accountEmail = "manas.jha2602@gmail.com"
var accountPassword = "12345"
accountCity = "Bangalore"
let accountState;

// accountId=2 not allowed because accountId is a constant variable

accountEmail = "hiddenhut9@gmial.com"
accountPassword = "67890"
accountCity = "Mumbai"

/*prefet not to use var because of its function scope and hoisting issues. let and const are block scoped and do not have hoisting issues.*/

console.log(accountId);
console.table([accountId,accountEmail, accountPassword, accountCity, accountState])