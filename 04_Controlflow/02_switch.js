const month=3 // if month is a string then put string in value field.

switch (month) { // key is the value that i want to check everytime.
  case 1: //value is the value that i want to compare with the key.
    console.log("January");
    break;
  case 2:
    console.log("February");
    break;
  case 3:
    console.log("March");
    break; //if we comment this break statement, it will execute the next case as well, which is called fall-through behavior. In this case, if month is 3, it will print "March" and then continue to execute the next case, which is case 4, and print "April".But it won't execute the default case because it will stop executing the switch statement after it finds a match and executes the corresponding code block. 

  case 4:
    console.log("April");
    break;

  default:
    console.log("default case match");
    
    break;
}

//Truthy values are values that are considered true when evaluated in a boolean context.
//E.g - "0",'false',[],{}," ", function(){} are all truthy values.

// In JavaScript, the following values are considered falsy: // 1.false 2.0 3.-0 4.0n 5."" (empty string) 6.null 7.undefined 8.NaN. 9.Bigint

//Nullish Coalescing Operator (??) is a logical operator that returns the right-hand side operand when the left-hand side operand is null or undefined, and otherwise returns the left-hand side operand. It is often used to provide a default value for a variable that may be null or undefined.

let val1;
// val1=5??10
// val1=null??10
console.log(val1);


//Ternary Operator is a conditional operator that takes three operands: a condition, an expression to execute if the condition is true, and an expression to execute if the condition is false. It is often used as a shorthand for an if-else statement.

const age=18
const isAdult = age >= 18 ? "You are an adult" : "You are a minor";
console.log(isAdult); 