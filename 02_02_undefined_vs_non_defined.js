// ✅ 1. undefined
// Means the variable exists but has no value assigned to it yet.
let x;
console.log(x);

// ❌ 2. Not Defined (ReferenceError)
// Means the variable was never declared at all.
// console.log(y); // error

// | Term        | Meaning                                    | Throws Error?          |
// | ----------- | ------------------------------------------ | ---------------------- |
// | `undefined` | Variable is declared but no value assigned | ❌ No                   |
// | Not defined | Variable is not declared at all            | ✅ Yes (ReferenceError) |

console.log(typeof null); // object
console.log(typeof undefined); // undefined
console.log(null == undefined); // true

// 🔸 3. null
// Assigned manually by the programmer.
// Means "no value", but it's intentional — used to say, “this should be empty”.
// Often used as a placeholder for future assignment.
let user = null;
const info = { age: null };
console.log(user);
console.log(info.age);
