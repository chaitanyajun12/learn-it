"use strict";

// All value comparisons in JS consider the type of values being compared 
// and then decide to perform conversion (coercion) or no.

//  1. === compares values and disallows to perform coercion.
//  2. == is exactly same as === if types are same for the values being compared.
//     If types are different, then compares values post performing coercion. Converts 
//     non-number values to numbers and then performs comparison.

console.log(42 == "42"); // true
console.log(42 === "42"); // false
console.log(null == undefined); // true
console.log(null === undefined); // false
console.log(null === null); // true
console.log(3 === 3.0); // true
console.log(0 == false); // true

console.log(NaN === NaN); // false :O
console.log(0 === -0); // true

//  3. <, >, <=, >= behave similar to ==. If the types match they behave strict and match
//     the values, otherwise coercion is performed and then comparison happens.

// Non-number values are converted to numbers and then compared.
console.log("1000" > 500); // true

// If both values are strings, then alphabetical (like dictionary) comparison happens.
console.log("100" < "2"); // true

//  4. For object values only the refernce values which points to the actual object are compared.
//     === is not designed for structural equality but for comparing reference values.

var arr = [1, 2, 3];
var newArr = arr;

console.log(newArr == arr); // true
console.log(newArr === arr); // true
console.log(arr === [1, 2, 3]); // false