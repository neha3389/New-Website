// Write a JavaScript function that takes a number as input and 
//displays the multiplication table for that number (up to 10).

function multiplicationTable(num) {
    for (let a = 1; a <= 10; a++) {
         console.log(num * a);
     }
 }
 multiplicationTable(5);
 
 //Celsius to Fahrenheit Converter 
 //Write a JavaScript function that takes input for a temperature in Celsius from the user and converts it into Fahrenheit using the formula: 
 //Fahrenheit=(Celsius×9/5)+32
 
 function celsiusToFahrenheit(celsius) {
    let fahrenheit = (celsius * 9 / 5) + 32;
      console.log(fahrenheit);
 }
 celsiusToFahrenheit(8);
 
 
 //Positive or Negative Number Checker 
 //Write a JavaScript function that takes a number as input and displays whether the number is positive or negative..
 
 
 function checkNumber(number) {
     if (number > 0) {
        console.log("The Number is Positive number")
     } else if (number < 0) {
         console.log(" is a negative number.");
     } else {
         console.log("The number is zero.");
     }
 }
 checkNumber(-2);