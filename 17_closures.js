// 🔍 What is a Closure?
// A closure is a function that remembers and has access to variables from its lexical scope, even when that function is executed outside of its original scope.
// 📌 Lexical scope + function return = Closure

// In simpler terms:
// A closure is created when a function is defined inside another function, and the inner function uses variables from the outer function. JavaScript keeps those variables alive even after the outer function has returned.

function outer() {
  let count = 0;

  function inner() {
    count++;
    console.log("Inside : ", count);
  }

  console.log("outside : ", count);

  return inner;
}

// ✅ Version 1 (Correct/Expected Behavior):
const increment = outer(); // Closure created once, outer is gone now. not in call stack
increment(); // 1
increment(); // 2
increment(); // 3
// OP -
// outside :  0
// Inside :  1
// Inside :  2
// Inside :  3
// outer() is called once, and returns a single function (increment) that has access to its own count variable via closure.
// Every time increment is called, it increments the same count.
// count is preserved across calls because inner() remembers its lexical environment from when it was created.
// inner() still has access to count, even though outer() has already finished executing.
// increment is tied to that one count variable.

// ❌ Version 2 (Incorrect/Unexpected Behavior):
outer();
outer();
outer();
// OP -
// outside :  0
// outside :  0
// outside :  0
// 🔍 What’s happening:
// outer() is called 3 separate times.
// Each time:
// A new count = 0 is created.
// "outside : 0" is printed.
// A new inner() function is returned — but you don’t store it or call it.

// 💼 Why Are Closures Useful in Real Projects?
// Data privacy / encapsulation (like private variables in classes)
// Function factories
// Callbacks and event handlers
// Memoization / caching
// setTimeout / setInterval with preserved context

// 1. Data Privacy / Encapsulation
// Closures help you create private variables that are not accessible from the outside, similar to private properties in classes.
// ✅ Example:
function createCounter() {
  let count = 0; // private variable

  return {
    increment() {
      count++;
      return count;
    },
    decrement() {
      count--;
      return count;
    },
  };
}

const counter = createCounter();
console.log(counter.increment()); // 1
console.log(counter.decrement()); // 0
console.log(counter.count); // undefined (count is private)

// ⚠️ Gotchas to Mention (if asked)
// Closures can cause memory leaks if not handled properly, especially in long-lived applications.
// Closures can be tricky inside loops, especially with var. Example:

for (var i = 0; i < 3; i++) {
  setTimeout(() => console.log(i), 1000); // logs 3, 3, 3
}
// ❓Why?
// var is function-scoped, not block-scoped.
// By the time setTimeout callbacks run, the loop has already completed, and i is 3.
// All callbacks refer to the same i.

// Fix with closure (or let):
// 1 - var using IIFE
// ✅ How it works:
// The IIFE ((j) => { ... }) creates a new scope for each value of i.
// Each setTimeout captures j, which is frozen at that iteration’s value.
// So the closure keeps a separate copy of i (as j) for each callback.

for (var i = 0; i < 3; i++) {
  ((j) => setTimeout(() => console.log("var 1 : ", j), 1500))(i); // logs 0 1 2
}
// Or write like

function fun() {
  for (var i = 0; i < 3; i++) {
    function close(x) {
      setTimeout(() => {
        console.log("Var 2 : ", x);
      }, 2000);
    }
    close(i); // everytime it is called, it has new copy of i
  }
}
fun();

// 2 - let
for (let i = 0; i < 3; i++) {
  setTimeout(() => console.log("let : ", i), 2500); // logs 0 1 2
}
// ✅ Why this works:
// let is block-scoped, so each iteration creates a new binding of i.
// The callback inside setTimeout closes over the correct version of i in each iteration.
