// Immediately Invoked Function Expressions (IIFE) are a common JavaScript pattern that allows you to execute a function immediately after defining it. This is often used to create a new scope and avoid polluting the global namespace.

(function chai(){
  console.log('DB CONNECTED');
})() ; // This will log "DB CONNECTED" to the console immediately after defining the function. The function is defined and then immediately invoked with the () at the end. This pattern is useful for initializing code that needs to run once, such as setting up event listeners or initializing a database connection, without leaving any variables or functions in the global scope.

//; is used to separate statements in JavaScript. for two iifes, we can use ; to separate them.

//Javascrpit Execution context is the environment in which JavaScript code is executed. It consists of the variable environment, the scope chain, and the this keyword.

//1.Global Execution Context: This is the default execution context where the global code is executed. It creates a global object (window in browsers) and a this keyword that refers to the global object.

//2.Function Execution Context: This is created whenever a function is invoked. It has its own variable environment, scope chain, and this keyword that refers to the object that called the function.

//3.Eval Execution Context: This is created when code is executed inside an eval() function. It has its own variable environment and scope chain, but it shares the this keyword with the global execution context.

//Memory creation phase is the phase where the JavaScript engine allocates memory for variables and functions. During this phase, all variables are initialized with undefined and all function declarations are hoisted to the top of their scope. This means that you can access variables and functions before they are declared in the code, but they will be undefined until they are assigned a value or defined as a function.

//Execution phase is the phase where the JavaScript engine executes the code line by line. During this phase, variables are assigned their values and functions are executed. If you try to access a variable or function before it is declared, you will get a ReferenceError because it is not defined in the current scope.

