//if statement 

// if(true){

// } // true then code inside is executed otherwise it is skipped

const isuserloggedin = true 
if (isuserloggedin){
  console.log("welcome to the website");
}

//== checks if both values are equal or not whereas === checks the datatype also 
//2=="2" // true
//2==="2" // false

const temperature = 50
if(temperature===41){
  console.log("it is very hot outside");
}

else{
  console.log("it is cold outside");
}

console.log("this will always be executed");

//scope 
const score=200

if(score > 100){
  const  power="fly"
  console.log(`user power: ${power}`); 
}
// console.log(`user power: ${power}`); 
//error , curly braces have diff scope, variables defined inside the curly braces are not accessible outside of it. This is called block scope. In this case, power is defined inside the if block and cannot be accessed outside of it, resulting in a ReferenceError.using var instead of const would make power accessible outside the block, but it is generally recommended to use let or const for block-scoped variables to avoid unintended consequences.

//Nesting of if statements
const balance=1000

if(balance < 500){
  console.log("less than"); 
}else if(balance > 750){
  console.log("less than 750");
}  
else{
  console.log("greater than 750");
}

const userloggedin = true
const debitcard = true
const loggedinfromgoogle=false
const loggedinfromfacebook=true
if(userloggedin && debitcard){
  console.log("You are allowed to purchase the course");
}

if (loggedinfromfacebook || loggedinfromgoogle){
  console.log("YUser logged in");
} 


