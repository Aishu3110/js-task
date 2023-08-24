//1. Write a JavaScript function to print the “Hello World” message
//Function `displayMessage()` prints “Hello World” string using console.log() function

function displayMessage()
{
    console.log(`"Hello World"`)
}
displayMessage()

//"Hello World"

//2. Write a function that returns the square of a number
//Function `findSquare()` returns the square of the input number which is passed as an argument in the function call.

function findSquare(n)
{
 return n*n;
}
console.log(findSquare(2))

//4

//3. Write a function to convert Celsius to Fahrenheit
//Function `calFahrenheit()` returns the converted Celsius value to Fahrenheit value based on the formula `(Celsius × 9/5) + 32 = Fahrenheit`

function calFahrenheit(celval)
{
let far=(celval*(9/5))+32;
return far;
}
console.log(calFahrenheit(2))

//35.6

//4. Write a function to find the area of a given Rectangle
//Function `rectangleArea()` returns the rectangle area provided the width and height as the argument.

let rectangleArea=(w,h)=>w*h;
console.log(rectangleArea(20,40))

//80

//5. Write a function to find the area and perimeter of a Circle
//Function `circleValues()` returns the perimeter and area of the circle provided the radius as an argument for the function call.

let circleValues=(r)=>{
    console.log(`Area and perimeter of circle is ${(Math.PI*r*r).toFixed(2)} and ${(2*Math.PI*r).toFixed(2)}`)
}
circleValues(20)
​
//output:Area and perimeter of circle is 1256.64 and 125.66

//6. Write a function to reverse a number
//Function `reverseNum()` returns the reversed number for the given argument number value.

function reversenum(num){
    num=num+"";
    return num.split("").reverse("").join("");
}
console.log(reversenum(32243)); //34223

//7. Count number of Vowels in String
//Function `countVowel()` returns the number of vowels in input string.

function countVowels(s) {
    //regex to get vowels
    var c = s.match(/[aeiou]/gi);
    return c === null ? 0 : c.length;
  }
  
  //call countVowels function
  console.log(countVowels(s))  //5

//8. Flatten array of arrays using JavaScript reduce
//Function `flattenArr()` flattens a 2D array by combining each sub array into 1D array by using JavaScript reduce.

function flattenArr(arr) {
    return arr.reduce((result, array) => result.concat(array));
  }
  
  console.log(flattenArr([[1, 2, 3], [4, 5, 6], [7, 8, 9]]))
  // [1, 2, 3, 4, 5, 6, 7, 8, 9]

//9. Write a function to calculate simple interest based on the principle amount
//Function `simpleInt()` returns a final amount based on the simple interest formula provided principal amount, rate of interest per year, and time on a yearly basis.

function simpleInt(principle, rate, time) {
    var finalAmt=principle + principle*time*rate;
    return finalAmt; 
  }
  
  console.log(simpleInt(20000,5,2)) //220000

//10. Write a function to generate a random number
//Function `genRandom()` return a generated random integer number between the provided start and end range.

function genRandom(start, end) {
    return Math.floor(Math.random() * end) + start
  }
  
  console.log(genRandom(1,10)) // 9
