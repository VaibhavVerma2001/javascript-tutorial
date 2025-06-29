// Does every async function go to a queue like setTimeout does, even without await?

// | Async Function               | Without `await`? | Goes to Queue?                         |
// | ---------------------------- | ---------------- | -------------------------------------- |
// | Called but no `await` inside | ✅ Yes            | ✅ Microtask queue                      |
// | Has `await` inside           | ✅ Yes            | ✅ Paused & resumed via microtask queue |

// So yes — every async function returns a Promise and runs asynchronously, even if there's no await inside it.

// 1 - 🧠 Let’s prove it with an example:
async function noAwait() {
  console.log("Inside async without await");
}
console.log("1");
noAwait();
console.log("2");
// ✅ Output:
// 1
// Inside async without await
// 2

// Why does "Inside async without await" come between 1 and 2?
// Because although noAwait() is an async function, it starts synchronously — its body runs immediately up to the first await (if any). Since there’s no await, it just runs like a normal function.

// 🧠 Does an async function without await behave like a normal function?
// ✅ Yes — almost exactly like a normal function.
// But there’s one subtle twist:
// Even if it doesn’t await anything, it still returns a Promise, and that Promise resolves asynchronously via the microtask queue.

// Promise Resolution
// Even if there’s no await, the async function returns a Promise.
// That Promise resolves asynchronously — meaning its .then() runs in the microtask queue, after the call stack is empty.
// Example:
console.log("------------------");
async function noAwait() {
  console.log("Inside noAwait");
}
noAwait().then(() => {
  console.log("Promise resolved");
});
console.log("End");
// Output:
// Inside noAwait
// End
// Promise resolved   ✅ (microtask)
// So:
// ✅ async function body runs immediately (like sync)
// ✅ Its returned Promise resolves asynchronously (via microtask)

// 2 -✅ Now Compare With await:
async function withAwait() {
  console.log("A");
  await null;
  console.log("B");
}

console.log("1");
withAwait();
console.log("2");
// ⏱ Output:
// 1
// A
// 2
// B

// A runs immediately
// await pauses the function
// The remaining part (console.log("B")) is queued in the microtask queue
// Runs after all sync code is done

// 🔍 So What Gets Queued?
// | Scenario                        | In Queue?            | Which Queue?              | Notes                                   |
// | ------------------------------- | -------------------- | ------------------------- | --------------------------------------- |
// | `setTimeout()`                  | ✅                    | Macrotask queue           | Runs after sync + microtasks            |
// | `Promise.then()`                | ✅                    | Microtask queue           | Runs after sync                         |
// | `async function` (with `await`) | ✅ (after `await`)    | Microtask queue           | Pauses and resumes later                |
// | `async function` (no `await`)   | ✅ (the return value) | Microtask queue (sort of) | Still returns Promise, runs immediately |

// ✅ Summary:
// Every async function returns a Promise. Whether it pauses or not depends on whether you use await inside it.

// another example
import axios from "axios";
console.log("start");
async function getUserData() {
  console.log("1 Fetching started...");

  try {
    const response = await axios.get(
      "https://jsonplaceholder.typicode.com/users/1"
    );
    console.log("2 User Data:", response.data);
  } catch (error) {
    console.error("❌ Error fetching user data:", error.message);
  }

  console.log("3 Fetching ended.");
}

getUserData();

console.log("🟩 End of main thread.");

// OUTPUT -
// start
// 1️⃣ Fetching started...
// 🟩 End of main thread.
// 2️⃣ User Data: { id: 1, name: "Leanne Graham", ... }
// 3️⃣ Fetching ended.

// will in async function things before await print immediately then it go to microtask queue?
// Yes, exactly! ✅
// 🔍 Key Rule for async functions:
// Everything before the first await runs synchronously and immediately.
// Once await is hit, the remaining code in the async function is paused, and the rest resumes via the microtask queue after the awaited Promise resolves.

// | Code Part            | Type        | When it runs                 |
// | -------------------- | ----------- | ---------------------------- |
// | Before `await`       | Synchronous | Immediately                  |
// | `await Promise`      | Yield Point | Pauses async function        |
// | After `await` (rest) | Microtask   | After current stack is clear |