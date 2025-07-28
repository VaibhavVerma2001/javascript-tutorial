// | API                    | Result order matches input order? |
// | ---------------------- | --------------------------------- |
// | `Promise.all()`        | ✅ Yes                             |
// | `Promise.allSettled()` | ✅ Yes                             |
// | `Promise.any()`        | ❌ No (returns first success only) |
// | `Promise.race()`       | ❌ No (returns first settled only) |

// 1 - Promise.all()
// All or none
// Executes all in parallel
// Fails fast: As soon as one fails, it catches. Will not wait for others to complete (Any remaining unresolved promises still run in the background, but their results are ignored.)
// so for eg i have 3 function fun1 , fun2, fun3 and there is try catch in all these 3 . But some error catched in func2 catch block then all 3 calls will fail?
// ✅ When you use async functions:
// In Node.js, if an async function throws an error (and you catch it and don’t throw again), the returned promise is resolved — not rejected — unless you manually throw or return Promise.reject().
// ⏱ Time taken: Maximum of all delays until first failure (here: 2s)

const p1 = new Promise((resolve, reject) =>
  setTimeout(() => {
    resolve("P1 success");
  }, 1000)
);

const p2 = new Promise((resolve, reject) =>
  setTimeout(() => {
    reject("P2 rejected");
  }, 2000)
);

const p3 = new Promise((resolve, reject) =>
  setTimeout(() => {
    resolve("P3 success");
  }, 1500)
);

// Eg -
const promiseAll = async () => {
  try {
    const [res1, res2, res3] = await Promise.all([p1, p2, p3]); // P2 REJECTED, so it will go to catch block directly now
    console.log("res 1 : ", res1);
    console.log("res 2 : ", res2);
    console.log("res 3 : ", res3);
  } catch (err) {
    console.log("Error caught : ", err);
  }
};

// promiseAll();
// OP - Error caught :  P2 rejected

// 2 - Promise.allSettled()
// Waits for all, regardless of success/failure
// Useful for when you don’t want one failure to abort others
// ⏱ Time taken: max of all (2s)
const testAllSettled = async () => {
  console.time("Promise.allSettled");
  const results = await Promise.allSettled([p1, p2, p3]);

  results.forEach((result, i) => {
    if (result.status === "fulfilled") {
      console.log(`✅ Promise ${i + 1} succeeded:`, result);
    } else {
      console.error(`❌ Promise ${i + 1} failed:`, result);
    }
  });

  console.timeEnd("Promise.allSettled");
};

// testAllSettled();
// OP -
// ✅ Promise 1 succeeded: { status: 'fulfilled', value: 'P1 success' }
// ❌ Promise 2 failed: { status: 'rejected', reason: 'P2 rejected' }
// ✅ Promise 3 succeeded: { status: 'fulfilled', value: 'P3 success' }

// 3 - Promise.race() – Resolves/rejects as soon as any finishes
// Only first settled promise matters
// If the first to settle is a rejection, it will catch
// ⏱ Fastest time (here: 1s)
const testRace = async () => {
  console.time("Promise.race");
  try {
    const result = await Promise.race([p1, p2, p3]);
    console.log("🏁 Promise.race Result:", result);
  } catch (err) {
    console.error("🏁 Promise.race Error:", err);
  }

  console.timeEnd("Promise.race");
};
// testRace();
// The console.time("Promise.race") and console.timeEnd("Promise.race") are used to measure how long it takes for Promise.race to settle (resolve or reject).
// OP -
// 🏁 Promise.race Result: P1 success
// Promise.race: 1.016s

// 4 - Promise.any() - ✅ First success wins, ignores failures
// If any one succeeds, it resolves
// If all fail, it throws AggregateError
// ⏱ Fastest successful time (1s)
const testAny = async () => {
  console.time("Promise.any");

  try {
    const result = await Promise.any([p2, p3, p1]);
    console.log("🎯 Promise.any Result:", result);
  } catch (err) {
    console.error("🎯 Promise.any Error (All Failed):", err);
  }

  console.timeEnd("Promise.any");
};
testAny();
// OP - 
// 🎯 Promise.any Result: P1 success
// Promise.any: 1.012s

// note if all 3 promises failed then it will be aggregate error -> after all promise settled
// [AggregateError: All promises were rejected] {
//   [errors]: [ 'P2 rejected', 'P3 rejected', 'P1 rejected' ]
// }



// ✅ Comparison Table of Promise.all, Promise.allSettled, Promise.race, Promise.any
// | Feature               | `Promise.all`                                  | `Promise.allSettled`                          | `Promise.race`                             | `Promise.any`                          |
// | --------------------- | ---------------------------------------------- | --------------------------------------------- | ------------------------------------------ | -------------------------------------- |
// | **Returns when**      | All promises are fulfilled                     | All promises are settled (fulfilled/rejected) | First promise settles (fulfilled/rejected) | First promise is fulfilled             |
// | **Fails if**          | Any one fails                                  | ❌ Never fails                                 | First to **reject** causes failure         | All fail (throws `AggregateError`)     |
// | **Result on success** | Array of results                               | Array of `{status, value/reason}` objects     | First result (value or error)              | First fulfilled value                  |
// | **Order of results**  | ✅ Matches input order                          | ✅ Matches input order                         | ❌ Only one result                          | ❌ Only one result                      |
// | **Goes to catch if**  | ✅ Any one rejects                              | ❌ Never — use `.status === 'rejected'`        | ✅ First settled promise rejects            | ✅ Only if all promises reject          |
// | **Time taken**        | Until **first rejection** or **all fulfilled** | Until all promises finish                     | Until first promise settles                | Until first **success**, or all reject |
// | **Execution style**   | Parallel                                       | Parallel                                      | Parallel                                   | Parallel                               |
// | **Use-case**          | All must succeed                               | Track full outcome of all tasks               | Need fast response from first finisher     | Any success is good enough             |
