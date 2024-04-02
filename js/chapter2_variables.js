let firstName = 'Dylan';
    firstName = 'Bob';
    //second time you call a variable only use the name

// variables definitions consist of 3 parts - variable defining keyword(let,var, const), 
// a name and a value
// let and var is used when a variable might need a new value assigned to them
//var has global scope and let has block scope. Var's global scope means that
//you can use the variables defined with var anywhere in the entire script
//lets block scope means you can only use variables defined with let
//in specific code blocks in which they were defined.
// a block of code will always start with { and end with }
let n1 = 12;
var n2 = 14;
/* const on the other hand is used for variables that only get assigned a value once
for example, the value of pi, which will not change. If you try to reassigning a value
declared with const, you will get an error:*/
const PI = 3.13159;
//     PI = 4;
// console.log(PI)
//this will result in typeerror
