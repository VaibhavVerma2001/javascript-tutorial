// What is Hoisting in JavaScript?
// Hoisting is JavaScript’s behavior of moving function and variable declarations to the top of their scope before execution. This means you can use variables and functions before declaring them in the code.

// However, hoisting works differently for var, let, const, and functions.

// What is the Temporal Dead Zone (TDZ)?
// The Temporal Dead Zone (TDZ) is the time between when a variable is hoisted and when it is initialized. During this period, accessing the variable throws a ReferenceError.

// 1️⃣ Hoisting with var (Partially Hoisted)
console.log("1", a); // ✅ undefined (No error)
var a = 10;
console.log("2", a); // ✅ 10

// Why?
// var is hoisted but initialized as undefined.
// The above code is interpreted as:
var num; // Hoisted with `undefined`
console.log("3", num); // undefined
num = 10; // Now assigned
console.log("4", num); // 10

// 2️⃣ Hoisting with let and const (Hoisted, but in TDZ)
console.log("5", b); // ❌ ReferenceError: Cannot access 'b' before initialization
let b = 20;
console.log("6", b); // ✅ 20

// Why?
// let and const are hoisted, but NOT initialized.
// They remain in the Temporal Dead Zone (TDZ) until the assignment happens.
// 🔹 Same happens with const:

// 3️⃣ Hoisting with Functions
// ✅ Function Declarations are Fully Hoisted

greet(); // ✅ Works! "Hello, Vaibhav"

function greet() {
  console.log("Hello, Vaibhav");
}

// Why?
// Function declarations are hoisted along with their definition.
// ❌ Function Expressions are NOT Fully Hoisted

hello(); // ❌ TypeError: hello is not a function

var hello = function () {
  console.log("Hi!");
};
// Why?
// var hello is hoisted, but it’s initialized as undefined, not the function.

// 🔹 Summary Table
// Type	                Hoisted?	     Initialized?	        Accessible before Declaration?
// var	                ✅ Yes	        ✅ undefined	        ✅ Yes (but undefined)
// let	                ✅ Yes	        ❌ No (TDZ)	        ❌ No (ReferenceError)
// const           	    ✅ Yes	        ❌ No (TDZ)	        ❌ No (ReferenceError)
// Function Declaration	✅ Yes	        ✅ Yes	              ✅ Yes
// Function Expression  ✅ Yes	        ✅ undefined	        ❌ No (TypeError)
// (var func = function() {})

console.log(func1(10));
console.log(func2(20)); // ReferenceError: Cannot access 'func2' before initialization
console.log(func3(30)); // ReferenceError: Cannot access 'func3' before initialization

function func1(num) {
  return num + 1;
}

const func2 = function (num) {
  return num + 1;
};

const func3 = (num) => {
  return num + 2;
};

// ✅ 1️⃣ function func1(num) {...}
// This is a function declaration.
// Hoisted? Yes. The entire function (name and body) is hoisted to the top of its scope.
// So calling func1(10) works fine because, at the time of execution, JavaScript already knows about func1.

// ❌ 2️⃣ const func2 = function(num) {...} and  3️⃣ const func3 = (num) => {...}
// This is a function expression assigned to a const variable.
// Hoisted? The variable func2 itself is hoisted, but only its declaration. Its value is not assigned until the actual line of code is executed.
// In other words, func2 is in the temporal dead zone (TDZ) until it's assigned. Calling it before that results in:ReferenceError: Cannot access 'func2' before initialization

// | Type                     | Hoisted? | Can Call Before Declaration? |
// | ------------------------ | -------- | ---------------------------- |
// | **Function declaration** | ✅Yes     | ✅Yes                         |
// | **Function expression**  | ❌No      | ❌No                          |
// | **Arrow function**       | ❌No      | ❌No                          |

// 🔹 Best Practices
// ✔️ Always declare variables before using them to avoid confusion.
// ✔️ Use let and const instead of var to prevent unexpected behavior.
// ✔️ Declare functions before calling them, especially if using function expressions.
