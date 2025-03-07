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
values inside one variable for example a list of students, groceries, or test scores. Once you start writing scripts, you'll find yourself needing to write
arrays very often; for example, when you want to keep track of all user input, or when you want to have a list of options to present to the user.*/


//Creating arrays
/* You might be convinced by now that arrays are great, so lets see how we can make them. There is actually a right way and a wrong way to do it.
Here are both. Which one do you think is the right one? */


arr1 = new Array("purple", "green", "yellow");
arr2 = ["black", "orange", "pink"];

//If you guessed the second option using square brackets, you are right. This is the best and most readable way to create a new array. On the other hand, the first
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
console.log(arr5);
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



/* Do not worry if this is too difficult for now; it will become clear soon enough. We are writing the function in two different ways in the following code snippet:
They are actually doing the same except that the first one is checking for an element being equal to 6, and the second for an element being equal to 10*/

arr10 = [2, 6, 7, 8];
let findValue = arr10.find(function(e) { return e === 6});
let findValue2 = arr10.find(e => e === 10);
console.log(findValue, findValue2);

/* The log statement will log 6 and undefined because it can find an element that matches for 6, but not one that matches for 10*/

/* A function can take a certain input . in this case it takes the element of the array as input. When the element of the array equals 6 or 10 it returns the element
In chapter 6 we will cover functions in much more detail. it is alot for a beginner to take in so you can review this a bit later if it is unclear for now




Often you do not only want to find the element, but you want to know what position it is on. This can be done with the indexOf() method. This method returns
the index on which the value is found. If a value occurs in an array more than once, it will return the first occurance. if the value is not found, it will 
return -1: */


let findIndex = arr10.indexOf(6);
let findIndex2 = arr10.indexOf(10);
console.log(findIndex, findIndex2);



/* So the first one will return 1 since that is the index position of 6 in the array. The second one will return -1 because the array does not contain 10.


if you want to find the next occurrence of the specified number, you can add a second argument to indexOf(), specifying from which position it should start searching
useful if you have numerous values that are the same*/


let findIndex3 = arr10.indexOf(6, 2);
console.log(findIndex3);

//this would log -1 because 6 cannot be found starting from index 2


//the last occurrence can also be found. This is done with the lastIndexOf() method.

let animals = ["dog", "horse", "cat", "platypus", "dog"];
let lastDog = animals.lastIndexOf("dog");
console.log(lastDog);

//the value of lastDog will be 4 because that is the last occurrence of dog in the array.


//Sorting
/* There is also a built in method for sorting arrays. it sorts numbers from small to high and strings A-Z. you can call sort() on an array and the order
of the values of the array will change to a sorted order*/

let names = ["James", "Alicia", "Fatiha", "Maria", "Bert"];
names.sort();
console.log(names);


/* As you can see the array is now sorted alphabetically. For numbers it is sorting them in ascending order, as you can see in the following code snippet 
*/

let ages = [18, 72, 33, 56, 40];
ages.sort();
console.log(ages);





//Reversing
/* The elements of the array can be reversed by calling the built in method, reverse(), on an array. it puts the last element first and the first element last, it does not matter
whether the array is sorted or not, it just reverses the order*/

names.reverse();
console.log(names);


//prac excercise
//create an empty array
//add milk bread and apples
//update bread with bananas and eggs
//remove the last item and output it into the console
//sort the list A_Z
//find and output the index value of milk
//after bananas add carrots and lettuce
//create a new list containing pop and juice
//combine both lists adding the new list twice to the end of the first list
//get the last index value of pop and output it to the console

/*new challenge here 
*/








const myList = [];
myList.push("Milk", "Bread", "Apples");
myList.splice(1, 1, "Bananas", "Eggs");
console.log(myList)
const lastItem = myList.pop();
console.log(lastItem);
myList.sort();
let findIndex4 = myList.indexOf("Milk");
console.log(findIndex4);
console.log(myList);
myList.splice(1, 0, "Carrots", "Lettuce");
console.log(myList);
const newList2 = ["Juice", "Pop"];
newList3 = myList.concat(newList2, newList2)
console.log(newList3)
let findIndex5 = newList3.lastIndexOf("Pop");
console.log(findIndex5);


//Multidimensional arrays

/* Earlier we established already that arrays can contain any data type. This means that arrays can also contain other arrays (which in turn can contain 
    other arrays) This is called multidimensional arrays. it sounds complicated but it is just an array of arrays: a list of lists:
*/

