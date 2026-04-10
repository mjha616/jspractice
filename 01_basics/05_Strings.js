const name = "manas"
const repoCount = 50

console.log(`Hello ${name}, your repo count is ${repoCount}`); // string interpolation using template literals

const Gamename= new String("chess")
console.log(Gamename[0]);
console.log(Gamename.length);
console.log(Gamename.toUpperCase());
console.log(Gamename.toLowerCase());
console.log(Gamename.charAt(2));
console.log(Gamename.indexOf("e"));

const newString=Gamename.substring(0,4)
console.log(newString);
console.log(Gamename.slice(0,4));
console.log(Gamename.slice(-4,-1)); // slice can take negative index but substring cannot take negative index
