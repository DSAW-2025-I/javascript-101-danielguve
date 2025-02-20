// Sum of Two Numbers
function sum(a, b) {
    return a + b;
}

// Factorial of a Number
function factorial(n) {
if (n === 0) return 1;
  
 
  if (n < 0) return "Error";

  return n * factorial(n - 1);

}

// Find the Largest Number
function findLargest(arr) {
  
 let largest = arr[0];  
  
  for (let i = 1; i < arr.length; i++) {
  
    if (arr[i] > largest) {
      largest = arr[i];
    }
  }

  return largest;
  }


// Count Vowels in a String
function countVowels(str) {
  return str.split('').filter(char => 'aeiouAEIOU'.includes(char)).length;
}
function isPrime(n) {
 if (n <= 1) return false;
  

  for (let i = 2; i <= Math.sqrt(n); i++) {
    if (n % i === 0) return false;  
  }
  
  return true;
}

module.exports = {
  sum,
  factorial,
  findLargest,
  countVowels,
  isPrime,
};
