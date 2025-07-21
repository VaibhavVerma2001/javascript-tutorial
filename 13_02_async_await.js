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

const p = new Promise((resolve, reject) => {
  resolve("Promise Resolved");
});

const getData = () => {
  p.then((res) => console.log(res));
};
getData(); // Promise Resolved

// Using async await - async await combo used to handle promise
const asyncGetData = async () => {
  const res = await p;
  console.log(res);
};
asyncGetData(); // Promise Resolved

*/

// 2 - ******** Difference between async await and normal handling promisses ********
// a) ******** using then ********

// console.log("START");
// const p = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     resolve("Promise Resolved");
//   }, 5000);
// });

// const getData = () => {
//   p.then((res) => console.log(res));
//   console.log("Reached here"); // will not wait for above promise to resolve
// };

// getData();
// console.log("END");

// OP -
// START
// Reached here
// END
// Promise Resolved

// b) ******** using async-await, EX - 1  ********
// console.log("START");
// const p = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     resolve("Promise Resolved");
//   }, 5000);
// });

// const getData = async () => {
//   console.log("Above"); // prints immediately
//   const data = await p;
//   console.log(data);
//   console.log("Below"); // will wait for above promise to resolve
// };

// getData();
// console.log("END");
// OP -
// START
// Above
// END
// Promise Resolved
// Below

// b) ******** using async-await, EX - 2  ********
// console.log("START");
// const p = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     resolve("Promise Resolved");
//   }, 5000);
// });

// const getData = async () => {
//   console.log("Above"); // prints immediately
//   const data = await p;
//   // FROM HERE IT WILL BE PRINTED AT SAME TIME AFTER 5 SECS because p is already resolved above
//   console.log(data);
//   console.log("Below 1"); // will wait for above promise to resolve

//   const data2 = await p;
//   console.log(data2);
//   console.log("Below 2");
// };

// getData();
// console.log("END");

// OP
// START
// Above
// END
// Promise Resolved --> FROM HERE IT WILL BE PRINTED AT SAME TIME AFTER 5 SECS
// Below 1
// Promise Resolved
// Below 2

// b) ******** using async-await, EX - 3  ********
console.log("START");
const p1 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("Promise Resolved");
  }, 10000);
});

const p2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("Promise Resolved");
  }, 5000);
});

const getData = async () => {
  console.log("Above"); // prints immediately
  const data = await p1;

  console.log(data); // will be printed after 10 secs
  console.log("Below 1");

  const data2 = await p2; // will be printed immediately after above promise resolve means (10 secs)
  console.log(data2);
  console.log("Below 2");
};

getData();
console.log("END");

// OP
// START
// Above
// END
// Promise Resolved --> after 10 secs, below this everything printed immediately
// Below 1
// Promise Resolved
// Below 2

//NOTE -
// const getData = async () => {
//   const data1 = await new Promise(...); // starts now
//   const data2 = await new Promise(...); // starts after data1
// };
// Then both would execute sequentially.
