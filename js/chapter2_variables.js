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
// let player = "Gavi";
// let team = "Barcelona";
// let champions = `${player} plays well for ${team} in the champions league!`;
// console.log(champions);


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
console.log(sym1);
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

//working out the type of variable

let testvariable = 1;
variableTypeTest1 = typeof testvariable;
variableTypeTest2 = typeof(testvariable);
console.log(variableTypeTest1);
console.log(variableTypeTest2);


let str7 = "hello";
let nr6 = 7;
let bigNr2 = 12345678901234n;
let bool = true;
let sym = Symbol("unique");
let undef;
let unknown = null;

console.log("str7", typeof str, str7)
console.log("nr6", typeof nr6, nr6)
console.log("bigNr2", typeof bigNr2, bigNr2)
console.log("bool", typeof bool, bool)
console.log("sym", typeof(sym), sym)
console.log("undef", typeof undef, undef)
console.log("unknown", typeof unknown, unknown)

//converting data types

let nr7 = 2;
let nr8 = "2";
let result1 = (nr7 * nr8);
console.log(result1, typeof result1);
//javascript will try to first convert this string in nr8 to a number. If that can be done
//it can execute without any problems in this case it will log 4
//but this is dangerous because guess what the code below outputs?

let nr10 = 2;
let nr11 = "2";
let result = (nr10 + nr11);
console.log(result, typeof result);
//this will log 22! the plus sign can be used to concatenate strings. Therefore, instead
//of converting a string to a number, it is converting a number to a string in this ex
//and clubbing the two strings together "2" and "2" make "22". Luckily we do not have
//to rely on javascripts behavior when converting data types. There are built in functions
//we can use to convert the data type of our variable

//there are 3 conversion methods


let noToStr = 6;
noToStr = String(noToStr);
console.log(noToStr, typeof noToStr);


let strToNum = "12";
strToNum = Number(strToNum);
console.log(strToNum, typeof strToNum)

//everything will be true except null,undefined,0(number), an empty string, and NaN.
let strToBool = "hello";
strToBool = Boolean(strToBool);
console.log(strToBool, typeof strToBool);



/* These might seem pretty straightforward but not all of the options are equally
obvious. These, for example, are not what you think: */
let nullToNr = null;
nullToNr = Number(nullToNr);
console.log( "null", nullToNr, typeof nullToNr);

let strToNr = "";
strToNr = Number(strToNr);
console.log( "empty string", strToNr, typeof strToNr);


//as you can see an empty string and null will both result in the number 0. This is a choice
//that the makers of javascript made, which you will have to know -it can come in handy
//at times when you want to convert a string to 0 when it is empty or null.



//Next enter the following snippet:

let strToNr2 = "hello";
strToNr2 = Number(strToNr2);
console.log(strToNr2, typeof strToNr2);


//here we can see that anything that cant be interpreted as a number by simply 
//removing the quotes will evaluate as Nan (not a number).



let strToBool2 = "false";
strToBool2 = Boolean(strToBool2);
console.log(strToBool2, typeof strToBool2);

let strToBool1 = "";
strToBool1 = Boolean(strToBool1);
console.log(strToBool1, typeof strToBool1);

//this output shows that any string will return true when converted to a boolean,
//even the string false. Only an empty string, null, undefined will lead to a bool value of false



let no1 = 2;
let no2 = "2";
console.log(no1 + Number(no2));



//operators 
/*after seeing quite a few different data types and some ways to convert them it is time
for the next major building block: operators. They come in handy whenever we want to 
work with the variables modify them perform calculations on them and compare them
They are called operators because we use them to operate on our variables */


//Arithmetic operators 
//Arithmetic operators can be used to perform operations with numbers. Most of these operations
//will feel natural to you because they are the basic mathematics you will have learned
//early in your life already

//Addition
//Addition in js is very easy, we have seen it already. We use the + for this operation

let addNum = 12;
let addNum2 = 14;
let resultToAddNum = addNum + addNum2;
console.log(resultToAddNum)

let str1 = "Hello ";
let str8 = "addition";
let result2 = str1 + str8;
console.log(result2)

console.log(resultToAddNum, result2)

//as you can see adding numbers and strings lead to diff results. if we add two different strings
//it will concatenate them into a single string


//excercise 2.2
//create a variable for your name,your age, and one for whether you can code javascript

let myAge = 26;
let myName = 'Dylan';
let coder = true;
const message3 = "Hello, my name is " + myName + ", I am " + myAge + " years old and I can code JavaScript: " + coder + "."; 
console.log(message3)


//Subtraction 
/* Subtraction works as we would expect it as well. We use - for this operation. What do you think
gets stored in the variable in this second example?
*/


let subtractNum = 20;
let subtractNum1 = 4;
let str9 = "hi";
let subtractNum2 = 3;
let result3 = subtractNum - subtractNum1;
let result4 = str9 - subtractNum2;
console.log(result3, result4)

