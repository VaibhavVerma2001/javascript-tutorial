/* 
// 1 ----
// async/await is a modern syntax in JavaScript used to work with Promises more cleanly and readably.

// An async function always returns a Promise.
// Inside it, await pauses the execution until the Promise resolves or rejects.
// This allows asynchronous code to be written like synchronous code, improving readability and error handling.

// ✅ Example (1-liner explanation):
// "await pauses the async function until the Promise resolves, making async code behave like synchronous code."

// async function always returns a promise
// await can be used only inside async function
// // Every async function returns promise
// // await can be used only in async function

// // EXAMPLE 1 -

/*
console.log("START"); // SYNC
const p = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("In Promise");
  }, 5000);
});

const getInfo = () => {
  p.then((res) => console.log("res 1 : ", res)); // In Promise, JS will not wait for this promise to resolve
  console.log("After then"); // will be printed first, before clg(res) // SYNC
};

getInfo();

// USING ASYNC - AWAIT
const asyncGetInfo = async () => {
  console.log("Inside async"); // printed immediately, bec before await // SYNC
  const res2 = await p; // JS ENGINE waits for promise to resolve
  console.log("res 2 : ", res2); // res2 :  In Promise,code after will be printed after promise resolve

  const res3 = await p; // same promise p which was resolved earlier
  console.log("res 3 : ", res3);

  // If you’re seeing both logs appear almost at the same time after 5 seconds, it’s because:
  // The first await p waited for 5 seconds.
  // The second await p was on an already-resolved promise, so it continued immediately.
  // The logs appear so close that they seem simultaneous.

  // Will execute 1 by 1 -
  // const res2 = await new Promise((resolve) =>
  //   setTimeout(() => resolve("First"), 5000)
  // );
  // console.log("res 2:", res2);
  // const res3 = await new Promise((resolve) =>
  //   setTimeout(() => resolve("Sepcond"), 5000)
  // );
  // console.log("res 3:", res3);
};

asyncGetInfo();
console.log("END"); // SYNC

// // OUTPUT -
// // START  --> immediately logs
// // After then  --> immediately logs
// // Inside async  --> immediately logs
// // END  --> immediately logs
// // res 1 :  In Promise -> after 5 secs
// // res 2 :  In Promise -> after 5 secs
// // res 3 :  In Promise -> after 5 secs

*/

// EXAMPLE 2 -
console.log("START"); // SYNC
const p1 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("In Promise");
  }, 10000);
});

const p2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("In Promise");
  }, 5000);
});

const handlePromise = async () => {
  console.log("Inside async");

  const res1 = await p1;
  console.log("res 1 : ", res1); // --> after 10 secs, js engine will wait for promise resolve

  const res2 = await p2;
  console.log("res 2 : ", res2); // --> after 10 secs
};

handlePromise();
console.log("END");

// OUTPUT -
// START --> immediately logs
// Inside async --> immediately logs
// END --> immediately logs
// res 1 :  In Promise --> after 10 secs
// res 2 :  In Promise --> after 10 secs
