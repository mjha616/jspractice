// let a = 10 
// const b=20
var c=300

if(true){
  let a = 10
  const b = 20
  var c = 30
}

// console.log(a);
// console.log(b);
console.log(c);

// let and const are block scoped, which means they are only accessible within the block they are defined in. var is function scoped, which means it is accessible within the entire function it is defined in. If it is defined outside of any function, it is globally scoped.

//var is used to declare variables that can be re-assigned and re-declared, while let is used to declare variables that can be re-assigned but not re-declared. const is used to declare variables that cannot be re-assigned or re-declared.

function one()
{
  const username="manas"

  function two()
  {
    const website="youtube"
    console.log(username);
  }
  //two can use username because it is defined in the outer function one() and two() can access variables defined in its parent scope. This is called lexical scoping.


  //website is not accessible here because it is defined in the inner function two() and we are trying to access it in the outer function one(). This will throw an error because website is not defined in this scope.
  
  //console.log(website); // this will throw an error because website is not defined in this scope
  two();
}
// one()


//hoisting is a JavaScript mechanism where variables and function declarations are moved to the top of their containing scope during the compilation phase. This means that you can use variables and functions before they are declared in the code. However, only the declarations are hoisted, not the initializations.

//accesing a variable before it is declared will result in undefined for var and a ReferenceError for let and const. Accessing a function before it is declared will work for function declarations but not for function expressions or arrow functions.


