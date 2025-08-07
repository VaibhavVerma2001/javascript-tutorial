// 🔍 1. Scope
// Scope defines where in your code you can access a variable.

// Types of Scope in JavaScript:
// | Type                  | Description                                                                              |
// | --------------------- | ---------------------------------------------------------------------------------------- |
// | **Global Scope**      | Declared outside any function/block. Accessible everywhere.                              |
// | **Function Scope**    | Variables declared inside a function. Only accessible in that function.                  |
// | **Block Scope (ES6)** | Variables declared with `let` or `const` inside `{}`. Only accessible inside that block. |

function a() {
  console.log(b);
}

a(); // undefined , because till here a was not defined, but a is var so hoisted and initialised to undeined. If there will be let instead of var b it would give error
var b = 10;
a(); // OP - 10 , can access global scope variable

{
  let c = 10;
  var d = 10;
  const e = 10;
}

// console.log(c); // ReferenceError: c is not defined
console.log(d); // 10
// console.log(e); // ReferenceError: e is not defined

// 🧠 2. Lexical Environment -> local memory that holds and with lexical environment of its parent --> lexical means order or hirarchy --> this is called scope chaining
// A lexical environment is a structure that holds:
// Variable declarations
// Reference to its outer (parent) environment

// Key Idea:
// JavaScript is lexically scoped — which means scope is determined by the code's structure, not how it's called at runtime.
// Each time a function is called, a new execution context is created, and that context gets a fresh lexical environment.

function outer() {
  // here outer is lexically inside global,  means it will get access to lexical env of global
  let outerVar = "I am outside!";

  function inner() {
    // here inner is lexically inside outer, means it will get access to lexical env of outer
    console.log(outerVar); // ✅ Has access due to lexical scope
  }

  inner();
}
outer();

// inner() has access to outerVar because it's lexically (physically) inside outer() — not because outer() was called first.

// ✅ Summary
// | Term                    | Meaning                                                               |
// | ----------------------- | --------------------------------------------------------------------- |
// | **Scope**               | Where a variable is accessible                                        |
// | **Lexical Environment** | Internal JS structure that tracks variable scopes and parent contexts |
// | **Lexical Scope**       | Scope is determined by code **location**, not runtime behavior        |

// Reference Error - when we try to access a variable without initialisation --> in let and const -> they remain in TDZ.
// Or we try to access variable which is not defined

let f = 100;
const g = 200;
var h = 300;
{
  let f = 10;
  const g = 20;
  var h = 30;

  // This is called shadowing
  console.log(f); // 10
  console.log(g); // 20
  console.log(h); // 30
}

console.log(f); // 100
console.log(g); // 200
console.log(h); // 30 --> Changed because var is global scope

// 🌑 What is Shadowing?
// Shadowing happens when a variable in a local scope (like inside a function or block) has the same name as a variable in an outer scope.
// The inner variable "shadows" (hides) the outer one — making the outer variable inaccessible in that inner scope.

// ⚠️ Illegal Shadowing (Error)
// You cannot shadow a let or const variable using var in the same or inner scope.
// let y = 30;

// {
//   var y = 40; // ❌ SyntaxError: Identifier 'y' has already been declared
// }
