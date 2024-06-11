//Logic statements

/* Up to this point, our code has been rather static. It will do the same thing every time we execute it. In this chapter, that is all going to change. We
will be dealing with logical statements. Logical statements allow us to make multiple paths in our code. Depending on the outcome of a certain expression, 
we will follow one code path or another. 

There are different logic statements, we will go over them in this chapter. We will start with if and if else statements. after that, we will be dealing
with the ternary operator and the final one we will be dealing with is the switch statement. 

along the way we will cover the following topics:

if and if else statements
else if statements
conditional ternary operators
switch statements
*/

/* if and if else statements 

 We can make decisions in our code using if and if else statements. it is very much like this template
 
 if some condition is true then a certain action happen else another action will happen
 
 for example if it is raining then i will take my umbrella else i will leave my umbrella at home. it is not much different in code;
 
 */

let rain = true;

if (rain) {
  console.log("** Taking my umbrella when i need to go outside **");
} else {
  console.log("** I can leave my umbrella at home **");
}

//in this case the value of rain is true. and therefore it will log to the console the first statement

/* but lets take a step back and look at the syntax. We start with the word if after this we get something within parantheses. Whatever is between the parantheses
will be translated to a boolean. if the value of this boolean is true, it will execute the block of code associated with if. You can recognize this block 
by the curly braces. 

The next block is optional, it is an else block. it starts with the word else and is only executed incase of the boolean having a value of false,
if there is no else block and the condition evaluates to false, the program will just skip ahead to the code underneath the if. 


only one of these two blocks will be executed the if block when the expression is true and the else block when the condition is false

*/

/* if (expression) {
        code associated with the if block
        will only be executed if the expression is true
} else {
        code associated with the else block
        we dont need an else block, it is optional
        this code will only be executed if the expression is false
 }
*/

//here is another example. if the age is below 18, log to the console that access is denied, otherwise log to the console that the person is allowed to come in
let age = 18;

if (age < 18) {
  console.log("we're very sorry, but you can't get in under 18");
} else {
  console.log("welcome!");
}

//there is a common coding mistake related to if statements. i have made it in the following code snippet:

let hobby = "dancing";

if (hobby == "coding") {
  console.log(" I love coding too! ");
} else {
  console.log(" Can you teach me that? ");
}

//it will log i love coding too. the problem here is that the single equal sign in the if statement is assigning coding to hobby
//and then it is converting coding to a boolean and since it is not an empty string it will become true so the if block will be executed. always remember to use double equal sign in this case

//practice

let planter = true;
console.log(planter);

if (planter) {
  console.log("He likes to plant trees");
} else {
  console.log("he does not like trees!");
}

if (!planter) {
  console.log("he loves trees");
} else {
  console.log("he does not love trees");
}

/* else if statements 
A variation of the if statement is an if statement with multiple else if blocks. This can be more efficient in certain situations because you are always
only going to execute one or zero blocks. If you have many if else statements underneath one another, they are going to be evaluated and possibly executed even
though one of the ones above already had a condition evaluate to true and proceed to execute the associated code block

here is the written template 
if a value falls into a certain category then a certain action will happen else if the value falls into a different category than the previous statement
then a certain action will happen else if the value falls into a different category than either of the previous brackets then a certain action will happen


for example take this statement to determine what the ticket price should be. if a person is younger than 3, then access is free, else if a person is older
than 3 and younger than 12, then access if 5 dollars, else if a person is older than 12 and younger than 65, then access is 10 dollars, else if a person 
is 65 or older, then access is seven dollars

*/

// age = 10;
// let cost = 0;
// if (age < 3) {
//     cost = 0;
//     message = "Acess is free under three! ";
// } else if (age > 3 && age < 12) {
//     cost = 5;
//     message = "With the child discount, the fee is 5 dollars";
// } else if (age >= 12 && age < 65) {
//     cost = 10;
//     message = "A regular ticket cost 10 dollars"
// } else {
//     cost = 7;
//     message = "A ticket is 7 dollars. ";
// }
// console.log(message);
// console.log(`Your total cost is ${cost} dollars`);

// age = prompt("Enter your age");
// age = Number(age);
// console.log(age, typeof age);
// let message;
// if (age >= 21) {
//   message = "Entry confirmed, you can also purchase alcohol";
// } else if (age >= 19) {
//   message = "Entry confirmed, but no alcohol for you";
// } else {
//   message = "You're too young go home";
// }
// console.log(message);

/* Conditional ternary operators*

we did not actually discuss this very important operator in our section on operators in chapter 2 because 
it helps to understand the if else statement first. Remember that we had a unary operator that was called a unary operator because it only had one operand
 ? This is why our ternary operator has its name; it has three operands. here is its template */