//the first result is 16 and the second result is more interesting. it gives nan, not an error but just simply the conclusion
//that a word and a number subtracted is not a number. thanks for not crashing javascript


//Multiplication 

//we can multiply two numeric values with the * character. Unlike some other languages,
//we cannot successfully multiply a number and a string in javascript.
//The result of multiplying a numeric and a non mumeric value is nan.

let mul = 15;
let mul1 = 10;
let mul3 = "Hi";
let mul4 = 3;
let result5 = mul * mul1;
let result6 = mul3 * mul4;
console.log(result5, result6);


//Division
//another straightforward operator is division. We can divide two numbers with the / 
//character 

let div1 = 30;
let div2 = 5;
let divResult = div1 / div2;
console.log(divResult)


//Exponentiation 
/* Exponentiation means raising a certain base number to the power of the exponent, for example
x to the power of y. it means that we will multiply x by itself y number of times. Here
is an example of how to do this in javascript - we use ** for this operator */


let exponent1 = 2;
let exponent2 = 3;
let exponentResult = exponent1 ** exponent2;
console.log(exponentResult);

//the result of this operation is 2 to the power of 3 which is 8. We're going to avoid
//getting into a mathematics lesson here, but we can also find the root of a number by
//using fractional exponents: for example the square root of a value is the same as
//rasing it to the power of 0.5
console.log(64 ** 0.5)

console.log(8 ** 2)
console.log(9 ** 2)

//Modulus
/* This is the one that requires a little explanation. modulus is the operation in which
you determine how much is left after dividing a number by another number in its entirety.
The ammount of the times the number can fit in the other numbder does not matter here.
The outcome will be the remainder or what is left over. The character we use for this operation
is the % character. Here are some examples*/

let mod1 = 10;
let mod2 = 3;
let modResult = mod1 % mod2;
console.log(`${mod1} % ${mod2} = ${modResult}`);

let nr3 = 8;
let nr4 = 2;
let result7 = nr3 % nr4;
console.log(`${nr3} % ${nr4} = ${result7}`);

let nr5 = 15;
let nr9 = 4;
let result8 = nr5 % nr9;
console.log(`${nr5} % ${nr9} = ${result8}`);
console.log(nr5 + " % " + nr9 + " = " + result8, "this is the result in double quotes");


//the first one is 10 % 3 where 3 fits 3 times into 10 and then 1 is left over.The second
//one is 8 % 2. this results in 0 because 2 can fit 4 times into 8 without having anything left
//The last one is 15 % 4 where 4 fits 3 times into 15 leaving 3 left.


/* This is something that would happen in your head automatically if i asked you to add 125
minutes to the current time. You will probably do two things: integer division to determine how many hole hours fit into 125 minutes and then 125 modulo 60 to conclude
that youll have to add 5 more minutes to the current time. Say our current time is 9:59
you will probably start by adding 2 hours and getting to 11:59 and then add 5 minutes
and then you will perform another modulus operation with 59 and 5 adding 1 more hour to the total
and having 4 minutes left 12:04 */





//Unary operators: increment and decrement
/* The last two operators of our arithmetic operator section are probably new to you, 
if you are new to programming. These are increment and decrement operators. A term we use here is operand. Operands are 
subject to the operator. So if we say x + y, x and y are operands.*/

//We only need one operand for these operators and therefore we also call them
//unary operators. If we see x++, we can read this as x = x + 1. The same is true for the decrement
//operators: x-- can be read as x = x - 1:


let op1 = 4;
op1++;
console.log(op1);


let op2 = 4;
op2--;
console.log(op2);





/* Prefix and postfix operators
We can have the increment operator after the operand x++ in which case we call
this the postfix unary operator. We can also have it before ++x which is the prefix unary operator
This does something different though- the next few lines might be complicated so dont
worry if you need  to read it a few times and have a good look at the examples here:
*/


let nr12 = 2;
console.log(nr12++);
console.log(nr12);

//The postfix gets executed after sending the variable through, and then acter that the operation gets
//executed. In the previous example nr12 gets incremented by 1 after logging. so the first logging
//statement is still logging the old value because it has not been updated yet
//it has been updated for the second log statement



//The prefix gets executed before sending the variable through and often this is the one 
//you will need. have a look below


let nr13 = 2;
console.log(++nr13);

//alright if you can figure out what the next code snippet logs to the console, you should
//really have a good handle on it:


let nr14 = 4;
let nr15 = 5;
let nr16 = 2;
console.log(nr14++ + ++nr15 * nr16++);


//It ouputs 16. It will do the multiplication first, according to the basic mathematical order
//of operations. For multiplying, it uses 6 (prefix, so 5 is incremented before multiplying)
// and 2 (postfix, so 2 is only incremented after execution, meaning it wont affect our current calculation)
//This comes down to 12 and then nr14 is a postfix operator so this one will execute after
//the addition. Therefore, it will add 12 + 4 and become 16.


