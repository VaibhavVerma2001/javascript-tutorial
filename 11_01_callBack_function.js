// ✅ Callback Function in JavaScript
// A callback function is a function that is passed as an argument to another function, and it gets executed later inside that outer function.

// 🔹 Do Callback Functions Give Async Power?
// Short answer:
// ✅ Yes — when used with asynchronous APIs, callbacks enable non-blocking behavior, which is the foundation of asynchronous programming in JavaScript.

// 🔍 But Important Clarification:
// ❗ A callback alone is not async.
// It depends where and how the callback is used.

// ✅ Synchronous Callback Example (Not async)
const greet = (name, callback) => {
  console.log(name);
  callback(); // runs immediately, synchronously
};

greet("Vaibhav", () => {
  console.log("this is callback");
});
//OP -
// Vaibhav
// this is callback

// ✅ Asynchronous Callback Example
console.log("START");
setTimeout(() => {
  console.log("Inside set time out async");
}, 2000);
console.log("END");
// OP -
// Start
// End
// Inside set time out async

// 🧠 Final Thought
// ✅ Callback functions enable asynchronous flow — but only when used with async-capable functions (like timers, I/O, fetch, etc).

// | Callback Used With                   | Is It Async? |
// | ------------------------------------ | ------------ |
// | A normal function                    | ❌ No         |
// | `setTimeout`, `fs.readFile`, `fetch` | ✅ Yes        |

// ASYNC - AWAIT VS CALLBACK

// ✅ 1. Readability & Clean Syntax
// 🔻 Callback Example:
getUser((err, user) => {
  if (err) return handleError(err);
  getPosts(user.id, (err, posts) => {
    if (err) return handleError(err);
    getComments(posts[0].id, (err, comments) => {
      if (err) return handleError(err);
      console.log(comments);
    });
  });
});
// 😵 This is hard to read and maintain — called callback hell.

// ✅ Async/Await Version:
try {
  const user = await getUser();
  const posts = await getPosts(user.id);
  const comments = await getComments(posts[0].id);
  console.log(comments);
} catch (err) {
  handleError(err);
}
// 😍 Clean, readable, and looks synchronous.

// ✅ 2. Easier Error Handling
// 🔻 With Callbacks:
doSomething((err, data) => {
  if (err) {
    // manually check and handle every error
  }
});

// ✅ With Async/Await: ✅ One central try-catch block for multiple operations.
try {
  const data = await doSomething();
} catch (err) {
  console.error("Caught error:", err);
}

// 🔁 Summary: Why Async/Await > Callbacks
// | Feature        | Callback             | Async/Await      |
// | -------------- | -------------------- | ---------------- |
// | Syntax         | Messy & nested       | Clean & flat     |
// | Error Handling | Manual in every call | `try/catch` once |
// | Readability    | Low                  | High             |
// | Debugging      | Complex              | Easy             |
// | Async Chaining | Painful              | Simple           |

// NOTE - IMPORTANT
setTimeout(() => {
  console.log("Inside set time out async");
}, 1000);

for (let i = 0; i < 100000; i++) {
  console.log(i);
}
console.log("END");

// While the loop runs, the call stack is never empty.
// Even if the 1000ms is over, the callback from setTimeout goes to the macrotask queue, but: It will not be executed until the call stack is empty.
// ⏱ So what happens?
// If the loop takes 2 seconds, then even though setTimeout was scheduled after 1s, its callback will run after the loop is done.
// 🧠 KEY POINT:
// setTimeout(fn, 1000) means "run this function after at least 1000ms, when the stack is empty".

// 🛑 The for loop is blocking the call stack.
// So even though the timeout has expired, the callback must wait its turn.
// 🧪 Output Will Be Like:
// 0
// 1
// 2
// ...
// 99999
// Inside set time out async  ← logged much later than 1 second! 

// 🧠 What is the Call Stack?
// The Call Stack is a data structure that JavaScript uses to keep track of function execution — it follows the LIFO principle
// Whenever a function is called, it's pushed on top of the stack.
// When the function finishes, it's popped off the stack.

// ✅ Is there only one call stack in JavaScript (and Node.js)?
// 👉 Yes — JavaScript has only 1 call stack.
// Whether you're running:
// ✅ a normal function
// ✅ an async function
// ✅ a callback (like setTimeout, Promise.then, etc.)
// ➡️ All JavaScript code is ultimately executed in one single call stack — because JavaScript is single-threaded (by design).

// 🚫 Important Notes:
// The call stack can only handle one thing at a time.
// If a function takes too long (like a huge loop), it blocks everything else.
// That’s why async code (like setTimeout, fetch) uses event loop & queues, so it runs later — after the call stack is clear.
