let firstName = "Dylan";
firstName = "Bob";
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

//Variables
//strings

// you can use single quotes or double quotes or back ticks to delcare a string
//single and double quotes can be used like so
let singleString = 'hi there!';
let doubleString = "hello there!";
//you can use either option but be sure to be consistent

// let funActivity = 'Let's learn JavaScript'
//this will log an error as the string will end within lets

let funActivity = "Let's learn Javascript";
//this is fine because the string is looking for another double quote so this lets you use
//single quotes as literal letters inside a string

//the same can happen with double quotes for example
// let question = "Do you want to learn JavaScript? "yes!" ";
//this will result in an error unless you use single quotes at the yes because the compiler
//will not distinguish the diff between double quotes in diff context and output a error

/* In a string using backticks, you can point to variables and the variables value
will be substituted into the line. In this example
*/
let language = "JavaScript";
let message = `Let's learn ${language}`;
console.log(message);
//as you can see the language variable gets replaced with its value: Javascript
let player = "Gavi";
let team = "Barcelona";
let champions = `${player} plays well for ${team} in the champions league!`;
console.log(champions);


//Escape Characters
/* say we want to have double quotes, single quotes, and backticks in our string
we would have a problem as this cannot be done with just what we have learned so far
there is a solution to this problem tho. There is a special character that can be used
to tell javascript "do not take the next character as you normally would"
this is the escape character the backslash

in this example below the backslash can be used to ensure your interpreter doesnt see 
the single or double quotes marks and end the string too early
*/

let str = "Hello, what's your name? Is it \"Mike\"?";
console.log(str);
let str2 = 'Hello, what\'s your name? Is it "Mike"?';
console.log(str2);

//the escape character has more purpose as well
/* with \n you can create a line break
   you can include a backslash character with \\ 
*/

let str3 = "I'm a new \nline";
let str4 = "I'm containing a backslash: \\!";
console.log(str3)
console.log(str4)


//Numbers!!!
/* the number data type can be used to represent integers, decimals, exponentials
octal, hexadecimal, and binary numbers
*/

let intNr = 7;
let decNr = 1.5;
let expNr = 1.4e15;
let octNr = 0o10; // decimal version would be 8
let hexNr = 0x3E8; // decimal version would be 1000
let binNr = 0b101; // decimal version would be 5

let intNr2 = 3434;
let intNr3 = -111;

let decNr2 = 45.78; 

let binNr2 = 0b100; //decimal version would be 4


//sometimes in special cases  you will need an even bigger number


//BigInt
//BigInt datatypes can be recognized by the postfix n:
let bigNr = 90071992547409920n;


//lets try to do some calculations with our previously made integer Number, intNr, and
//BigInt, bigNr:
// let result = bigNr + intNr;
// console.log(result)

//this will result in an error: Cannot mix BigInt and other types.
//you can only operate BigInt with other Bigints


//Boolean
/* Boolean data type can only hold two values true and fale. there is nothing 
in between.*/

let bool1 = false;
let bool2 = true;

//in the preceding example you can see the options we have for the boolean data type
//it is used in situations where you want to store a true or false value
//which can indicate on/off yes/no for example when an element is deleted:

let isDeleted = false;

//or whether light is on/off

let lightIsOn = true;



//Symbol

//Symbol is a newer data type introduced in ES6. Symbol can be used when it is important
//that variables are not equal even tho their value and type are the same.
//compare the following string declarations to the symbol declarations all of equal value

let str5 = "javascript is fun!";
let str6 = "javascript is fun!";
console.log("These two strings are the same:", str5 === str6);

let sym1 = Symbol("Javascript is fun!");
let sym2 = Symbol("Javascript is fun!");
console.log("These two symbols are the same:", sym1 === sym2);

/* in the first half, javascript concludes the strings are the same. They have the same
value and same type. However in the second part each symbol is unique
Therefore, although they contain the same string, they are not the same and output false when
compared.The symbol datatypes can be very handy as properties of objects which we will see later
*/


//Undefined
//Javascript is a special language that has a special data type for a variable that has
//not been assigned a value. This data type is undefined:

let unassigned;
console.log(unassigned)

//we can also purposely assign an undefined value.It is important to know that it is
//possible, but it is even more important to know that manually assigning undefined is
//a bad practice!!!!

let terribleThingToDo = undefined;

//this can be done but it is recommended to not do this. This is for a number of reasons
//for example checking whether two variables are the same. if one variable is undefined
//and your own variable is manually set to undefined they will be considered equal
//this is an issue because if youre checking for equality you would want to know whether
//two values are actually equal not just that they are both undefined
//this way someones pet and their last name might be considered equal whereas theyre actually
//both just empty values


//Null
/* In the last example we saw an issue that can be solved with a final primitive type,
null. Null is a special value for saying that a variable is empty or has am unkown value.
This is case sensitive. You should use lowercase for null*/

let empty = null;


//to solve the issue we encountered with setting a variable as undefined, note that if you
//set it to null you wont have the same problem. This is one of the reasons it is better
//to assign null to a variable when you want to say it is empty and unknown at first:

let lastName;
console.log("same undefined:", lastName === terribleThingToDo);

let betterOption = null;
console.log("Same null:", lastName === betterOption);


//this shows that an automatically undefined variable, lastName and a deliberately undefined
// variable terriblethingtodo are considered equal which is problematic. on the other hand
//lastname and betteroption which was explicitly declared with a value of null are not equal

