//Javascript Multiple Values
/* The basic data types have been dealt with in the previous chapter. Now its time to look at a slightly more complicated topic: arrays and objects
In the previous chapter you saw some variables that held just a single value. To allow for more complex programming, objects and arrays can contain multiple values.


You can look at objects as a collection of properties and methods. Properties can be thought of as variables. They can be simple data structures such as numbers and strings
but also other objects. Methods perform actions; they contain a certain number of lines of code that will be executed when the method gets called. We'll explain 
methods in more detail later on and focus on properties for now. an example of an object can be a real life object, for example, a dog. it has properties
such as name, weight, color, and breed. 


We will also discuss arrays. An array is a type of object, which allows you to store multiple values. They are a bit like lists. So you could 
have an array of items to buy at the grocery store, which might contain the following values; apples, eggs, and bread. This list would take the form of a single
variable, holding multiple values.


Along the way we will cover the following topics:
Arrays and their properties
Array methods
Multidimensional arrays
objects in js
working with objects and arrays
*/


//Arrays and their properties

/* Arrays are lists of values. These values can be of all data types and one array can contain different data types. It is often very useful to store multiple
values inside on variable for example a list of students, groceries, or test scores. Once you start writing scripts, you'll find yourself needing to write
arrays very often; for example, when you want to keep track of all user input, or when you want to have a list of options to present to the user.*/


//Creating arrays
/* You might be convinced by niow that arrays are great, so lets see how we can make them. There is actually a right way and a wrong way to do it.
Here are both. Which one do you think is the right one? */


arr1 = new Array("purple", "green", "yellow");
arr2 = ["black", "orange", "pink"];

//If you guessed the section option using square brackets, you are right. This is the best and most readable way to create a new array. On the other hand, the first
//option can do unexpected things. Look at both lines of code here. What do you think they will do.

arr3 = new Array(10);
arr4 = [10];

//Probably you sense that something is up here. They do not both create an array with one value 10. The second one does. the first option
//creates an array with 10 undefined values. If we log the values like this
console.log(arr3);
console.log(arr4);

//thanks javascript! that was very helpful. so unless that is what you need to do, please use square brackets!!!

//if you wanted to create multiple values in arr3 you could simply write 'arr3 = new Array(10, 20)' but again this is bad practice


/* As i already mentioned, we can have mixed arrays and arrays can hold any type of variable. these values of the array wont be converted to a single data type or anything like that
Javascript simply stores all the variables with their own data type and value in the array: 
*/


let arr = ["hi there", 5, true];
console.log(typeof arr[0]);
console.log(typeof arr[1]);
console.log(typeof arr[2]);

//The last array fun fact we will go over here is what happens if you define an array using const. You can change the values of a constant array, but you
//cannot change the array itself. Here is a piece of code to demonstrate:

const arr5 = ["hi there"];
arr5[0] = "new value";
console.log(arr5[0]);
console.log(arr5);

// arr5 = ["nope, now you are overwriting the array"];

//the new value for the first element of the array is going fine, but you cannot assign a new value to the full array
//it will output a type error

//it will output 
//new value
//TypeError: assignment to constant variable


//Accessing elements

/* This beatiful array we just made would become much more powerful if we could access its elements. We can do this by referencing the arrays index. This is
something we did not specify when we created the array. The first value is assigned the position of 0, the second 1, the third 2, and so on. If we want to call a specific
value based on its position in the array we can use the name of our array, and square brackets to the end and put the index we want to access between the square brackets like this
*/
cars = ["toyota", "ferrari", "lamborghini"];
console.log(cars[0]);


//the log statement will write toyota because we called for the position 0 of the array which outputs the first value of the list.



console.log(cars[1]);
//calling index position 1 is giving us the second element in the array, which is ferrari



console.log(cars[2]);

//calling index 2 is the third element in our array so this will log lamborghini 
//what do you think will happen if we use a negative index or an index that is higher than the number of values we get?

console.log(cars[3]);
console.log(cars[-1]);

/* We didnt assign a value to the negative or non-existent index, so when we ask for it, the value is undefined. As such the log output will be undefined
javascript does not throw an error because of this */


//overwriting elements

/* The elements in an array can be overwritten. This can be done by accessing a certain element using the index and assigning a new value: */
cars[0] = "Tesla";
console.log(cars[0]);


//The output of this log is tesla because it has overwritten the old value, toyota. if we output the whole array 

console.log(cars)

//it shows the updated values


//what happens when you try to overwrite an element that does not exist?

cars[3] = "kia";

//or even a negative index?

cars[-1] = "fiat";

console.log(cars[3]);
console.log(cars[-1]);

//and the output 
//kia
//fiat

/*Ha they suddenly exist? How is that you may wonder? we will discuss this in the next section. For now just remember that this is not the right way
to add values to the array. We will discuss the right way when we explain arrays in the arrays methods section */


//Built in length property
/* Arrays have a very useful built in property. Length. this will return the number of values that the array has: */
colors = ["black", "orange", "pink"];
booleans = [true, false, true, false];
emptyArray = [];

console.log("Length of colors:", colors.length);
console.log("Length of booleans:", booleans.length);
console.log("Length of emtpy array:", emptyArray.length);

//the first console.log call returns 3 indicating that colors array contains 3 values. the second one returns 4, and the last one returns 0.
/* So be aware that the length is one higher than the maximum index because the index of the array starts at 0, but when determining the length we look 
at the number of elements and there are four seperate elements in the boolean array. This is why the maximum index is 3 when the length is 4. hence the potential value of the last
element in the array will be one fewer than the total number of elements*/

//Take a moment to figure out how you can use the length to access the last element of the array:

lastElement = colors[colors.length - 1];
console.log(lastElement)

//this will print pink

//you get the highest index bt subtracting 1 from the length because as you know arrays are zero indexed. So the positional value of the last element in the
//array will be one fewer than the total number of elements


/* So this might seem pretty straightforward. Remember the non-existent index position we called in the previous section? lets see what happens in this example*/


