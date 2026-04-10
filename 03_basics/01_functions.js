function sayMyName() {
    console.log("M");
    console.log("A");
    console.log("N");
    console.log("A");
    console.log("S");
}
sayMyName //Refernce
sayMyName(); // calling the function

function addNumbers(num1, num2) // num1 and num2 are parameters
{
  let result= num1 + num2;
  return result; //returning the result of addition  
  console.log("Manas"); // this will not be executed because it is after the return statement

} 

const result = addNumbers(5, 10); //Arguments
console.log(`Result is : ${result}`); // This will now log the correct result

function loginUsername(username){
  return `Welcome ${username}`;
}

console.log(loginUsername("Manas")); // This will return "Welcome Manas"

//when no parameters are passed, it will return "Welcome undefined"

function calculateCartPrice(...num1)//rest operator is used to take variable number of arguments and it will return an array of those arguments
{
  return num1
}

console.log(calculateCartPrice(200,400,500,2000));

//passing object into function
const user={
  username:"Manas",
  price:1000,
}

function handleObject(anyobject){
  console.log(`Username is ${anyobject.username} and price is ${anyobject.price}`);
}

handleObject(user);
