"use strict"; //treat all js code as newer version

// alert(3+3)// we are using node so alert will not work, it is used in browser to show pop up message

let name="manas"
let age=22
let isLoggedIn=false

//number => 2 to power 53
//bigint => greater than 2 to power 53
//string => sequence of characters => "manas", 'manas', `manas`
//boolean => true or false
//null => standalone value that represents nothing
//undefined => variable that is declared but not assigned a value
//symbol => unique identifier


console.log(typeof "manas");
console.log(typeof null);

//Primitive datatypes => number, string, boolean, null, undefined, symbol, bigint (7)
//Reference/Non Primitive datatypes => array, object, function (3)

//Stack(Primitive) and Heap memory(Non Primitive) in js

// Primitive datatypes are stored in stack memory and they are immutable, which means that their value cannot be changed once they are assigned. When we assign a primitive value to a variable, it creates a copy of that value in the stack memory. So when we change the value of one variable, it does not affect the other variable.

// Non primitive datatypes are stored in heap memory and they are mutable, which means that their value can be changed after they are assigned. When we assign a non primitive value to a variable, it creates a reference to that value in the heap memory. So when we change the value of one variable, it affects the other variable because they both reference the same value in the heap memory.


let myName="manas"
let anotherName=myName
anotherName="jha"

console.log(myName);
console.log(anotherName);