//Combining the operators
//These operators can be combined, and it works just as it does in math. They get executed in a certain
//order, and not necessarily from left to right. this is due to a phenomenon called operator precedence.

//There is one more thing to take in account here, and that is grouping . You can group using ( and ). the operations between the parenthesis have the highest
//precedence. after that the order of operations takes place based on the type of operation (highest precedence first)
//and if they are equal precedence they take place from left to right


let A = prompt("Input a value");
let B = prompt("Input a second value");
A = Number(A);
B = Number(B);
squareResult = ((A * A) + (B * B)) ** 0.5;
console.log(squareResult)

let parenthesisVar = 5;
let parenthesisVar2 = 10;
let addnum10 = 5;
let addnum11 = 5;
let sub1 = 5;
let sub2 = 5;
let mulX = 5;
let divX = 5;
let expo = 2;
const resultValue = ((parenthesisVar + parenthesisVar2) ** expo) + addnum10 - sub1 * mulX 
const resultValue2 = (parenthesisVar * parenthesisVar2) ** expo + addnum11 - sub2 / divX
console.log(resultValue)
console.log(resultValue2)

//as you can see this is an example of grouping and order of operations 
//first result adds what is in the parenthesis first which is 15. then the expo's next multiplying 15 times itself which is 225.
//finally the multipication happens next as following the order of operations so 225 + addnum10 - 25 as sub1 X mulX = 25
//and the result will be 205. 225 + 5 - 25 = 205.
//the second result is similar. parenthesis first 5 x 10 = 50. 50 ** 2 = 2500, following order of operations division happens next 5/5 = 1 
//so now it reads 2500 + 5 - 1 which results in 2504




//assignment operators
/* We have seen one assignment operator already when we were assigning values to variables.
The character for the basic assignment operation is = . There are a few others available. Every binary arithmetic operator has a corresponding assignment
operator to write a shorter piece of code. For example, x += 5 means x = x + 5 and x **= 3 means x = x ** 3 (x to the power of 3) */



let x = 2;
x += 2;
console.log(x)

//after this assignment operation the value of x becomes 4 because x += 2 is the same as x = x + 2

x -= 2;
console.log(x)


//after this assignment the value of x becomes 2 because x = x -2 


x *= 6;


//so x becomes 12 because x = x * 6 



x /= 3;


//this equates to x = x / 3 so it returns 4. we will use exponentiation


x **= 2;


//this equates to x = x ** 2; so in turn the result is 16 because the old value was 4 and x = 4 ** 2 so 4 * 4 = 16


x %= 3;


//after this assignment the result logs 1 because x = x % 3; 3 can fit into 16 5 times and there is 1 leftover so output is 1



let a = 5;
let b = 5;
let c = 5;

a += b;

a /= c;

c %= b;

console.log(a, b, c)
//output should be (2, 5, 0)

// let a = 4;
// let b = 11;
// let c = 21;
// a = a + b;
// a = a / c;
// c = c % b;
// console.log(a, b, c);



//comparison operators
//comparison operators are different from other operators that we have seen so far. The
//outcome of the comparison operator is always a boolean. True or false

//Equal
//There are a few equality operators that determine whether two values are equal. They come
//in two flavors: equal value only, or equal value and data type. The first one returns 
//true when the values are equal, even though the type is different, while the second one
//returns true only when the value and types are the same.


let equal = 5;
let equal1 = "5";
console.log(equal == equal1);

/* The double equals operator, two equal signs means that it will only check for equal
value and not for data type. Both have the value of 5 so it will log true to the console
This type of equality is sometimes called loose equality*/

/* The triple operator written as three equal signs means that it will evaluate 
both the value and data type to determine whether both sides are equal or not.
Therefore they both need to be euqal in order for this statement to be true, but they are not and therefore
the following statement output is false */


console.log(equal === equal1);
//this is false
//but we can make it true by converting the data type to a number instead of a string
equal1 = Number(equal1);

console.log(equal === equal1)



//Not equal
/* Not equal is very similar to equal except it does the opposite it returns true when 
two variables are not equal and false when they are equal. We use the exclamation mark for not equal
*/

let notEqual = 5;
let notEqual1 = "5";
console.log(notEqual != notEqual1);

//this will log false to the console. If you are wondering what is going on here, take
//a look again at the double and triple equals operators because it is the same here.
//however when there is only one equal sign in a not equal operator it is comparing loosely
//for non equality. Therefore it concludes that they are equal and therefore not equal should result in false.
//The one with two equal signs is checking for strict non equality:

console.log(notEqual !== notEqual1)


//this will conclue that since both variables have different data type they are not the same
//and will log true to the console

notEqual1 = Number(notEqual1)
console.log(notEqual !== notEqual1)

//this will return false because both variables have the same value and same data type
//so not equal will conlucde they are equal so it will log false


//Greather than and smaller than 

//