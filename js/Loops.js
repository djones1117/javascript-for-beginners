/* Loops chapter 5

We are starting to get a good basic grasp of javascript. This chapter will focus on a very important concept: loops. Loops execute a code block a certain
number of times. We can use loops to do many things, such as repeating operations a number of times and iterating over data sets, arrays and objects. Whenever
you feel the need to copy a little piece of code and place it right underneath where you copied it from, you should probably be using a loop instead


We will discuss the basics of loops, then continue to discuss nesting loops, which is basically using loops inside loops. Also we will explain looping over two
complex constructs we have seen, arrays and objects. And finally we will introduce two keywords related to loops, break and continue, to control the flow 
of the loop even more. 

These are the different loops we will be discusiing in this chapter:

while loop

do while loop

for loop

for in 

for of loop




While loops
The first loop we will discuss is the while loop. A while loop executes a certain block of code as long as an expression evaluates to true.
The snippet below demonstrates the syntax of the while loop:
*/

// while (condition) {
//     //code that gets executed as long as the condition is true
// }


/* The while loop will only be executed as long as the condition is true, so if the condition is false to begin with, the code inside will be skipped

Here is a very simple example of a while loop printing the numbers 0 - 10
(excluding 10 to the console)*/


let i = 0;
while (i < 10) {
    console.log(i);
    i++;
}

//the output will be 1 -10 excluding 9.

//These steps are
//1 create a variable i and set its value to 0
//2 start the while loop and check the condition of i is smaller than 10
//3 since the condition is true, the code logs i and increases i by 1 because of the increment operator
//4 the condition gets evaluated again 1 is still smaler than 10
//5 since the condition is true, the code logs i and increases i by 1
//6 the logging and increasing continues until i becomes 10
//7 10 is not smaller than 10 so the loop ends


/* We can have a while loop that looks for a value in an array like this:
*/

let someArray = ["Mike", "Antal", "Marc", "Emir", "Louiza", "Jacky"];
let notFound = true;

while (notFound && someArray.length > 0) {
  if (someArray[0] === "Louiza") {
    console.log("Found her!");
    notFound = false;
    console.log("false");
  } else {
    someArray.shift();
  }
}

/* 
It checks whether the first value of the array is a vertain value, and when it is not it deletes that values from the array using the shift method. Remember this method?
It removes the first element of the array. So, by the  next iteration, the first value has changed and is checked again .  If it stumbles upon the value
, it will log this to the console and change the boolean notfound to false, because it has found it. That was the last iteration and the loop is done.

it will output found her then false



Why do you think the && somearry.legnth > 0 is added in the while condition? if we were to leave it out and the value we were looking for was not in the array,
we would get stuck in an infinite loop. This is why we make sure that we also end things if our value is not present so our code can continue


but we can also do more sophisticated things very easily with loops. lets see how easy it is to fill an array with the fibonacci sequence using a loop


*/


let nr1 = 0;
let nr2 = 1;
let temp;


fibonacciArray = [];

while (fibonacciArray.length < 25) {
    fibonacciArray.push(nr1);
    temp = nr1 + nr2;
    nr1 = nr2;
    nr2 = temp;
}


/* In the fibonacci sequence each value is the sum of the two previous values, starting with the values 0 and 1. We can do this in a while loop
as stated above. We create two numbers and they change every iteration. We have limited our number of iterations to the length of the fibonacciArry, because 
we dont want an infinite loop. in this case the loop will be done as soon as the length of the array is no longer smaller than 25.


We need a temporary variable that stores the next value for nr2. and every iteration we push the value of the first number to the array. if we log the array 
you can see the numbers gettting rather high very quickly. Imagine having to generate these values one by one in your code */
console.log(fibonacciArray)



// let max = 5;
// randomNum = Math.floor(Math.random() * max + 1);
// console.log(randomNum);
// correct = false;
// while (!correct) {
//     let userGuess = prompt("enter a number 1 - " + max + ".");
//     userGuess = Number(userGuess);
//     if (userGuess === randomNum) {
//         console.log("This is the correct number");
//         correct = true;
//     } else if (userGuess > randomNum) {
//         console.log("Too high");
//     } else {
//         console.log("Too low");
//     }
// }


//do while loops 
/* in some cases, you really need the code block to be executed at least once. For example, if you need valid user input, you need to ask at least once.
The same goes for trying to connect with a database or some other external source; you will have to do so atleast once in order for it to be succesful. and you
will probabbly need to do so as long as you did not get the result you needed. in these cases you can use a do while loop


//here is the syntax

do {
    // code to be executed if the condition is true
} while (true);

it executes what is within the do block, and then after that it evaluates the while. if the condition is true, it will execute what is in the do block again.
it will continue to do so until the condition in the while changes to false.

we can use the prompt method to get user input. lets use a do while loop to ask the user for a number between 0 and 100.


*/


let number;
do {
  number = prompt("Please enter a number between 0 and 100: ");
} while (!(number >= 0 && number < 100));



/* it asks three times because the first two times the number was not between 0 and 100 and the condition in the while block turned true because of the negation
with 34 the condition in the while block is true but negates to false ending the loop.



*/

//practice


let counter = 0;
let step = 5;

do {
    console.log(counter)
    counter += step;
} while (counter <= 100);



//for loops

