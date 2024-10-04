// console.log(2>1)
// console.log(2<1)
// console.log(2>=1)
// console.log(2==1)
// console.log(2<=1)

// console.log("2">1)
// console.log("02">1)
// console.log("sanketamdurkar">1)

console.log(null>0)//=> false
console.log(null==0)//=>false 
//Even though loose equality performs type coercion, 
//null is only loosely equal to undefined, not to any other value like 0. So the result is false.
console.log(null>=0)//=>true // for relational comaparions like >,<,>=,<= then the null converted
//to zero not undefined 

// strict check ===
// it checks number and also check the datatypes 
console.log("1"===1)
console.log(1===1)