const user ={
  username:"Manas",
  price:999,
  welcomeMessage:function()
{
    console.log(`Welcome ${this.username} to our website`);
    console.log(this) // this refers to the current object, which is user in this case
}
}

user.welcomeMessage(); // this will call the welcomeMessage function and log "Welcome Manas to our website"

user.username="jha"
user.welcomeMessage(); // this will call the welcomeMessage function and log "Welcome jha to our website" because we have updated the username property of the user object.

console.log(this) // this will refer to the global object (window in browsers) because it is not inside any function or object.

//this inside a function refers to the global object, but in strict mode it will be undefined.

//Arrow functions

const chai= () => {
  let username="Manas";
  console.log(this.username);
}

chai() 

const addTwo =(num1,num2) => {
  return num1 + num2;
}

console.log(addTwo(3,4));

//if {} are used then return statement is required, if {} are not used then return statement is not required and the expression will be returned by default.

const addTwoNumbers = (num1,num2) => num1 + num2;