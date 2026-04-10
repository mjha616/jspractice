console.log(3+3);
console.log(3-3); 
console.log(3*3);
console.log(3/3);
console.log(3%2); //modulus operator gives the remainder
console.log(3**3); //exponentiation operator gives the result of 3 to the power of 3

let str1="hello"
let str2="world"
let str3=str1+str2
console.log(str3);

console.log("1"+2);
console.log(1+"2");
console.log("1"+"2"); 
console.log("1"+2+2); // "1"+2 => "12" + 2 => "122" first string then everything is treated as string
console.log(1+2+"2"); // 1+2 => 3 + "2" => "32" first addition happens and then string concatenation happens

console.log((3+4)*5%3); // operator precedence => () => ** => * / % => + -

//********************Comaprison operators************************
console.log(3>2);
console.log(3<2);
console.log(3>=2);
console.log(3<=2);
console.log(3==2);
console.log(3!=2);

console.log(null > 0); // false
console.log(null == 0); // false
console.log(null >= 0); // true

console.log(undefined > 0); // false
console.log(undefined == 0); // false
console.log(undefined >= 0); // false
