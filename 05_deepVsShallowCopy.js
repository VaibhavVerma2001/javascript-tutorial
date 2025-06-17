// ✅ slice vs splice in JavaScript

// | Feature                 | `slice()`                           | `splice()`                     |
// | ----------------------- | ----------------------------------- | ------------------------------ |
// | Purpose                 | Extract a portion (non-destructive) | Add/remove items (destructive) |
// | Return                  | Returns a new array                 | Returns removed elements       |
// | Modifies original array | ❌ No                                | ✅ Yes                        |
// | Data Type               | Arrays (also works for Strings)     | Arrays only                    |

// slice() – Non-destructive
const arr = [1, 2, 3, 4, 5];

// slice(start, end) – end is non-inclusive
const newArr = arr.slice(1, 4); // [2, 3, 4]

console.log(newArr); // [2, 3, 4]
console.log(arr); // [1, 2, 3, 4, 5] – original remains unchanged

// splice() – Destructive
const arr2 = [1, 2, 3, 4, 5];

// splice(start, deleteCount, ...itemsToAdd)
const removed = arr2.splice(1, 2, "a", "b"); // removes 2 items starting at index 1

console.log(removed); // [2, 3]
console.log(arr2); // [1, 'a', 'b', 4, 5] – array changed

// ✅ Deep Copy vs Shallow Copy in JavaScript
// 📌 Shallow Copy:
// Only copies references to nested objects.
// Changes in nested objects affect both original and copy.

// A shallow copy:

// ✅ Copies top-level values (like strings, numbers, booleans) by value

// ❌ Copies nested objects/arrays by reference, not by value

// 🔍 So what happens?
// If you change a nested object/array in the shallow copy, it will also reflect in the original, because both point to the same memory reference for that nested object.

// 🔧 Example:
const original = {
  name: "John",
  address: {
    city: "Delhi",
    pincode: 110001,
  },
};

// Shallow copy using spread
const shallow = { ...original };

// Change top-level value
shallow.name = "Alice";

// Change nested value
shallow.address.city = "Mumbai";

console.log(original.name); // "John" ✅ not affected
console.log(original.address.city); // "Mumbai" ❗ affected
// 📌 Explanation:
// ✅ name is a primitive, so it's copied by value — safe.

// ❌ address is an object, copied by reference — changing it affects both.

// ✅ Tip:
// Use structuredClone(obj) or libraries like lodash (_.cloneDeep) if you want to deeply copy all levels, including nested ones.

// 📌 Deep Copy:
// Recursively copies all nested objects.
// Both original and copied are completely independent.

//  Deep Copy Examples
// 1. Using structuredClone() (✅ Modern and native)
const obj3 = { a: 1, nested: { b: 2 } };
const deepCopy = structuredClone(obj3); // in above node version 17

deepCopy.nested.b = 100;

console.log(obj3.nested.b); // 2 – unaffected

// 2. Using JSON.parse(JSON.stringify(...)) (⚠️ Limited – won't copy functions, undefined, Map, etc.)
const obj4 = { a: 1, nested: { b: 2 } };
const deepCopy2 = JSON.parse(JSON.stringify(obj4));

deepCopy2.nested.b = 88;

console.log(obj4.nested.b); // 2 – safe

// | Feature                | Shallow Copy                    | Deep Copy                                           |
// | ---------------------- | ------------------------------- | --------------------------------------------------- |
// | Copies nested objects? | ❌ No (references shared)        | ✅ Yes (complete clone)                              |
// | Methods                | `Object.assign()`, spread `...` | `structuredClone()`, `JSON.parse(JSON.stringify())` |
// | Affected by changes?   | ✅ Yes if nested changes         | ❌ No                                                |
