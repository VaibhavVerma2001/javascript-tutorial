// 🧠 What Are Web APIs?
// Web APIs are built-in browser-provided (or environment-provided) functionalities that allow JavaScript to interact with the outside world, like:
// The DOM
// Timers
// HTTP requests
// Storage
// Geolocation
// Audio/Video, etc.
// Think of them as features the browser gives to JavaScript to do powerful things — like setting timeouts, changing HTML, fetching data, etc.

// | Web API                 | What It Does                        |
// | ----------------------- | ----------------------------------- |
// | `setTimeout`            | Delay execution                     |
// | `document` / `DOM`      | Read or change HTML                 |
// | `fetch`                 | Make HTTP requests                  |
// | `localStorage`          | Store key-value data in browser     |
// | `addEventListener`      | Listen to events like click, scroll |
// | `navigator.geolocation` | Get user's location info            |
// | `console`               | Log to browser’s console            |
// | `History API`           | Control browser navigation          |
// | `Notification`          | Show push notifications             |

// setTimeout, console is not part of JavaScript — it's provided by the browser (or Node.js in server-side).

// STARVATION OF CALLBACK QUEUE - Callback queue starvation happens when microtasks (like Promise.then) or synchronous code keep executing so frequently or endlessly that macrotasks (like setTimeout, setInterval, or I/O callbacks) in the callback queue never get a chance to run.

// 🔥 What is the Event Loop?
// The Event Loop is like a manager that controls the execution order of tasks, callbacks, and promises in JavaScript. It’s responsible for ensuring that your asynchronous code executes in the correct order without blocking the main thread.

// 🧱 Key Components
// 1 - Call Stack – Executes synchronous functions.
// 2 - Web APIs – Handles async operations (e.g., setTimeout, fetch).
// 3 - Task Queues:
// a) Microtask Queue – For Promises, async/await, MutationObserver.
// b) Macrotask Queue – For setTimeout, setInterval, UI events, etc.

// 🛠️ How the Event Loop Works – Step by Step
// 1 - Synchronous code is pushed and executed on the Call Stack.
// 2 - When async functions are called (e.g., setTimeout, fetch), they are handled by Web APIs.
// 3 - After completion, their callbacks are sent to the respective queue:
// a) - Microtasks (e.g., Promise.then)
// b) - Macrotasks (e.g., setTimeout)
// 4 - Event Loop constantly checks:
// a) - Is the Call Stack empty?
// b) - If yes → process Microtasks first.
// c) - Then → process Macrotasks.

// 🚀 Execution Order
// 1- Run all synchronous code first (Call Stack).
// 2- Run all tasks in the Microtask Queue (one by one).
// 3- Then run a task from the Macrotask Queue (e.g., setTimeout).
// 4- Repeat this cycle continuously.

// Example -
console.log("START");

setTimeout(() => {
  console.log("In set timeout");
}, 2000); // MACROTASK QUEUE

fetch("https://abc.com").then(() => {
  console.log("In fetch callback");
}); // MIRCROTASK QUEUE

console.log("END");

// OUTPUT ->
// START
// END
// In fetch callback
// In set timeout
