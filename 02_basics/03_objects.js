//singleton object is created when we define an object using object constructor syntax.
//object.create is the constructor way of creating an object which gives a singleton.

//Object literals 

const jsuser={
name:'John',
age:30,
email:'manas.jha2602@gmail.com'
}

console.log(jsuser.name);
console.log(jsuser["email"]); //bracket notation is used when the property name is not a valid identifier or when it is a variable.


jsuser.greeting = function()
{
  console.log("Hello, JS User");
}

console.log(jsuser.greeting());  //undefined is returned because the greeting function does not return anything, it only logs a message to the console.

jsuser.greetingTwo=function(){console.log(`Hello js user,${this.name}`);
}

console.log(jsuser.greetingTwo());
