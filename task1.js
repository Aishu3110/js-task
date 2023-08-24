// 1. Write a JavaScript function that reverses a number.

function reversenum(num){
    num=num+"";
    return num.split("").reverse("").join("");
}
console.log(reversenum(32243)); //34223

// 2.Write a JavaScript function that checks whether a passed string is a palindrome or not?

function palindrome(str){
    const revstr=str.split("").reverse("").join("");
    if(str===revstr)
        return true;
    else
        return false;
}

console.log(palindrome("madam")); //true

// 4. Write a JavaScript function that returns a string that has letters in alphabetical order.

function alphabet(str){
    return str.split("").sort().join("");
}
console.log(alphabet("aishwarya")); //aaahirswy

//5. Write a JavaScript function that accepts a string as a parameter and converts the first letter of each word into upper case.

function uppercase(str)
{
  var array1 = str.split(' ');
  var newarray1 = [];
    
  for(var x = 0; x < array1.length; x++){
      newarray1.push(array1[x].charAt(0).toUpperCase()+array1[x].slice(1));
  }
  return newarray1.join(' ');
}
console.log(uppercase("the quick brown fox"));  //The Quick Brown Fox

//6. Write a JavaScript function that accepts a string as a parameter and finds the longest word within the string.

function longestWord(string) {
    var str = string.split(" ");
    var longest = 0;
    var word = null;
    str.forEach(function(str) {
        if (longest < str.length) {
            longest = str.length;
            word = str;
        }
    });
    return word;
}
console.log(longestWord("pride and prejudice")); //prejudice

//7. Write a JavaScript function that accepts a string as a parameter and counts the number of vowels within the string.
//Note : As the letter 'y' can be regarded as both a vowel and a consonant, we do not count 'y' as vowel here.

//given string
var s = "The quick brown fox"

//function to count number of vowels in a string
function countVowels(s) {
  //regex to get vowels
  var c = s.match(/[aeiou]/gi);
  return c === null ? 0 : c.length;
}

//call countVowels function
console.log(countVowels(s))  //5

//8.Write a JavaScript function that accepts a number as a parameter and checks whether it is prime or not.
//Note : A prime number (or a prime) is a natural number greater than 1 that has no positive divisors other than 1 and itself.

function test_prime(n)
{

  if (n===1)
  {
    return false;
  }
  else if(n === 2)
  {
    return true;
  }else
  {
    for(var x = 2; x < n; x++)
    {
      if(n % x === 0)
      {
        return false;
      }
    }
    return true;  
  }
}

console.log(test_prime(37)); //true

function findType(a)
{
    return typeof(a)
}

//9. Write a JavaScript function that accepts an argument and returns the type.
// /Note : There are six possible values that typeof returns: object, boolean, function, number, string, and undefined.

console.log(findType(123))
console.log(findType(true))
console.log(findType({a:20}))
console.log(findType("hello"))
console.log(findType(["1",2]))
console.log(findType())
console.log(findType(()=>console.log('hi')))
//string
// number
// boolean
// object
// object
// undefined
// function








