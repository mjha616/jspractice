//Declaring obejcts by constructor method

// const tinderUser=new Object(); //singleton object created using object constructor syntax
const tinderUser2={}; //does not contain a singleton object.

tinderUser2.id=12345;
tinderUser2.name="Manas";
tinderUser2.isLoggedIn=false;

console.log(tinderUser2);

console.log(tinderUser2.id);


console.log(Object.keys(tinderUser2)); //returns an array of a given object's own enumerable property names, iterated in the same order that a normal loop would.

console.log(Object.values(tinderUser2)); //returns an array of a given object's own enumerable property values, in the same order as that provided by a for...in loop.  

console.log(Object.hasOwnProperty('isLoggedIn')); //returns a boolean indicating whether the object has the specified property as its own property.

const course={
  name:"JS Bootcamp",
  price:999,
  instructor:"Manas Jha",
}

//course.instructor
const {instructor: inst}=course; //object destructuring allows us to extract properties from an object and assign them to variables with the same name as the property.

console.log(inst);

// ****************API*******************
//Backend se jo value aati hai usko kaise likhte hai hm wo hai API
//Older version values came in XML format but now it is in JSON format which is easier to read and write for humans and machines.

//json is {} this i.e object

// {
//   name:"Manas",
//   age:22,
//   email:"manas@example.com"
// }