let someValues1 = [1, 2, 3];
let someValues2 = [4, 5, 6];
let someValues3 = [7, 8, 9];

let arrOfArrays = [someValues1, someValues2, someValues3];
console.log(arrOfArrays);

//so we can create an array of already existing arrays. This is called a two-dimensional array. We can write it like this;

let arrOfArrays2 = [[1, 2, 3], [4, 5, 6], [7, 8, 9]];
console.log(arrOfArrays2);


//if you want to access elements of the inner arrays you will have to specify an index twice. 

let value1 = arrOfArrays[0][1];
console.log(value1);


//the statement will grab the first array because it has an index position of 0. From this first array, it will take the second value because it has an index
//position of 1. then it will store this value in value1. That means the value of value1 will be 2. can you figure out the next value of the example below


let value2 = arrOfArrays[2][2];

//it takes the third array and from this array it takes the third value thus 9 will be logged in the console. and it does not stop here; it can go many levels deep.
//lets show that by creating an array of our array of our arrays. we are simply going to store this array three times in another array


arrOfArraysOfArrays = [arrOfArrays, arrOfArrays, arrOfArrays];
console.log(arrOfArraysOfArrays);


//this is what it will loook like in terms of values

// [
//     [ [1, 2, 3 ],  [ 4, 5, 6 ], [ 7, 8, 9] ],
//     [ [1, 2, 3 ],  [ 4, 5, 6 ], [ 7, 8, 9] ],
//     [ [1, 2, 3 ],  [ 4, 5, 6 ], [ 7, 8, 9] ]
// ]



//lets get the middle element of this array which is the value 5, belonging to the 


const middleElement = arrOfArraysOfArrays[1][1][1];
console.log(middleElement);
/* The first step is to get the second array of arrays which is index 1, then we need to get the second array of this one which is again 1
now we reach the level of the values and we need the second value so we again use 1. this is useful in many situations for example when you want to work
with matrices */

arrOfArraysOfArraysOfArrays = [arrOfArraysOfArrays, arrOfArraysOfArrays, arrOfArraysOfArrays ]

console.log(arrOfArraysOfArraysOfArrays)

const secondSeven = arrOfArraysOfArraysOfArrays[0][1][2][0];
console.log(secondSeven);
// [

// [
//     [ [1, 2, 3 ], [ 4, 5, 6 ], [ 7, 8, 9] ],
//     [ [1, 2, 3 ], [ 4, 5, 6 ], [ 7, 8, 9] ],
//     [ [1, 2, 3 ], [ 4, 5, 6 ], [ 7, 8, 9] ]
// ],
// [
//     [ [1, 2, 3 ], [ 4, 5, 6 ], [ 7, 8, 9] ],
//     [ [1, 2, 3 ], [ 4, 5, 6 ], [ 7, 8, 9] ],
//     [ [1, 2, 3 ], [ 4, 5, 6 ], [ 7, 8, 9] ]
// ],
// [
//     [ [1, 2, 3 ], [ 4, 5, 6 ], [ 7, 8, 9] ],
//     [ [1, 2, 3 ], [ 4, 5, 6 ], [ 7, 8, 9] ],
//     [ [1, 2, 3 ], [ 4, 5, 6 ], [ 7, 8, 9] ]
// ]

//]


//the above would be just index 0 of the new array . There would be two more of these same arrays. to target 9 in the third set of index 0 try to follow the code below
exampleDeep = [arrOfArraysOfArraysOfArrays, arrOfArraysOfArraysOfArrays, arrOfArraysOfArraysOfArrays];
console.log(exampleDeep)
const deepNine = exampleDeep[0][2][2][2][2];
console.log(deepNine)


//practice
//create an array containing 3 values
//nest the original array into a new array three times
//output the value 2 from one of the arrarys into  the console

let practiceArray = [1, 2, 3];
let newArray = [practiceArray, practiceArray, practiceArray];
let twoValue = newArray[2][1];
console.log(newArray, twoValue);







/* Objects in javascript



Now its time to have a look at another complex data structure that can contain more than one value; objects! Objects are very useful and can be used to 
describe real-life objects as well as more complex abstract concepts that allow for more flexibility in your code.



Secretly, you have just been introduced to objects already, because arrays are a very special type of object. Arrays are objects with indexed properties.
All the other objects, and also the objects we will see here, are objects with named properties. This means that instead of an automatically generated 
index number, we will give it a custom descriptive name.


As we can tell from the following code, arrays are defined by javascript as being of the object type
*/


