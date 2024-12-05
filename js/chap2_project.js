//Create a variable that contains miles, convert it to kilometers, and log the value in kilometers in the following format

// The distance of 130 kms is equal to 209.2142 miles


//for reference, 1 mile equals 1.60934 kilometers


let miles = 130;
let milesToKilo = miles * 1.60934;
let message = "The distance of " + miles + " miles is equal to " + milesToKilo + " kilometers";
console.log(message);




//BMI calculator

//Set values for height in inches and weigh in pounds, then convert the values to centimeteres and kilos, outputting the results to the console


//1 inch is equal to 2.54cm 
//2.2046 pounds is equal to 1 kilo

//output the results. Then, calculate and log the BMI: this is equal to weight(in kilos) divided by squared height (in meteres). out put results to the console


let inches = 72; 
let pounds = 205; 

let height = inches * 2.54;
let weight = pounds / 2.2046;
console.log(height, weight)
let bmi = weight/(height/100*height/100);
console.log(bmi)

let total = 16;
let total2 = 500 + 100 / 5 + total--;
console.log(total2)

// add project here - make commit so you can see this message