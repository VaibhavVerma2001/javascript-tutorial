// 🔹 Stack Memory
// Stack is used for static memory allocation — for primitive values and function calls.
// It is fast, organized, and follows the LIFO (Last In, First Out) structure.

// ✅ Stored in Stack:
// Primitive types (string, number, boolean, null, undefined, symbol, bigint)

// Function execution contexts
let person1 = "Vaibhav Verma";
let person2 = person1;

person2 = "New name"; // Stack, bec primitive DT, will not change person1

console.log(person1);
console.log(person2);

// 🔹 Heap Memory
// Heap is used for dynamic memory allocation — for reference types like objects, arrays, functions.
// It is slower and used for larger, more complex memory.

// ✅ Stored in Heap:
// Objects
// Arrays
// Functions

const obj1 = {
  name: "Vaibhav",
  age: 20,
};

const obj2 = {obj1}; // Heap -> reference is passed

obj2.name = "abc";

console.log(obj1.name); // 'abc'
console.log(obj2.name); // 'abc'

let arr1 = [1, 2, 3];
let arr2 = arr1; // Heap -> passed by reference

arr2[2] = 100;
console.log(arr1);
console.log(arr2);
