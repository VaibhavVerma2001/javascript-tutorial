// ✅ What is a Higher-Order Function (HOF)?
// A higher-order function is a function that either:
// Takes another function as an argument (input), or
// Returns another function as its output,
// or does both.
// So, a higher-order function works with other functions — treating them like values.

// Ex -
function greet(name) {
  return `Hello, ${name}!`;
}

function processUserInput(callback) {
  const name = "Vaibhav";
  console.log(callback(name));
}

processUserInput(greet);

// Here, processUserInput is a higher-order function because it takes greet (a function) as an argument.
// ✅ What is a Callback Function?
// A callback function is a function that is passed to another function (usually a higher-order function) and is called ("invoked") inside that other function.
// So, a callback is the function being passed to a higher-order function.
// 🔹 In the previous example:
// greet is a callback function when passed to processUserInput.
// processUserInput is the higher-order function.

// | Feature        | Higher-Order Function                   | Callback Function                             |
// | -------------- | --------------------------------------- | --------------------------------------------- |
// | **Definition** | Takes or returns another function       | Passed to another function as an argument     |
// | **Role**       | Container / invoker                     | Function that gets executed                   |
// | **Control**    | Calls the callback                      | Gets called by the HOF                        |
// | **Example**    | `map`, `filter`, `reduce`, `setTimeout` | The function you pass to `map`, `filter` etc. |

// ✅ Yes — it is the responsibility of a Higher-Order Function (HOF) to call (or return) the callback.
// And when it takes a function as an argument, it typically also calls that function at the appropriate time.

// NOTE -- Interview question - How to write modular code, DRY -- DO NOT REPEAT YOURSELF
// EX - Calculate area, circumference and diameter of circle with given radius

const radius = [3, 1, 2, 4];

// 1- Bad practice -> repeatable code
const getArea = (radius) => {
  let output = [];
  radius.forEach((item) => output.push(Math.PI * item * item));
  return output;
};

console.log(getArea(radius));

const getCircumference = (radius) => {
  let output = [];
  radius.forEach((item) => output.push(2 * Math.PI * item));
  return output;
};

console.log(getCircumference(radius));

const getDiameter = (radius) => {
  let output = [];
  radius.forEach((item) => output.push(2 * item));
  return output;
};

console.log(getDiameter(radius));

//2 - Better code -
const getAreaNew = (r) => Math.PI * r * r;
const gettCircumferenceNew = (r) => 2 * Math.PI * r;

const area = radius.map(getAreaNew);
const circumference = radius.map((item) => gettCircumferenceNew(item)); // or like this
const diameter = radius.map((r) => 2 * r); // or can write like this here

console.log(area);
console.log(circumference);
console.log(diameter);

// Here map is HOC and getAreaNew, gettCircumferenceNew are Callbacks

// 3 - Another better method - BEST
const calculate = (radius, logic) => {
  let output = radius.map((item) => logic(item));
  return output;
};

console.log(calculate(radius, getAreaNew));
console.log(calculate(radius, gettCircumferenceNew));
// calculate is HOC and getAreaNew is Callback
