console.log(func1(10));
console.log(func2(20)); // ReferenceError: Cannot access 'func2' before initialization
console.log(func3(30)); // ReferenceError: Cannot access 'func3' before initialization

function func1(num) {
  return num + 1;
}

const func2 = function (num) {
  return num + 1;
};

const func3 = (num) => {
  return num + 2;
};

// ✅ 1️⃣ function func1(num) {...}
// This is a function declaration.
// Hoisted? Yes. The entire function (name and body) is hoisted to the top of its scope.
// So calling func1(10) works fine because, at the time of execution, JavaScript already knows about func1.

// ❌ 2️⃣ const func2 = function(num) {...} and  3️⃣ const func3 = (num) => {...}
// This is a function expression assigned to a const variable.
// Hoisted? The variable func2 itself is hoisted, but only its declaration. Its value is not assigned until the actual line of code is executed.
// In other words, func2 is in the temporal dead zone (TDZ) until it's assigned. Calling it before that results in:ReferenceError: Cannot access 'func2' before initialization

// | Type                     | Hoisted? | Can Call Before Declaration? |
// | ------------------------ | -------- | ---------------------------- |
// | **Function declaration** | ✅Yes     | ✅Yes                         |
// | **Function expression**  | ❌No      | ❌No                          |
// | **Arrow function**       | ❌No      | ❌No                          |
