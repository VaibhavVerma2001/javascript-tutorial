// 1. bind, call, and apply in JavaScript
// All three come from Function.prototype and are used to explicitly control the this value inside a function.

// 1- 🔹 call
// Invokes a function immediately with an explicitly provided this value, and passes arguments individually (comma-separated).
// functionName.call(thisValue, arg1, arg2, ...)

const greet = function (city, state) {
  console.log(`Hi ${this.firstName} ${this.lastName}, from ${city}, ${state}`);
};

let person = {
  firstName: "Vaibhav",
  lastName: "Verma",
};

greet.call(person, "Lucknow", "UP"); // this -> person, arg1 = Lucknow, arg2 = UP

// Your code won’t work as intended because:
// call expects the first argument to be the value for this,
// but your greet function is an arrow function, and arrow functions do not have their own this.
// They simply use the this from the surrounding lexical scope, so .call() has no effect.
// const greet = (obj, city) => {
//   console.log(`Hi ${this.firstName} ${this.lastName}, from ${city}`);
// };

// greet.call(person, "Lucknow"); // Hi undefined undefined, from undefined

// 2- 🔹 apply
// Works the same as call, but takes arguments as an array.
// functionName.apply(thisValue, [arg1, arg2, ...]);

greet.apply(person, ["Lucknow", "UP"]); // Hi Vaibhav Verma, from Lucknow, UP

// 3- 🔹 bind
// Returns a new function with a permanently bound this value and optionally pre-filled arguments.
// Does not execute immediately (gives copy of the method) — you must call the returned function yourself.
let func = greet.bind(person, "Lucknow", "UP");
console.log(func); // [Function: bound greet]
func(); // Hi Vaibhav Verma, from Lucknow, UP