/* For loops are special loops. the syntax might be a little bit confusing at first, but you will fimd yourself using them soon
because they are very useful

the syntax looks like







for (initialize variable; condition; statement) {
      code to be executed
    }     
    
    
    
    
between the parentheses following the for statement, there are three parts seperated by semi colons. The first one initializes the variables that can be used
in the for loop.
The second one is a condition; as long as this condition is true, the loop will keep on iterating. This condition gets checked after initializing the variables
before the first iteration (this will only take place when the condition evaluates to true) the last one is a statement; This statement gets executed after every
iteration. here is the flow of a for loop

1. Initialize the variable
2. check the condition
3. if the condition is true, execute the code block, if the condition is false, the loop will end here
4. perform the statement(the third part for example i++)
5. go back to step 2*/



//this is a simple example that logs the numbers 0 to 10 excluding 10 to the console.

for (let i = 0; i < 10; i++) {
    console.log(i);
}

/* It starts by creating a variable i, and this is set to 0. Then checks whether i is smaller than 10 if it is, it will execute the log statement. After this
it will execute i++ and increase i by one.


//if we dont increase i, we will get stuck in an infinite loop, since the value of i would not change and it would be smaller than 10 forever. This is 
something to look out for in all loops


The condition gets checked again. and this goes on until i reaches a value of 10. 10 is not smaller than 10, so the loop is done executing and the numbers
0-9 have been logged to the console.

We can use a foor loop to create a sequence and add values to an array like this
*/


let arr = [];
for (let i = 0; i < 100; i++) {
    arr.push(i);
}

console.log(arr);


/* Since the loop ran the block of code 100 times starting with an initial value of 0 for i, the block will add incrementing value into an array, at the end of the array
. This results in an array that has a count of 0-99 and a length of 100. Since arrays start with an index value of 0, the values in the array will actually
match up with the index values of the items in the array. 

or we could create an array containing only even values;


*/


let even_arr = [];
for (let i = 0; i < 100; i += 2) {
    even_arr.push(i);
}

console.log(even_arr);



/* Resulting in the array of even numbers

most commonly, you will see i++ as the third part of the for loop, but please note that you can write any statement there. In this case, we are using
i = i + 2 to add 2 to the previous value everytime, creating an array with only even numbers



practice*/

myWork = [];
for (let x = 1; x < 10; x++) {
    let stat = x % 2 ? true : false;
    let temp = {
        name: `Lesson ${x}`,
        status: stat
    }
    myWork.push(temp);
}

console.log(myWork);



/* Nested Loops
Sometimes it can be necesssary to use a loop inside a loop. A loop inside a loop is a nested loop. Often it is not the best solution to a problem.
It could even be a sign of poorly written code but every now and then it is perfectly fine to solve a problem.

Here is what it would look like for while loops:

while (condition 1) {
    //code that gets executed as long as condition 1 is true
    //this loop depends on condition 1 being true
    while (condition 2) {
        //code that gets exeucted as long as condition 2 is true
    }
}
Nesting can also be used with for loops. or with a combination of both for and while or even with all kinds of loops; they can go several levels deep. 

An example in which we might use nested loops would be when we want to create an array of arrays. With the outer loop we create the top level array and with the 
inner loop we add the values to the array

*/


let arrOfArrays = [];
for (let i = 0; i < 3; i++){
    arrOfArrays.push([]);
    for (let j = 0; j < 7; j++) {
        arrOfArrays[i].push(j);
    } 
}


//when we log the array like this
console.log(arrOfArrays);


//we can see the output is an array of arrays with values from 0 up to 6

/* Loops and Arrays

if you are not convinced on how extremely useful loops are by now, have a look at
loops and arrays. Loops make life with arrays a lot more comfortable. 

We can combine the length property and the condition part of the for loop or while loop to loop over some arrays. it would look like this in case of
a for loop:


let arr = [some array];
for (initialize variable; variable smaller than arr.length; statement)
{ code to be executed
}

lets start with an example that is going to log every value of the array

*/


let names = ["Chantal", "John", "Maxime", "Bobbi", "Jair"];
for (let i = 0; i < names.length; i++){
    console.log(names[i]);
}



/* We use the length property to determine the max value of our index. The index starts counting at 0, but the length does not.
The index is always one smaller than the length. Hence we loop over the values of the array by increasing the length. 

In this case we arent doing very interesting things yet, we are simply printing the values. But we could be changing the values of the array in a loop, 
for example like this:

*/


let names2 = ["Chantal", "John", "Maxime", "Bobbi", "Jair"];
for (let i = 0; i < names2.length; i++){
    names2[i] = "hello " + names2[i];
}
console.log(names2)


//we have concatenated hello with the beggining of our names. The array is changed in the loop and the array will have this content after the loop has executed

/* The possibilities are endless here. When an array comes in somewhere in the application, data can be sent to the database per value. Data can be modified by value
or even filitered like this:
*/




let names3 = ["Chantal", "John", "Maxime", "Bobbi", "Jair"];
for (let i = 0; i < names3.length; i++){
    if(names3[i].startsWith("M")) {
        delete names3[i];
        continue;
    }
    names3[i] = "hello " + names3[i];
}
console.log(names3);

//The startwith method just checks whether the string starts with a certain character. In this case it checkes where the string starts with the string m.

