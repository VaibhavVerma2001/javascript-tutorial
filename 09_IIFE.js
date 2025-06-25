// ===================================================
// IIFE (Immediately Invoked Function Expressions) Demo
// 🎯 What is an IIFE?
// An IIFE is a JavaScript function that is:
// Defined and
// Executed immediately right after its creation.
// ===================================================

// 1️⃣ Simple IIFE
(function fun() {
  console.log("I run immediately!");
})(); // NOTE ; is very important else will give error
// Explanation:
// This function is defined and invoked immediately.
// It creates its own scope and doesn’t pollute the global namespace.

// 2️⃣ IIFE with Parameters
((a, b) => {
  console.log("Sum:", a + b);
})(5, 10);
// Explanation:
// We can pass parameters to an IIFE when invoking it.

// 3️⃣ IIFE with Return Value
const result = (() => {
  return "This is returned from an IIFE";
})();
console.log(result);
// Explanation:
// An IIFE can return a value, which we can capture in a variable.

// ===================================================
// ✅ Summary:
// - An IIFE is a function that runs immediately after being defined.
// - It's used to create private scope and avoid polluting the global namespace.
// - It's great for initialization, encapsulation, and creating private data.
// ===================================================
