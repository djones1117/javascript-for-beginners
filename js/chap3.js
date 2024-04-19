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


 numbers = [12, 24, 36];
 numbers[5] = 48;
 console.log(numbers.length);
 
 //the length of the array is only counting integer numbers starting from 0 up to the highest filled index. if there are elements in the middle of the
 //sequence that do not have a value, they will still get counted. In this case, length becomes 6. if we log the array we can see why 

 console.log("numbers", numbers);

 /* Because we added an element, 48 at an index 5, it also created 2 new elements at index positions 3 and 4 containing empty values. For now, lets have a look 
 at array methods and find out the right way to add to an array */



 //1 create an array to use as your shopping list with 3 items
 //2 check your list length in the console
 //3 update bread to bananas 
 //4 output your entire list to the console

 const list = ["Milk", "Bread", "Apples"];
 console.log(list.length);
 list[1] = "Bananas";
 console.log(list);


 //Array methods

 /* We have just seen the built in length property. We also have seen a few built-in methods. Methods are functions on a certain object. Instead of holding a value
 like properties,they perform actions. We will cover functions in depth in chapter 6 for now all you need to know is that you can call methods and functions
 and when you do some code that is specified inside that function gets executed
 
 
 
 We just accidentally saw we could add elements using new indices. This is not the proper way to do it as it is easy to make mistakes and overwite a certain value
 or skip a certain index. The right way is to do this with a special method. Similarly, we can also delete elements and sort the elements in the array*/


 //Adding and replacing elements

 //we can add elements with the push method
 favoriteFruits = ["grapefruit", "orange", "lemon"];
 favoriteFruits.push("tangerine");
 //the value gets added to the end of the array. the push method returns the new length of the array four in this case. you can store this length in a variable like this

 let lengthOfFavoriteFruits = favoriteFruits.push("lime");
 console.log(lengthOfFavoriteFruits)
//the value 5 gets stored in lengthoffavoritefruits variable. If we log our array, favoritefruits 

console.log(favoriteFruits);

//easy right? But what if you need to add elements at a certain index? you can use the splice method. This one is slightly more difficult

let arrOfShapes = ["circle", "triangle", "rectangle", "pentagon"];
arrOfShapes.splice(2, 0, "square", "trapezoid");
console.log(arrOfShapes);

/* First lets point out the different layouts of this output. This might depend on the interpreter you are using but at some point, it will decide it is too long
for a single line and apply an automatic format to the array to make it more readable. It doesn't change the value of the array; it is just a different representation of the same
values were they to be on a single line */

/* as you can see the square and trapezoid get inserted on index 2. the rest of the array is shifting to the right. The splice method takes multiple 
parameters the first param 2 in our case, is the index value of the array on which we want to start inserting. The second param 0 in our case is the 
number of elements that we want to delete starting at our previously defined started index. the params after these first two, square and trapezoid in our case 
are whatever should be inserting at the start index */


//so had we said this instead

// arrOfShapes.splice(2, 2, "square", "trapezoid")
// console.log(arrOfShapes)


//it would delete the rectange and pentagon and add in square and trapezoid in there place


//if you were to increase the second param to a number higher than our array, it would not affect the result as javascript would simply stop as soon
//as it runs out of values to delete. Try the following code


arrOfShapes.splice(2, 12, "square", "trapezoid")
console.log(arrOfShapes)

//it would have the same output as the splice method in the example above this last one


/* You can also add another array to your array. This can be done with the concat() method. This way you can create a new array that consists of a 
concatenation of both arrays. The elements of the first array will be first, and the elements of the argument of concat() will be concatenated to the end
*/


let arr6 = [1, 2, 3];
let arr7 = [4, 5, 6];
let arr8 = arr6.concat(arr7);
console.log(arr8);


//The concat method can do more. We can use it to add values as well. We can 
//add a single value or we can comma seperate multiple values

let arr9 = arr8.concat(7, 8, 9);
console.log(arr9);


//Deleting elements

/* There are several ways in which you can delete elements from an array. Removing the last element is done with pop():
*/

arr9.pop();
console.log(arr9);


//Deleting the first element can be done with shift(); This causes all other indices to be reduced by one:
 
arr9.shift();
console.log(arr9);


//we can use unshift to add one or more elements to the beginning of array. This causes all other indices to be increased by one: returns the new length of the array after
//elements have been added

let newLength = arr9.unshift(1);
console.log(newLength);
console.log(arr9);

/* Remember splice? This is a very special method because we can also use it to delete values. We specify the index from where we want to start deleting 
and then the number of elements we want to delete: */


arr9.splice(5, 2);
console.log(arr9);

/* as you can see 2 elements starting from the 5th positional index have been deleted. The values 6 and 7 are gone. If you do not wish to change any of the 
later indices you can also use the operator delete. This is not a method, but you can use it to change the value of a certain position of the array to undefined */


delete arr9[0];
console.log(arr9);


/* This is useful when you are relying on index or length for some reason. For example, if you are keeping user input and you want to determine the number
of user inputs based on an array that the user is pushing to, deleting would decrease the number of inputs whereas that might not be what you want*/



//Finding elements
/* If you want to check whether a value is present in an array, you can use the find() method. What will go in the find() method is somewhat different
It is actually a function. This function will be executed on every element in the array until it finds a match, and if it does not, then it will return undefined
*/



/* */
