let score="33abc"

console.log(typeof score);
console.log(typeof (score));

let valueInNumber=Number(score)
console.log(typeof valueInNumber);
console.log(valueInNumber);

//converting number to string
//"33"=> 33
//"33abc" cannot be converted to a number, so valueInNumber will be NaN
//true => 1 // false => 0 
//null => 0
//undefined => NaN


let isloggedIn="manas"
let booleanIsloggedIn=Boolean(isloggedIn)
console.log(booleanIsloggedIn);

//converting string to boolean
//1=> true ; 0=> false ; "" => false ; "manas" => true

let someNumber=33

let stringNumber=String(someNumber)
console.log(stringNumber);
console.log(typeof stringNumber);

