// ✅ Definition of a Promise in JavaScript:
// A Promise in JavaScript is an object that represents the eventual completion (or failure) of an asynchronous operation and its resulting value/ Or it is container for a future value
// Think of it like a placeholder for a value that will be known in the future.
// Promise object is immutable, means you can't change the result or state of a Promise once it's resolved or rejected.

// ✅ States of a Promise:
// A Promise has three states:
// Pending – Initial state, neither fulfilled nor rejected.
// Fulfilled – Operation completed successfully.
// Rejected – Operation failed.

const p = new Promise((res, rej) => {
  res("Resolved promise");
});

console.log(p); // Promise { 'Resolved' }

p.then((result) => console.log(result)).catch((err) => console.log(err)); // NOW whenever p has value it will call this function 100%, Just Once // OP - Resolved promise

const res = await fetch("https://api.github.com/users/VaibhavVerma2001");
let data = await res.json();
console.log({ data });

// Use chaining instead of callback hell

const promise = new Promise((resolve, reject) => {
  setTimeout(() => {
    let success = false;
    if (success) {
      resolve(5); // Start with 5
    } else {
      reject("Promise Rejected");
    }
  }, 1000);
});

promise
  .then((num) => {
    console.log("Step 1:", num); // Step 1: 5
    return num * 2; // Returns 10
  })
  .then((num) => {
    console.log("Step 2:", num); // Step 2: 10
    return num + 3; // Returns 13
  })
  .then((num) => {
    console.log("Step 3:", num); // Step 3: 13
    return num - 1;
  }) 
  .then((finalResult) => {
    console.log("Final Result:", finalResult); // Final Result: 12
  })
  .catch((err) => {
    console.error("Error occurred:", err);
  }); // this catch will handle all errors on top of it
