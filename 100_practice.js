<<<<<<< HEAD
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
=======
// // Every async function returns promise
// // await can be used only in async function
>>>>>>> f1ff4ab1ceef4e2efd8f78a1aece0786dc2bdfc0

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

<<<<<<< HEAD
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
=======
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
>>>>>>> f1ff4ab1ceef4e2efd8f78a1aece0786dc2bdfc0
  }, 10000);
});

const p2 = new Promise((resolve, reject) => {
  setTimeout(() => {
<<<<<<< HEAD
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
=======
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
>>>>>>> f1ff4ab1ceef4e2efd8f78a1aece0786dc2bdfc0
