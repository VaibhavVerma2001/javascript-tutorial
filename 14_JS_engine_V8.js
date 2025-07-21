// 🧠 What is a JavaScript Engine?
// A JavaScript engine is a program that executes JavaScript code. Every browser (Chrome, Firefox, Safari, etc.) and Node.js has its own engine.
// It's responsible for:
// a) Parsing JS code
// b) Compiling (or interpreting) it to machine code
// c) Executing it efficiently

// ⚙️ Popular JavaScript Engines:
// | Engine         | Used in         |
// | -------------- | --------------- |
// | **V8**         | Chrome, Node.js |
// | SpiderMonkey   | Firefox         |
// | JavaScriptCore | Safari          |

// Js is compiled or interpretd?
// JavaScript is both compiled and interpreted — but not in the traditional way. Here's the modern explanation:
// 🔹 JavaScript is a Just-In-Time (JIT) Compiled Language (means uses interpreter + compiler to execute the code)
// Old days:
// JavaScript was purely interpreted, executed line by line by browsers.
// Modern engines (like V8, SpiderMonkey, etc.):
// Use a JIT compiler, meaning JavaScript is:
// 🔸 Parsed & interpreted quickly at first, then 🔸 compiled into optimized machine code while it's running.

// 🔍 Breakdown of What Happens in V8 (Chrome/Node.js):
// Parsing: JS code is parsed into an Abstract Syntax Tree (AST).
// Interpreter: Quick and dirty version of code is executed using an interpreter (Ignition in V8).
// Profiler: V8 watches for “hot” code (frequently used).
// JIT Compiler: Hot code is sent to a optimizing compiler (TurboFan) → compiles to native machine code.
// Deoptimization: If assumptions made during optimization are wrong, it falls back to slower code.

// ⚡️Conclusion:
// JavaScript is not purely interpreted nor strictly compiled. It is JIT-compiled, making it a hybrid — fast and dynamic.

// 🧠 So Why Not Just Compile Everything Up Front?
// Because JavaScript is very dynamic:
// You can add/change variables, functions, or types at runtime.
// The engine can’t always predict what will happen early on.

// 🚀 What is V8 Engine?
// V8 is Google's high-performance JavaScript engine, written in C++.
// Powers Google Chrome and Node.js
// Developed for speed using:
// Just-In-Time (JIT) compilation
// Hidden classes and inline caching
// Garbage collection

// 🧱 How V8 Works in Node.js
// Node.js is built on top of the V8 engine, but adds:
// | Component      | Role                                              |
// | -------------- | ------------------------------------------------- |
// | **V8**         | Executes JS code                                  |
// | **libuv**      | Handles I/O, async tasks, thread pool, event loop |
// | **Node APIs**  | File system, HTTP, etc. (C++ bindings)            |
// | **C++ Addons** | Extend Node’s functionality                       |

// 🧭 Node.js Architecture Overview
// +---------------------+
// | JavaScript Code     |
// +---------------------+
//          |
//          v
// +---------------------+
// |     V8 Engine       |  ← Executes JS
// +---------------------+
//          |
//          v
// +---------------------+
// |     libuv           |  ← Event Loop, Thread Pool, Async I/O
// +---------------------+
//          |
//          v
// +---------------------+
// |   OS / System APIs  |
// +---------------------+

// 🌐 Web APIs vs V8 (Browser vs Node.js)
// | Feature       | **Browser (Chrome)**         | **Node.js**                        |
// | ------------- | ---------------------------- | ---------------------------------- |
// | JS Engine     | V8                           | V8                                 |
// | APIs Provided | Web APIs (DOM, fetch, alert) | Node APIs (fs, http, Buffer)       |
// | Event Loop    | Provided by browser runtime  | libuv in C++                       |
// | Example API   | `setTimeout`, `fetch`, `DOM` | `fs.readFile`, `http.createServer` |

// therefore - Web APIs ≠ V8
// V8 handles JS execution only.
// Web APIs are provided by the browser (e.g., DOM, window, document).

// For example -
// a) In Browser:
// setTimeout() is Web API
// V8 executes JS, browser handles timer via Web API

// In Node.js:
// setTimeout() is implemented in libuv
// V8 executes, libuv manages timer in C++ land

//💻 In Contrast: Node.js APIs
// Node.js does not have Web APIs, but provides its own APIs, built in C++ and exposed to JS.

// ✅ Summary
// | Term          | What it is                             |
// | ------------- | -------------------------------------- |
// | **V8 Engine** | JS execution engine by Google          |
// | **libuv**     | C++ library handling async I/O in Node |
// | **Web APIs**  | Provided by browsers, not by V8        |
// | **Node.js**   | Runtime built on V8 + libuv + C++ APIs |

// 🔧 What is libuv?
// libuv is a C/C++ library used by Node.js to provide:
// | Feature                    | What it does                         |
// | -------------------------- | ------------------------------------ |
// | **Event Loop**             | Handles non-blocking execution       |
// | **Async I/O**              | File system, network, DNS, etc.      |
// | **Thread Pool**            | Runs heavy/blocking tasks in threads |
// | **Cross-platform Support** | Works on Linux, macOS, Windows       |

// ♻️ What is a Garbage Collector?
// JavaScript (and many high-level languages) has automatic memory management.
// When you create variables, objects, or arrays — memory is allocated.
// When they're no longer needed, the Garbage Collector (GC) reclaims that memory.
// ✅ You don’t need to manually free memory like in C/C++.

// 🧹 Mark-and-Sweep Algorithm
// JavaScript engines like V8 (used in Chrome/Node.js) use the Mark-and-Sweep algorithm to clean up memory.
// 🧠 Key Idea:
// "If something is not reachable (cannot be accessed), it can be garbage collected."

// 📊 Step-by-Step: Mark-and-Sweep
// Let’s say you have this code:
// function demo() {
//   const user = { name: "Vaibhav" };
//   const age = 25;
// }
// demo();
// ✅ Step 1: Mark
// GC starts from a set of roots (like window, global variables, local stack).
// It follows all references and marks everything that is reachable.
// [Global / Stack Frame]
//     ↓
//   user → { name: "Vaibhav" }
//   age  → 25
// Anything that is reachable from the root is marked as in-use.

// ❌ Step 2: Sweep
// GC then sweeps through all memory.
// Anything not marked is considered garbage and gets deleted (freed).
// Unmarked → Deleted (swept away)
// 🧹 Visual Summary:
// [Roots]
//   |
//   └──> Reachable → Marked ✅
//               ↓
//       Unreachable → Swept ❌
// 📌 Example: Reachability
// let person = { name: "John" };
// person = null; // 🚨 original object is now unreachable
// The { name: "John" } object is no longer referenced → becomes garbage.
// GC will eventually clean it up in the next cycle.


// ✅ Summary
// | Step        | Description                        |
// | ----------- | ---------------------------------- |
// | **Mark**    | Traverse from root, mark reachable |
// | **Sweep**   | Clean up unmarked (unreachable)    |
// | **Used by** | JS engines like V8, SpiderMonkey   |