let exArr = [0, 1, 2];
console.log(typeof exArr);

//the output will be object

//Objects are not too dissimilar to real world objects. They have properties and they can perform actions, methods. Here we will only deal with the properties. We will
//cover methods in chapter 7 after we have seen functions in 6. An object is a chance to group multiple variables into one. This is done with curly brackets
//{ } . Lets have a look at this object here



let dog = {
    dogName: "javascript",
    weight: 80.0,
    color: "brown",
    breed: "golden",
    age: 9,
    burglarBitter: true
};

console.log(typeof dog);

/* We created a variable dog, and we gave this an object as a value. We can recognize that this is an object by seeing the {}. In between the curly braces, we see
a bunch of properties and their values. */

/* If you have ever wondered whether something should be a property, just try the following template sentence in your head:

*objectname has a(n) *propertyname   */

/* For example, a dog has a name, a dog has a color, and a dog has weight. This is slighly different for the boolean properties, for which you can
use is or is not instead of has



We can access the properties of this object in a very similar way as we would with the array. This time, we are not using the index number, but the 
name of this property to get the value
*/



let dogColor1 = dog["color"];

//There is also another way to do this. Instead of using the square brackets, the property name can also be added to the object name with a dot inbetween

let dogColor2 = dog.color;

//This might look familiar. do you remember how we got the length of an array with the length built in property. Yes- the same way. The difference
//between properties and methods is the lack of parenthesis for properties.




//Updating objects

/* We can change the value of properties of the objects. Again, this is similar to an array because an array is an object as well, but for properties
we have two options:
*/



dog["color"] = "gold";
dog.weight = 85;

//This has changed the properties of our golden javascript. The color gets updated to to gold and is has gained some weight since the new weight is a couple
//lbs higher so if we log our dog

console.log(dog);



//its useful to note that if we change the data type of one of our properties for example

dog["age"] = "nine";

//This is not a problem javascript will just change the whole value and data type to the new situation. 


//Another element to note that is that we are now using the literal string values to refer to the objects properties, but we can also work with variables
//to achieve this for example


let variable = "age";
console.log(dog[variable]);

/*This will still output nine as just changed the value of age to nine. if we change the value of the variable to another dog property, we will be accessing
another property like this */

variable = "breed"
console.log(dog[variable]);

//this will print golden. And when we update the value accessing this way it is the exact same as when we would have accessed it with the literal string

dog[variable] = "dachshund";
console.log(dog["breed"]);


//practice excercise


let myCar = {
    make: "kia",
    model: "model-y",
    color: "blue",
    miles:  200,
    isFast: true
};

let newVariable = "color";

myCar[newVariable] = "purple";
console.log(myCar);

newVariable = "forSale";

myCar[newVariable] = true;
console.log(myCar);

console.log(myCar.model + " " + myCar["make"]);

console.log(myCar.forSale);





//Working with objects and arrays

/* When working with objects and arrays, you will see these often combined. In the last section of this chapter, we will deal with combining objects
and arrays and also objects into objects


Objects in objects 


lets say we want to have an object for a company. This company will have an address. And an adress is another object. If we give our company an address, we 
are using a object inside an object:*/



let company = {
    activity: "food manafacturing",
    address : {
        street: "2nd street",
        number: "123",
        zipcode: "33116",
        city: "Miami",
        state: "Florida"
    },
    yearOfEstablishment: 2021
};


//as you can see, our company has an address object with values. This can go very many levels deep if necessary.

//To access or modify one of the properties of the address here, we can use two approaches.

company.address.zipcode = "33117";
company["address"]["number"] = "100";


//as you can see this is very similar to the array. We first need to select the address and then do the same thing to access the property we want to change



//Arrays in objects 

/* Our company might have a range of activities instead of one. We can simply replace the activity from our previous sample with an array:
*/

let company2 = { companyName: "Healthy Candy",
                activities: ["food manufacturing", "improving kids' health", "manufacturing toys"],
                address: {
                  street: "2nd street",
                  number: "123",
                  zipcode: "33116",
                  city: "Miami",
                  state: "Florida"
                },
                yearOfEstablishment: 2021 
              };


/* We have now used an array in our company object. You can simply use an array with the square braces after the property. Retrieving the individual 
values is very similar with square braces after the property. The second value of the activities array can be fethed using this statement:
*/

