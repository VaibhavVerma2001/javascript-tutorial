"use strict"; // Treat all js code to newer version

// JavaScript has 8 Datatypes

// PRIMITIVE DT
// String
// Number
// Bigint
// Boolean
// Undefined ==> declared but not assigned a value.
// Null ==> standalone value( intentional absence),explicitly assigned
// Symbol

// NON-PRIMITIVE DT
// Object

console.log(undefined == null); // true (loose comparison)
console.log(undefined === null); // false (strict comparison)

console.log(typeof null); // object
console.log(typeof undefined); // undefined

// Data type conversion
let score = "33abc";
let num = Number(score);
console.log(num); // NaN
console.log(typeof num); // number
console.log(typeof NaN); // number

console.log(NaN === NaN); // false
console.log(NaN == NaN); // false

console.log(Number.isNaN(NaN)); // true
console.log(Number.isNaN(33)); // false

console.log("1" + "2");   // 12
console.log("1" + 2);     // 12
console.log(1 + "2");     // 12
console.log("1" + 2 + 2); // 122
console.log(1 + 2 + "2"); // 32 // left to right

console.log("10" - 5); // 5
console.log(10 - "5"); // 5


let a = 10;
let b = a++;
console.log(b); // 10
console.log(a); // 11


let c = 10;
let d = ++c;
console.log(d); // 11
console.log(c); // 11


console.log(null > 0); // false
console.log(null == 0); // false
console.log(null >= 0) // true
// reason - == and >,<,<=,<= works differentely, comparisions treat null as 0, so thats why null >= 0 is true


console.log(undefined > 0); // false
console.log(undefined == 0); // false
console.log(undefined >= 0) // false