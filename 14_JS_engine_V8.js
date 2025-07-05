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

// 🚀 What is V8 Engine?
// V8 is Google's high-performance JavaScript engine, written in C++.
// Powers Google Chrome and Node.js
// Developed for speed using:
// Just-In-Time (JIT) compilation
// Hidden classes and inline caching
// Garbage collection

// 🔍 V8 Internals – How It Works
// Parsing:
// JS code is parsed into an Abstract Syntax Tree (AST)
// Ignition (Interpreter):
// Produces bytecode from the AST
// Starts executing fast
// TurboFan (JIT Compiler):
// Optimizes hot (frequently executed) code into machine code
// Skips unnecessary steps for performance

// example
const add = (a, b) => a + b;
console.log(add(2, 3));
// V8 will:
// 1) Parse → AST
// 2) Generate bytecode → Execute
// 3) Optimize → Machine code (if repeated)

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
