// Callback Hell refers to a situation in JavaScript where multiple asynchronous operations are nested within each other using callbacks, making the code difficult to read, maintain, and debug. It often looks like a "pyramid of doom" or deeply nested structure.

// Nested callbacks
getUser(userId, function (user) {
  getPosts(user.id, function (posts) {
    getComments(posts[0].id, function (comments) {
      sendNotification(comments, function (response) {
        console.log("Notification sent!");
      });
    });
  });
});

// Pros -
// | Point                            | Explanation                                                  |
// | -------------------------------- | ------------------------------------------------------------ |
// | ✅ Simple for small tasks         | Easy to understand and implement for single async actions    |
// | ✅ Core JavaScript mechanism      | Supported by all JavaScript environments without extra setup |
// | ✅ Useful for one-off async tasks | Still relevant in event listeners, DOM APIs, etc.            |

// Cons -
// | Problem                    | Impact                                                     |
// | -------------------------- | ---------------------------------------------------------- |
// | ❌ Poor readability         | Code becomes hard to follow with increasing nesting        |
// | ❌ Difficult error handling | Each callback must manage its own `try/catch` or error arg |
// | ❌ Hard to maintain         | Future modifications become error-prone                    |
// | ❌ No return values         | You can't `return` values naturally from nested callbacks  |

// ✅ Solution: Avoiding Callback Hell
// Use modern async techniques:

// 1-  Promises
getUser(userId)
  .then((user) => getPosts(user.id))
  .then((posts) => getComments(posts[0].id))
  .then((comments) => sendNotification(comments))
  .then(() => console.log("Notification sent!"))
  .catch((err) => console.error(err));

// 2- Async/Await
async function notifyUser(userId) {
  try {
    const user = await getUser(userId);
    const posts = await getPosts(user.id);
    const comments = await getComments(posts[0].id);
    await sendNotification(comments);
    console.log("Notification sent!");
  } catch (err) {
    console.error(err);
  }
}
