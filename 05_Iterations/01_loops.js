// //1.for loop 

// // for (let index = 0; index < 10; index++) {
// //   const element = index;
// //   console.log(element);  
// // }

// for (let i = 0; i <=10; i++) {
//     console.log(`outer loop :${i}`);
//   for (let j = 0; j <=10; j++) {
//     // console.log(`inner loop :${j}`);
//     console.log(i + '*' + j + '=' + i*j );  
//   }
// }

// let myArray=["spiderman","batman","superman"]

// for (let index = 0; index < myArray.length; index++) {
//   const element = myArray[index];
//   console.log(element);
  
// }

// //break and continnue 

// // for (let index = 1; index <=20; index++) {
// //   if(index==5)
// //   {
// //     console.log(`5 detected`);
// //     break
// //   }
  
// //   console.log(`value of index is ${index}`);
// // }


// for (let index = 1; index <=20; index++) {
//   if(index==5)
//   {
//     console.log(`5 detected`);
//     continue
//   }

//   console.log(`value of index is ${index}`);
// }

//2.While loop

let index=0;
while (index<=10) {
  console.log(`value of index is ${index}`);
  index=index+2;
}

//3.Do while loop - condition is checked after executing the code block at least once the code block will be executed.

let score=11
do {
  console.log(`Score is ${score}`);
  score++  
} while (score<=10);


//higher order loops
//4.for of loop

//[{},{},{}] //objects in an array

const arr=[1,2,3,4,5]
// for (const element of object) {
//element is the variable    
// object means on which i do want to apply loop 
// }

for (const num of arr)
{
  console.log(num);
}

const greetings = "Hello"
for (const greet of greetings){
  console.log(`Each char is ${greet}`);
}

//object is not iterable so we cannot use for of loop on object but we can use for in loop on object

//5.for in loop
const person={
  name:"John",
  age:30,
  city:"New York"
}   
for (const key in person) {
  console.log(`${key} : ${person[key]}`);
} 

//6.forEach loop - only for array

// name of function is not present in forEach loop because it is an anonymous function and it is a callback function because it is passed as an argument to forEach loop and it will be called by forEach loop for each element in the array

const myArray=["spiderman","batman","superman"]   
// arrow function:
myArray.forEach((item)=>{  
  console.log(`index is ${item}`);
}
)

//normal function:
myArray.forEach(function(val){
  console.log(`element is ${val}`);
})

//7.forEach loop 

const coding = [
  {
    name:"javascript",
    filename:"js" 
  },
  {
    name:"java",
    filename:"java" 
  },
  {
    name:"python",
    filename:"py" 
  }
]
coding.forEach((item)=>{
  console.log(item.name);  
})

//Filter loop - it is used to filter the elements of an array based on a condition and it returns a new array with the filtered elements
// syntax : array.filter((element) => {return condition})

const myNums=[1,2,3,4,5,6,7,8,9,10]
const result=myNums.filter((num) => num>5) // or const result=myNums.filter((num) => {return num>5}) if we write the scope then we have to write return statement but if we write the scope in one line then we can omit the return statement and also we can omit the curly braces

console.log(result);

//Map  
const myNums2=[1,2,3,4,5]
const newNums= myNums2.map((num)=>num+10)
console.log(newNums);

//Difference between map and filer 

//Reduce  
//syntax of reduce : function,acc
const myNums3=[1,2,3]

const mytotal=myNums3.reduce(function(acc,curval){
  console.log(`acc value is ${acc} and curval is ${curval}`);  
  return acc+curval
},0)

console.log(mytotal);