let activity = company2.activities.indexOf("improving kids' health");
let activity2 = company2.activities[1];
console.log(activity, activity2);

//here we call the object were interested in, company then the relevant array, activities, with reference to the index position of the variable were looking for which is 1



//Objects in arrays

/* It is very possible that instead of one address our company has a list of addresses. We can accomplish this by creating an array of address objects. in this case
we will create an array of two

*/


let addresses = [{
    street: "2nd street",
    number: "123",
    zipcode: "33116",
    city: "Miami",
    state: "Florida"
  },
  {
    street: "1st West avenue",
    number: "5",
    zipcode: "75001",
    city: "Addison",
    state: "Texas"
  }];


console.log(addresses)
  /* So the array can be recognized by the square brackets and the objects by the curly brackets. the street name of the first object can be fetched using this statement
  
  */


  let streetName = addresses[0].street;
  console.log(streetName);



  /* Here we call the array were interested in, addresses, with reference to the index position of the object were looking for within the array 0 and then
  the required variable from within the object which is street. This may seem complicated but from an array inside an object from the previous section its
  worth practicing calling variables from nested arrays and objects until youre comfortable with it*/



  /* Objects in arrays in objects
  
  
  Just to show that this can go as many levels as we would need, we are going to give our company object an array of address objects. so lets add this array of adress objects
  to our company object. This way our company has an array of adresses.
  */

  let company3 = { companyName: "Healthy Candy",
                    activities: ["food manufacturing", "improving kids' health", "manufacturing toys"],
                    address: [{
                      street: "2nd street",
                      number: "123",
                      zipcode: "33116",
                      city: "Miami",
                      state: "Florida"
                    },
                    {
                      street: "1st West avenue",
                      number: "5",
                      zipcode: "75001",
                      city: "Addison",
                      state: "Texas"
                    }],
                    yearOfEstablishment: 2021 
                  };


/* To access elements of increasingly nested objects an arrays we simply extend the same logic you have seen in the previous sections. To access the street name
of healthy candys first address we can use the following code: 
*/


let streetName1 = company3.address[0].street;

console.log(streetName1);



//as you can see we can stack object and array element requests indefinintely.

/* We will not make it any more complicated than this for now. Whenever you need a list of something you will be using an array. Whenever you want to 
represent something with properties that have descriptive names, it is better to use an object. just remember that object properties can be of any type
*/

//practice

const people = {
    friends : []
};

const friend1 = {
        first: "dakota",
        last: "smith",
        id : 1
};
const friend2 = {
        first: "jacob",
        last: "davis",
        idValue : 2
};
const friend3 = {
        first: "ryan",
        last: "smith",
        idValue : 3
};


people.friends.push(friend1, friend2, friend3);

console.log(people)
console.log(people.friends[0].first);

//chapter projects

const theList = ['Laurence', 'Svekis', true, 35, null, undefined, {test: 'one', score: 35}, ['one', 'two']];
theList.pop();
theList.shift();
theList.unshift('FIRST');
theList.splice(4, 3, 'hello world');
theList.splice(2, 2, 'MIDDLE');
theList.push("LAST")
console.log(theList);



const inventory = [];

const item1 = {
        name: "iphone",
        model: 12,
        cost: 800,
        quantity: 1
};
const item2 = {
        name: "tree",
        model: "sequoia",
        cost: 50,
        quantity: 3
};
const item3 = {
        name: "pizza",
        model: "Dominos",
        cost: 8,
        quantity: 2
};


inventory.push(item1, item2, item3);
console.log(inventory);
console.log(inventory[2].quantity); //get item3 quantity
console.log(inventory[0].name) //get item1 name value
console.log(inventory[1].model) // get model of item2


/* Summary 
  so in this chapter, we have seen arrays and objects. Arrays are a list of values. These could be values of the same type, but also values of different types
  . Every element of the array gets an index. The index of the first element is 0. We can access the elements of the array using this index. We can also use the index
  to change and delete the element
  
  
  We then saw that it is also possible to have arrays containing other arrays, these are multidimensional arrays. To access the elements of a multi-dimensional arrau
  you would need to use as many indices as you have nested arrays
  
  
  
  Then we convered objects and learned that arrays are a special kind of object. Objects contain properties and methods. We looked at the properties
  of objects and saw that these properties are given a name and can be accessed and modified using this name
  
  
  We ended this module by looking at how arrays can contain objects and how objects can contain arrays and more. This enables us to create complex object structures,
  which will be of great use in designing real life applications
  */
