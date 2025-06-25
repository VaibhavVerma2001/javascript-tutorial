console.log(this); // OP - {} -> In node js
// In the browser, this at the global level is the window object. So, console.log(this) shows the global window.
// In Node.js, this at the global level is an empty object {}, because Node treats each file as a module, and this is the module scope (and not the global object).

const user = {
  name: "vaibhav",
  age: 21,
  greet: function () {
    console.log(this); // 'this' refers to current context // OP = { name: 'vaibhav', age: 21, greet: [Function: greet] }
    console.log(`Hello ${this.name}`);
  },
};

user.greet(); // Hello vaibhav
user.name = "sam";
user.greet(); // Hello vaibhav

const func = ({ name }) => {
  console.log(this); // {}
  console.log(this.name); // undefined
};

func({ name: "abc" });
