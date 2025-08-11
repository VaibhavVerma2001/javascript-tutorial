// What is Currying?
// Currying is a functional programming technique where you transform a function that takes multiple arguments into a sequence of functions each taking one argument.
// Instead of: sum(2, 3, 4), You do: sum(2)(3)(4);

// 1️⃣ Currying using Closures
// We can create a chain of functions that remember arguments via closures.

const multiply = function (x) {
  return function (y) {
    return function (z) {
      return x * y * z;
    };
  };
};

const multiplyByTwo = multiply(2);
const multiplyByThree = multiplyByTwo(3);
const multiplyByFour = multiplyByThree(4);
console.log(multiplyByFour); // 24

// OR
console.log(multiply(2)(3)(4)); // 24

// 2️⃣ Currying using bind
// bind lets us preset some arguments of a function, returning a new function that expects the remaining ones.
function multiplyNew(a, b, c) {
  return a * b * c;
}

const mulBy2 = multiplyNew.bind(null, 2);
const mulBy2And3 = mulBy2.bind(null, 3);
const result = mulBy2And3(4);
console.log(result); // 24

// Alright, here’s a clear comparison between Session Storage, Local Storage, and Cookies, including size limits, lifespan, and use cases.
// | Feature                          | **Local Storage**                                              | **Session Storage**                     | **Cookies**                                             |
// | -------------------------------- | -------------------------------------------------------------- | --------------------------------------- | ------------------------------------------------------- |
// | **Where stored**                 | Browser (per domain)                                           | Browser (per tab/session)               | Browser + sent to server with each request              |
// | **Size limit**                   | \~5–10 MB                                                      | \~5–10 MB                               | \~4 KB                                                  |
// | **Lifetime**                     | Until manually cleared or code deletes it                      | Until tab/window is closed              | Controlled by expiry date (`Expires` / `Max-Age`)       |
// | **Access from JS**               | Yes (`localStorage`)                                           | Yes (`sessionStorage`)                  | Yes (unless `HttpOnly` flag set)                        |
// | **Sent to server automatically** | ❌ No                                                           | ❌ No                                    | ✅ Yes (on matching domain/path)                         |
// | **Scope**                        | All tabs/windows for same domain                               | Only the tab where it was set           | Depends on domain/path flags                            |
// | **Security**                     | Vulnerable to XSS if not sanitized                             | Vulnerable to XSS if not sanitized      | Vulnerable to XSS unless `HttpOnly`; vulnerable to CSRF |
// | **Typical use case**             | Persistent settings, cached data, JWT tokens (⚠️ with caution) | Temporary UI state per tab, form drafts | Server sessions, auth tokens, tracking                  |
