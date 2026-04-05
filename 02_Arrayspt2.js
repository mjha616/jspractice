const marvel_heroes=["Iron Man","Captain America","Thor","Hulk","Black Widow"];
const dc_heroes=["Superman","Batman","Wonder woman"];

// marvel_heroes.push(dc_heroes);
// console.log(marvel_heroes); //marvel_heroes now contains the dc_heroes array as its last element

all_heroes=marvel_heroes.concat(dc_heroes); //concat method does not modify the original array, it returns a new array that is the result of concatenating the two arrays

console.log(all_heroes);

//Spread operator
const all_heroes2=[...marvel_heroes,...dc_heroes]; //spread operator allows us to spread the elements of an array into a new array    
console.log(all_heroes2);


//flat method creates a new array with all sub-array elements concatenated into it recursively up to the specified depth. The default depth is 1.
const nestedArr=[1,2,[3,4],[5,6]];
const flatArr=nestedArr.flat();
console.log(flatArr); // [1,2,3,4,5,6]


console.log(Array.isArray("Manas"));
console.log(Array.from("Manas"));
console.log(Array.from({name:"Manas"}));


