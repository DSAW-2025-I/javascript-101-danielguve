// Sum of Two Numbers
function sum(a, b) {
  if (typeof a !== "number" || typeof b !== "number") {
    console.log("Malos datos");
    return; 
  }
  return a + b;
}

// Factorial of a Number
function factorial(n) {
  if (typeof n !== "number" || !Number.isInteger(n) || n < 0) {
    console.log("Malos datos");
    return;
  }
  if (n === 0) return 1; 
  let result = 1;
  for (let i = 1; i <= n; i++) {
    result *= i;
  }
  return result;
}

// Find the Largest Number
function findLargest(arr) {
  if (!Array.isArray(arr) || arr.length === 0) {
    console.log("Malos datos");
    return;
  }
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
  if (typeof str !== "string") {
    console.log("Malos datos");
    return;
  }
  let vowels = "aeiouAEIOU";
  let count = 0;
  for (let i = 0; i < str.length; i++) {
    if (vowels.includes(str[i])) {
      count++;
    }
  }
  return count;
}

// Check if a Number is Prime
function isPrime(n) {
  if (typeof n !== "number" || !Number.isInteger(n) || n < 2) {
    console.log("Malos datos");
    return;
  }
  for (let i = 2; i <= n / 2; i++) {
    if (n % i === 0) return false; 
  }
  return true;
}

// Exportar funciones para pruebas en Node.js
module.exports = {
  sum,
  factorial,
  findLargest,
  countVowels,
  isPrime,
};

