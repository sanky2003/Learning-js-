const accountId=1234
let accountEmail="sanket@gmail.com"
var accountPassword="123456"

accountCity="Delhi"
let accountState;//if there is no value assigned then by defult it assumed as undefined by the js
// accountId=2  // this is not allowed in the javascript to change the value of the const variable
console.log(accountId);

accountCity="hyderabad" //this is allowed
// you can use the table to print all values at once
console.table([accountId,accountEmail,accountPassword,accountCity,accountState]);