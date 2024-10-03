let score="33abc"

console.log(typeof score)
console.log(typeof (score))
let value=Number(score) //convering string to number
//but if string is not a number then the ouput will be nan=not a number
console.log(typeof value)
console.log(typeof (value))
console.log(value)
//if we send score ad null and after converting to it then it shows 0;
//for undefined shows nan
//for boolean value 1and 0
//and for string it shows Nan

let isloggedin="sanket"

let convertedvalue=Boolean(isloggedin)
console.log(typeof convertedvalue)
console.log(convertedvalue)

//these are ouput on the values of isloggedin
//"sanket" => true
//""=> false
//"1"=>true
//"0" => false

let sumNumber=22

let stringNumber=String(sumNumber)
console.log(stringNumber)
console.log(typeof stringNumber)



