//  Primitive

//  7 types : String, Number, Boolearn, null, undefined, Symbol, BigInt

const score = 100
const scoreValue = 100.3

const isLoggedIn = false
const outsideTemp = null
let userEmail;

const id = Symbol('123')
const anotherId = Symbol('123')

// console.log(id === anotherId);

// const bigNumber = 3456543576654356754n



// Reference (Non primitive)

// Array, Objects, Functions

const heros = ["shaktiman", "naagraj", "doga"];
let myObj = {
    name: "hitesh",
    age: 22,
}

const myFunction = function(){
    console.log("Hello world");
}

// console.log(typeof anotherId);

// https://262.ecma-international.org/5.1/#sec-11.4.3

//+++++++++++++++++++++++++++++++
// satcks(primitive) and heap (non-primitive)

let myName="sanket"
let anotherName=myName;
anotherName="amdurkar";

// console.log(myName)
// console.log(anotherName)
//here is formation of an copy not an refernec copied so this is an call by value

// but in non premptive the things are not same here the call by reference takes place in heap

let objOne={
    name:"sanket",
    age:21
}

let objTwo=objOne;
objTwo.age=26;

console.log(objOne.age)
console.log(objTwo.age)
