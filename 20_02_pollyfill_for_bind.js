// 1. Why do we need a polyfill for bind?
// Before ES5, Function.prototype.bind() didn’t exist in some older browsers (like IE8).
// So if we wanted bind-like behavior, we had to write our own method.

// 2. How real bind() works
// Returns a new function.
// Permanently sets this to the provided object.
// Can partially apply arguments (pre-fill some arguments).
// Still works with extra arguments passed later.
// Supports using the function with the new operator (advanced case).

const greet = function (city, state) {
  console.log(`Hi ${this.firstName} ${this.lastName}, from ${city}, ${state}`);
};

let person = {
  firstName: "Vaibhav",
  lastName: "Verma",
};

// Basic Bind method
// let func = greet.bind(person, "Lucknow", "UP");
// console.log(func); // [Function: bound greet]
// func(); // Hi Vaibhav Verma, from Lucknow, UP

// Implementation -
// since bind returns function, so we need to return
if (!Function.prototype.myBind) {
  Function.prototype.myBind = function (context, ...args) {
    // 'this' here refers to the function being bound
    let fn = this;

    return function (...newArgs) {
      return fn.apply(context, [...args, ...newArgs]);
    };
  };
}

let func = greet.myBind(person, "Lucknow", "UP");
console.log(func); // [Function (anonymous)]
func(); //  Hi Vaibhav Verma, from Lucknow, UP