//operand1 ? operand2 : operand3;

/* operand 1 is the expression that gets evaluated. If the value of the expression is true, operand2 gets executed. 
 if the value of the expression is false, operand3 gets executed. You can read the question mark as "then" and the colon as "else" here
 */

//  expression ? statement for true : statement associated with false;

//the template for saying it in your head should be

//if operand1*, then operand2*, else operand3

//lets have a look at an example

let access = age < 18 ? "denied" : "allowed";
console.log(access);

//the little code snippet will assign a value to access. If age is less than 18, then it will assign the value "denied", else it will assign the value "allowed"
//you can also specify actions in a ternary statement like this

age < 18 ? console.log("denied") : console.log("allowed");

/* The syntax can be confusing at first. The template of what to say in your head while reading it can really come to rescue here. 
You can only use these ternary operators for very short actions, so its best practice to use the ternary operator
in these instances as it makes code easier to read. However if the logic contains multiple comparison arguments, you'll just have to use the regular if else
*/

//practice

let ID = false;

let valid = ID
  ? "The id is valid you can enter the venu"
  : "The id is not valid, you cannot come in";
console.log(valid);

//switch statements

/* If else statements are great for evaluating boolean conditions. There are many things you can do with them but in some cases, it is better to replace
them with a switch statement. This is especially the case when evaluating more than four or five values.

We are going to see how switch statements can help us and what they look like. First have a look at this if else statement*/

let activity = "Lunch";

if (activity === "Get up") {
  console.log("It is 6:30AM");
} else if (activity === "Breakfast") {
  console.log("It is 7:00AM");
} else if (activity === "Drive to work") {
  console.log("It is 8:00AM");
} else if (activity === "Lunch") {
  console.log("It is 12.00PM");
} else if (activity === "Drive home") {
  console.log("It is 5:00PM");
} else if (activity === "Dinner") {
  console.log("It is 6:30PM");
}

/* it is determining what the time is based on what we are doing. it would be better to implement this using a switch statement. The syntax of a switch statemenet
looks like this: 
*/

/*

switch(expression) {
  case value1:
    // code to be executed
    break;
  case value2:
    // code to be executed
    break;
  case value-n:
    // code to be executed
    break;
}

*/

//you can read it in your head as follows: if the expression equals value1, do whatever code is specified for that case. if the expression equals value2
//do whatever code is specified for that case and so on.

//here is how we can rewrite our long if else statement in a much cleaner manner using a switch statement
activity = "Dinner";

switch (activity) {
  case "Get up":
    console.log("It is 6:30AM");
    break;
  case "Breakfast":
    console.log("It is 7:00AM");
    break;
  case "Drive to work":
    console.log("It is 8:00AM");
    break;
  case "Lunch":
    console.log("It is 12:00PM");
    break;
  case "Drive home":
    console.log("It is 5:00PM");
    break;
  case "Dinner":
    console.log("It is 6:30PM");
    break;
}

//if our activity is dinner it will output it is 6:30pm

/* whats up with all these breaks you may be wondering? If you do not use the command break at the end of a case, it will execute the next case as well.
this will be done from the case where it has a match, until the end of the switch statement or until we encounter a break statement. This is what 
the output of our switch statement would be without breaks for the lunch activity:


it is 12pm it is 5pm it is 6:30 pm. 

one last side note. switch uses strict type checking (the triple equals strategy) to determine equality, which checks for both a value and a data type*/

/* The default case
There is one part of switch that we have not worked with yet and that is a special case label, namely, default. This works a lok like the else part 
of an if else statement. If it does not find a match with any of the cases and a default case is present, then it will execute the code associated
with the default case. Here is the template of a switch statement with a default cause


switch(expression) {
  case value1:
    // code to be executed
    break;
  case value2:
    // code to be executed
    break;
  case value-n:
    // code to be executed
    break;
  default:
    // code to be executed when no cases match
    break;
}


*/

/* The convention is to have the default case as the last case in the switch statement, but the code will work just fine when it is in the middle or the first case
However, we recommend you stick to the conventions and have it as a last case, since that is what other devs will expect when dealing with your code later

lets say our long if statement has an else statement associated with it that looks like this */

// if(false) {
//   // omitted to not make this unnecessarily long
// } else {
//   console.log("I don't know this activity and cannot determine the current time.")
// }

