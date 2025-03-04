function sum(a, b) {
 if (!(a instanceof Number) || !(b instanceof Number))
 {

    console.log("Los datos de entrada no son adecuados");
    return;
  }
  return a + b;
}

// Factorial of a Number
function factorial(n) {
  if (n !== parseFloat(n) || Math.floor(n) !== n || n < 0)
 {
    console.log("Los datos de entrada no son adecuados");
    return;
  }
  if (n === 0) return 1; 
  let fact = 1;
  for (let i = 1; i <= n; i++) {
    fact *= i;
  }
  return fact;
}

// Find the Largest Number
function findLargest(arr) {
  if (!Array.isArray(arr) || arr.length === 0 || arr.some(item => typeof item !== "number")) {
  console.log("Los datos de entrada no son adecuados");
  return;
}

let max = arr[0];
for (let i = 1; i < arr.length; i++) {
  if (arr[i] > max) {
    max = arr[i];
  }
}
return max;

}

// Count Vowels in a String
function countVowels(str) {
  if (typeof str !== "string") {
    console.log("Los datos de entrada no son adecuados");
    return;
  }
  return (str.match(/[aeiouáéíóúAEIOUÁÉÍÓÚ]/g) || []).length;
}

// Check if a Number is Prime
function isPrime(n) {
  if (n !== parseFloat(n) || Math.floor(n) !== n || n < 2)
 {
    console.log("Los datos de entrada no son adecuados");
    return;
  }
  for (let i = 2; i <= Math.sqrt(n); i++) { 
    if (n % i === 0) {
      return false;
    }
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
