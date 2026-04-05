//Array
const myarr=[0,1,2,3,4,5];
console.log(myarr[0]);
const Myheroes=['Superman','Batman','Spiderman'];
const myArr2=new Array(1,2,3,4,5);



//JS array-copy operations create shallow copies 
//shalllow copy defined as a copy of an object that shares the same reference as the original object.
//Deep copy defined as a copy of an object that is independent of the original object.


//Arrays methods
myarr.push(6); //add element at the end of the array
myarr.push(7); 
myarr.pop() //removes the last element of the array and returns it
myarr.unshift(9) //shifts all the elements of the array to the right and adds a new element at the beginning of the array
myarr.shift() //removes the first element of the array and shifts all the elements to the left
console.log(myarr);

console.log(myarr.includes(3)); //returns true if the array contains the specified element, otherwise returns false
console.log(myarr.indexOf(2));  //returns the first index at which a given element can be found in the array, or -1 if it is not present

const newArr=myarr.join()
console.log(newArr); 
console.log(typeof newArr); //string

console.log(myarr.slice(2,5)); //returns a shallow copy of a portion of an array into a new array object selected from start to end (end not included) where start and end represent the index of items in that array. The original array will not be modified.

console.log(myarr.splice(1,2)); //changes the contents of an array by removing or replacing existing elements and/or adding new elements in place. It returns an array containing the deleted elements. If only one element is removed, an array of one element is returned. If no elements are removed, an empty array is returned.


console.log(myarr); //after splice method, myarr is modified and contains only the first two elements [0,1] 