// then the switch statement would look like this!!!!!
activity = "Watch netflix";
switch (activity) {
  case "Get up":
    console.log("It is 6:30AM");
    break;
  case "Breakfast":
    console.log("It is 7:00AM");
    break;
  case "Drive to work":
    console.log("It is 8:00AM");
    break;
  case "Lunch":
    console.log("It is 12:00PM");
    break;
  case "Drive home":
    console.log("It is 5:00AM");
    break;
  case "Dinner":
    console.log("It is 6:30PM");
    break;
  default:
    console.log("I cannot determine the current time.");
    break;
}

// if the value of the activity was to be something that is not specififed as a case for example watch netflix it would log the following to the console

//i cannot determine the current time

//practice

let randomNumber = Math.random();
randomNumber = randomNumber * 6;
randomNumber = Math.floor(randomNumber);
// const randomNumber = Math.floor(Math.random() * 6); this would be better practice
console.log(randomNumber);
let question = prompt("Ask me whatever");
let message;

switch (randomNumber) {
  case 0:
    message = "I dont think so";
    break;
  case 1:
    message = "it is very likely";
    break;
  case 2:
    message = "It is possible";
    break;
  case 3:
    message = "It is unlikely";
    break;
  case 4:
    message = "Not a chance";
    break;
  case 5:
    message = "easily will happen";
    break;
  default:
    message = "I dont have an answer";
    break;
}
let output = "You asked me that " + question + " I think that " + message;
console.log(output);

//combining cases
/* Sometimes you would want to do the exact same thing for multiple cases. in an if statement you would have to specify all the different or || clauses
in a switch statement you can simply combine them by putting them on top of each other like this*/

let grade = "F";

switch (grade) {
  case "F":
  case "D":
    console.log("You've failed!");
    break;
  case "C":
  case "B":
    console.log("You've passed");
    break;
  case "A":
    console.log("Nice!");
    break;
  default:
    console.log("I don't know this grade.");
}
//this is more readable than the alternative if else statement

if (grade === "F" || grade === "D") {
  console.log("You've failed!");
} else if (grade === "C" || grade === "B") {
  console.log("You've passed");
} else if (grade === "A") {
  console.log("Nice!");
} else {
  console.log("I don't know this grade.");
}

//practice

// number = prompt("enter a number");
// number = Number(number);

// if(number > 21) {
//   console.log("Your number is greater than or equal to 21");
// } else if (number === 21) {
//   console.log("your number is equal to 21")
// } else {
//   console.log("your number is less than 21")
// }

//better practice
let val = prompt("What number?");
val = Number(val);
let num = 100;
let message1 = "nothing";
if (val > num) {
  message1 = val + "  was greater than " + num;
} else if (val === num) {
  message1 = val + "  was equal to " + num;
} else {
  message1 = val + " is less than " + num;
}
console.log(message1);

// let userName = prompt("enter a name");
// console.log(userName, typeof userName);
// let confirmation;
// switch(userName) {
//   case "Dylan":
//     confirmation = "Dylan is a friend!";
//     break;
//   case "Dakota":
//     confirmation = "Dakota is a friend!";
//     break;
//   case "Jacob":
//     confirmation = "Jacob is a friend";
//     break;
//   default:
//     confirmation = userName + " is not a friend";
// }
// console.log(confirmation);

//better practice
let person = prompt("Enter a name");
let confirmation;
switch (person) {
  case "John":
  case "Larry":
  case "Jane":
  case "Laurence":
    confirmation = person + " is my friend";
    break;
  default:
    confirmation = "I don't know " + person;
}
console.log(confirmation);

const game = ["Rock", "Paper", "Scissors"];
let player = Math.floor(Math.random() * 3);
let computer = Math.floor(Math.random() * 3);
let newGame = "player has " + game[player] + " compute has " + game[computer];
console.log(newGame);
if (player === computer) {
  newGame = "The game is a tie";
} else if (player > computer) {
  if (player === 2 && computer === 0) {
    newGame = "Computer wins! Rock beats scissors";
  } else {
    newGame = "player wins";
  }
} else if (computer > player) {
  if (computer === 2 && player === 0) {
    newGame = "player wins rock beats scissors";
  } else {
    newGame = "computer wins!";
  }
}
console.log(newGame);



/* Summary 

Now lets wrap things up. In this chapter, we have covered conditional statements. We started with if else statements. Whenever the condition 
associated with the if is true, the if block gets executed. If the condition is false and there is an else block present, that will be executed. We have also seen
ternary operators and the funky syntax they bring to the table. Its a short way of writing if else statements if you only need one statement per block.


and lastly we have seen switch statements and how they can be used to optimize our conditional code. With the switch statement, we can compare one condition
with many different cases. When they are equal (value and data type), the code associated with the case gets executed

in the next chapter we are going to add loops to the mix! This is going to help us write more efficient code and alogorithms*/



