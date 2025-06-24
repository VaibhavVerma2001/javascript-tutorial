// Object Literal ->
const obj = {
  name: "Vaibhav",
  "full name": "abc xyz",
  age: 23,
  isValid: true,
  //   greeting: () => {
  //     console.log(`Good morning : ${this.name}`);
  //   }, // Arrow function dont has this
  greeting: function () {
    console.log(`Good morning : ${this.name}`);
  },
};

console.log(obj.name);
console.log(obj["full name"]);

obj.name = "xyz";
console.log(obj.name);

// Object.freeze(obj); // Cant change value now
// obj.name = "abc";
// console.log(obj.name);

obj.greeting();

// Object Singleton -> created using constructor
// const obj2 = {}; // non - singleton object
const obj2 = new Object(); // Singleton object

console.log(obj2);

//Object.assign(target,...source)
const obj3 = { 1: "a", 2: "b" };
const obj4 = { 3: "a", 4: "b" };
const obj5 = { 5: "a", 6: "b" };

const obj6 = Object.assign({}, obj3, obj4, obj5);
console.log("obj6 : ", obj6);

const obj7 = { ...obj3, ...obj4, ...obj5 };
console.log("obj7 : ", obj7);

// ✅ Both produce the same result in this case.
// ✅ Yes, both create shallow copies.

// | Feature                  | `Object.assign()`                   | Spread (`...`)                            |
// | ------------------------ | ----------------------------------- | ----------------------------------------- |
// | Syntax                   | `Object.assign(target, ...sources)` | `{ ...source1, ...source2 }`              |
// | Return value             | Returns the **target object**       | Returns a **new object**                  |
// | Mutation                 | May mutate the target (if not `{}`) | Never mutates inputs — always returns new |
// | Prototype preserved?     | ❌ No                                | ❌ No                                      |
// | Can copy getter/setters? | ✅ Yes (copies property descriptors) | ❌ No (only copies values)                 |

// Important object methods -
const newUser = {
  name: "Vaibhav",
  "full name": "abc xyz",
  age: 23,
  isValid: true,
};

// 🔹 1. Object.keys(obj)
// Returns an array of the object's own enumerable property names (keys).
console.log(Object.keys(newUser)); // [ 'name', 'full name', 'age', 'isValid' ]
// To find length
console.log(Object.keys(newUser).length); // 4

// 🔹 2. Object.values(obj)
// Returns an array of the object's own enumerable property values.
console.log(Object.values(newUser)); // [ 'Vaibhav', 'abc xyz', 23, true ]

// 🔹 3. Object.entries(obj)
// Returns an array of key-value pairs as arrays.
console.log(Object.entries(newUser)); // [ [ 'name', 'Vaibhav' ], [ 'full name', 'abc xyz' ], [ 'age', 23 ], [ 'isValid', true ] ]

// 🔹 4. Object.fromEntries(entries)
// Converts an array of key-value pairs back to an object (reverse of entries).
const entries = Object.entries(newUser);
const objBack = Object.fromEntries(entries);
console.log(objBack);
// ➤ { name: 'Vaibhav', 'full name': 'abc xyz', age: 23, isValid: true }

// 🔹 5. Object.hasOwnProperty(prop)
// Checks if the object has a property directly (not from prototype).
console.log(newUser.hasOwnProperty("age")); // true
console.log(newUser.hasOwnProperty("salary")); // false

// 🔹 6. Object.freeze(obj)
// Makes the object immutable (can't add/delete/modify properties).
Object.freeze(newUser);
newUser.age = 25;
newUser.city = "Delhi";
console.log(newUser.age); // still 23
console.log(newUser.city); // undefined

// 🔹 7. Object.seal(obj)
// You can modify existing properties but can’t add or delete them.
const sealedUser = { ...newUser };
Object.seal(sealedUser);

sealedUser.age = 30; // ✅ allowed
sealedUser.city = "Delhi"; // ❌ won't be added
delete sealedUser.name; // ❌ won't be deleted

console.log(sealedUser);
// ➤ { name: 'Vaibhav', 'full name': 'abc xyz', age: 30, isValid: true }

// Loop over objects
const user = {
  name: "Vaibhav",
  age: 23,
  isValid: true,
};

// ✅ 1. Object.keys(obj).map()
// → Map over keys
const keyMapped = Object.keys(user).map((key) => {
  return `Key : ${key} and value : ${user[key]}`;
});

console.log("keyMapped : ", keyMapped); // keyMapped :  ['Key : name and value : Vaibhav', 'Key : age and value : 23', 'Key : isValid and value : true']

// ✅ 2. Object.values(obj).map()
// → Map over values
const valueMapped = Object.values(user).map((value) => `Value : ${value}`);
console.log("valueMapped : ", valueMapped); //[ 'Value : Vaibhav', 'Value : 23', 'Value : true' ]

// ✅ 3. Object.entries(obj).map()
// → Best way to map both key & value
const newEntryObj = Object.entries(user).map(([key, value]) => {
  return `${key} and ${value}`;
});
console.log("newEntryObj : ", newEntryObj);

// ✅ 4. Transform Object Keys/Values — Rebuild Object After Mapping
const transformedObj = Object.fromEntries(
  Object.entries(user).map(([key, value]) => {
    return [key, value];
  })
);
console.log("transformedObj : ", transformedObj); // { name: 'Vaibhav', age: 23, isValid: true }

// ✅ 5. For...in Loop (Traditional Mapping-like)
// Use if you want more control (but not functional style)
const result = [];
for (const key in user) {
  if (user.hasOwnProperty(key)) {
    result.push(`${key} and ${user[key]}`);
  }
}
console.log("result : ", result); // [ 'name and Vaibhav', 'age and 23', 'isValid and true' ]

// 🔄 Summary Table
// | Method                   | Can Access    | Returns             | Can Rebuild Object?  |
// | ------------------------ | ------------- | ------------------- | -------------------- |
// | `Object.keys().map()`    | 🔑 Key only   | `Array`             | ❌ Manual             |
// | `Object.values().map()`  | 🔢 Value only | `Array`             | ❌ Manual             |
// | `Object.entries().map()` | ✅ Both        | `Array`             | ✅ with `fromEntries` |
// | `for...in` loop          | ✅ Both        | `Array` (if pushed) | ✅                    |



// Use await - 
// ❌ What Doesn’t Work
// Trying await inside a plain .forEach():

Object.entries(user).forEach(async ([key, value]) => {
  const result = await processValue(value);
  console.log(result);
});
// ⚠️ Doesn’t wait properly because forEach doesn’t respect async


// ✅ Correct Approaches
// 1️⃣ Use for...of (Best for async)

for (const [key, value] of Object.entries(user)) {
  const result = await processValue(value);
  console.log(key, result);
}