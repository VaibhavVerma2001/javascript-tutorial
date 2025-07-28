
// ✅ Yes, in Node.js, the libuv library is responsible for handling asynchronous I/O and concurrency — and yes, it uses a thread pool to achieve parallelism under the hood, even though JavaScript itself is single-threaded.

// 🧵 Does libuv use multiple threads?
// ✅ Yes — libuv has a default thread pool of 4 threads (can be increased).
// This thread pool is used to run CPU-bound or blocking operations, like:
// | Task Type                     | Handled by libuv thread pool?                          |
// | ----------------------------- | ------------------------------------------------------ |
// | File system I/O               | ✅ Yes                                                  |
// | DNS (non-cached)              | ✅ Yes                                                  |
// | `crypto.pbkdf2`               | ✅ Yes                                                  |
// | `fs.readFile`, `fs.writeFile` | ✅ Yes                                                  |
// | Network (TCP/HTTP/etc)        | ❌ No (handled by OS or kernel events, not thread pool) |

// 🧠 Parallelism in Promise.all() with libuv
// const fs = require("fs").promises;

// async function readFiles() {
//   const files = ["a.txt", "b.txt", "c.txt", "d.txt"];
//   const promises = files.map((file) => fs.readFile(file, "utf8"));
//   const contents = await Promise.all(promises);
//   console.log(contents);
// }
// 🔧 Each file read is sent to the libuv thread pool, so they run in parallel (up to 4 at a time by default).
// ⏳ The 5th one waits until any of the 4 finishes (FIFO-style queue)
// 🛠 You Can Increase Thread Pool Size
// By default, Node.js uses 4 threads, but you can change it:
// UV_THREADPOOL_SIZE=8 node app.js
// ⚠️ Max value = 128

// so if there are 100 async function cqalls in .all and each takes 1 sec then total it will take 25 secs to resolve all?
// ✅ Yes, you're on the right track — but the actual total time depends on what kind of async function you're running:

// 1 - 🔍 Let's break it down:
// 🧠 Suppose:
// You call Promise.all([...100 async tasks...])
// Each task takes ~1 second
// You have 4 threads in the libuv thread pool
// Then:
// ✅ If the 100 async functions are thread-pool-based (e.g. fs.readFile, crypto.pbkdf2, etc):
// Only 4 tasks run in parallel (default UV_THREADPOOL_SIZE = 4)
// Other tasks are queued
// Time required = ceil(100 / 4) * 1s = 25 seconds
// ✔️ Yes — your estimate of ~25 seconds is correct in this case.

// 2 -
// ❌ BUT — If the async tasks are network I/O (like fetch, HTTP requests), then:
// ➡️ They don’t use the thread pool.
// ➡️ They use non-blocking sockets (handled by the OS kernel).
// ➡️ All 100 can be initiated concurrently, and complete independently.
// ⏱ So in that case, total time ≈ 1 second (depending on network latency).

// | Type of Async Task               | Uses Thread Pool? | Max Parallelism (Default)        | Time for 100 x 1s tasks |
// | -------------------------------- | ----------------- | -------------------------------- | ----------------------- |
// | `fs.readFile`, `crypto.pbkdf2`   | ✅ Yes             | 4 (default)                      | \~25 seconds            |
// | HTTP fetch, `net`, `dns.resolve` | ❌ No              | OS-managed (virtually unbounded) | \~1 second (best case)  |




// Async functions start in the call stack, but they don’t stay there while waiting.
// They return immediately, allowing the JS thread to stay unblocked — and when the result is ready, the continuation (the rest of the function) is pushed back into the call stack via the microtask queue.

// ✅ Do Async Functions Go to Call Stack?
// Yes — but only briefly:
// When async function is called, its setup enters the call stack.
// As soon as the first await is hit, it suspends, and the remaining part is moved to microtask queue.
// When the awaited promise is resolved, the rest of the function resumes via the event loop.

// | Statement                                      | True? | Explanation                                                     |
// | ---------------------------------------------- | ----- | --------------------------------------------------------------- |
// | Async functions never enter the call stack     | ❌     | They **do** — initially (like any other function)               |
// | Async `await` runs in the call stack           | ✅     | But only until it suspends — then it's paused and resumed later |
// | While awaiting, async code blocks the stack    | ❌     | It gets **suspended**, and the stack stays free                 |
// | Continuation after `await` goes to call stack? | ✅     | It’s scheduled via the **microtask queue**                      |


// | Concept                             | Answer                                                   |
// | ----------------------------------- | -------------------------------------------------------- |
// | Do async DB calls block stack?      | ❌ No, they are non-blocking                              |
// | Who handles DB calls in Node.js?    | ✅ `libuv` threadpool (default size: 4)                   |
// | Does the call stack wait?           | ❌ JS proceeds without waiting                            |
// | How does it resume later?           | ✅ Promise `.then` or `await` resumes execution when done |
// | Will `.all()` maintain input order? | ✅ Yes, always                                            |
