// Function Statement/Declaration VS Function Expression

// ************* 1. Function Statement / Declaration *************

// This is the standard way of defining a function.
// Hoisted completely to the top of their scope.
// Can be called before they are defined in the code.

fun1(); // Works
function fun1() {
  console.log("Function Statement");
}

// ************* 2. Function Expression *************

// A function is created and assigned to a variable.
// Not hoisted the same way. Only the variable (greet) is hoisted, not the function value.
// You cannot call the function before the expression is evaluated.

// fun2(); // ReferenceError: Cannot access 'fun2' before initialization
const fun2 = function () {
  console.log("Function Expression");
};

// If we use var instead of const fun2, then fun2() will give error - TypeError: fun2 is not a function, but console.log(fun2) will give undefined because it is hoisted

// Arrow Function (Expression) - came in es6 , es2015 -  as a shorter syntax for writing functions.
// Arrow functions are a form of function expressions:
// Same behavior as function expression in terms of hoisting.
// fun3(); // ReferenceError: Cannot access 'fun3' before initialization
const fun3 = () => {
  console.log("Function Expression");
};

function normal() {
  console.log(this);
}
normal(); // Logs: `window` (in browser) or `global` (in Node.js)

const arrow = () => {
  // annonymous function expression
  console.log(this);
};
arrow(); // Logs: `window` (in browser) or `{}` (in Node.js)

const fun4 = function xyz() {
  // giving name to the function
  console.log("Named function expression");
};
fun4();
// xyz(); // ReferenceError: xyz is not defined, becuase  xyz is accessible only inside the function body (used for recursion or stack trace). It is not created in global scope

// Anonymous functions
// Anonymous functions are typically used as values — passed to or returned from other functions.
// Used when we want to use function like values, means assign it to somewhere


// ************* 3. ✅ When to Use What? *************

// Use function declarations when you want hoisting behavior (e.g., utility functions).
// Use function expressions for more flexible, inline, or conditional function definitions (especially in callbacks or closures).
// | Feature                  | Function Declaration    | Function Expression            |
// | ------------------------ | ----------------------- | ------------------------------ |
// | Syntax                   | `function func() {}`    | `const func = function() {}`   |
// | Name (optional?)         | Required                | Optional (anonymous functions) |
// | Hoisted?                 | ✅ Yes (entire function) | ❌ Only variable is hoisted     |
// | Callable before defined? | ✅ Yes                   | ❌ No                           |
// | Used in IIFEs?           | ❌ Rarely                | ✅ Common                       |
// | Named vs Anonymous       | Always named            | Can be named or anonymous      |

//  ************* 4. arguments vs parameters *************
// Parameters** The named variables in the function definition. Think of them as **placeholders
// Arguments**  The actual values you pass to the function when calling it.
function greet(name, age) {
  // name, age = parameters
  console.log("Hello", name, "You are", age);
}

greet("Vaibhav", 23); // "Vaibhav", 23 = arguments

// ************* 5. First-Class Functions *************
// A programming language has first-class functions if:
// 👉 Functions are treated like values — they can be:
// Assigned to variables
// Passed as arguments
// Returned from other functions
// Stored in arrays/objects
// 	Prerequisite for HOFs, HOFs are Built on top of first-class functions

// The phrase "functions are first-class citizens" (or "first-class functions") means that:
// ✅ Functions are treated like values in the language — just like numbers, strings, or objects.
