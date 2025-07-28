const { pbkdf2 } = require("crypto");

function asyncCryptoTask(index) {
  return new Promise((resolve) => {
    pbkdf2("password", "salt", 100000, 64, "sha512", () => {
      console.log(`Done: ${index}`);
      resolve(index);
    });
  });
}

async function run() {
  const tasks = Array.from({ length: 100 }, (_, i) => asyncCryptoTask(i));
  const start = Date.now();
  await Promise.all(tasks);
  console.log("All done in", (Date.now() - start) / 1000, "s");
}
run();
