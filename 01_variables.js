const userId = 123456;
let userName = "Vaibhav";
var city = "lucknow";
age = 22; // no error can declare like this also

// userId = 4321;  // error

console.log({ userId, userName, city, age });

// cant redclare let
// let userName = "abcd"; // error

// can redeclare var
var city = "gurgaon";
console.log("2", city);

// let has local scope
{
  let userName = "abcd";
  console.log("3", userName);
}
console.log("4", userName);

// var has global scope, so prefer not to use var
{
  var city = "new city";
}
console.log("5", city); // original city will change too

// Key Differences Summary
// Feature	     var	                           let	                        const
// Scope	       Function-scoped	               Block-scoped	                Block-scoped
// Hoisting	     Yes, initialized as undefined	 Yes, but not initialized	    Yes, but not initialized
// Reassignable	 ✅ Yes	                        ✅ Yes	                       ❌ No
// Redeclarable	 ✅ Yes	                        ❌ No	                       ❌ No
