// STRINGS -> They are immutable in JS

let str = "Vaibhav Verma";
str[1] = "X";
console.log(str);

// ## JavaScript String Methods Cheat Sheet (with Parameters & Mutation Info)

// ---

// ### ✅ All string methods return new strings (strings are immutable).

// | Method                    | Parameters                                                    | Returns New | Description                                       |
// | ------------------------- | ------------------------------------------------------------- | ----------- | ------------------------------------------------- |
// | `length`                  | –                                                             | ✅           | Number of characters in the string                |
// | `charAt(index)`           | `index`: position to get character (0-based)                  | ✅           | Returns the character at given index              |
// | `indexOf(sub, from)`      | `sub`: text to search<br>`from`: (optional) start index       | ✅           | Returns index of first match, else -1             |
// | `lastIndexOf(sub)`        | `sub`: text to search                                         | ✅           | Returns index of last match, else -1              |
// | `includes(sub, from)`     | `sub`: text to search<br>`from`: (optional) start index       | ✅           | Returns true if found, else false                 |
// | `startsWith(prefix, pos)` | `prefix`: text<br>`pos`: (optional) position to start         | ✅           | Checks if string starts with prefix               |
// | `endsWith(suffix, len)`   | `suffix`: text<br>`len`: (optional) consider only `len` chars | ✅           | Checks if string ends with suffix                 |
// | `slice(start, end)`       | `start`: index<br>`end`: (optional) index (not inclusive)     | ✅           | Extracts part of string (allows negative indices) |
// | `substring(start, end)`   | `start`, `end`: indices (no negative allowed)                 | ✅           | Returns portion of string                         |
// | `substr(start, len)`      | `start`: index<br>`len`: number of chars                      | ✅           | Deprecated in modern JS – similar to slice        |
// | `toUpperCase()`           | –                                                             | ✅           | Converts to uppercase                             |
// | `toLowerCase()`           | –                                                             | ✅           | Converts to lowercase                             |
// | `trim()`                  | –                                                             | ✅           | Removes spaces from both ends                     |
// | `trimStart()`             | –                                                             | ✅           | Removes spaces from beginning                     |
// | `trimEnd()`               | –                                                             | ✅           | Removes spaces from end                           |
// | `replace(search, new)`    | `search`: string/regex<br>`new`: replacement                  | ✅           | Replaces first match only                         |
// | `replaceAll(search, new)` | Same as replace, but replaces all occurrences                 | ✅           | Replaces all matches                              |
// | `split(separator, limit)` | `separator`: string/regex<br>`limit`: (optional)              | ✅           | Splits string into array                          |
// | `concat(str1, str2)`      | Multiple strings                                              | ✅           | Combines strings                                  |
// | `repeat(count)`           | `count`: number of repetitions                                | ✅           | Repeats the string                                |
// | `match(regex)`            | `regex`: regular expression                                   | ✅           | Returns matched substring(s)                      |
// | `padStart(len, padStr)`   | `len`: total length<br>`padStr`: string to fill               | ✅           | Pads start of string                              |
// | `padEnd(len, padStr)`     | Same as padStart                                              | ✅           | Pads end of string                                |

// ---

// ### 🔁 Note:

// * **None of these methods modify the original string** (strings are immutable).
// * You always get a **new string** as a result.

// JavaScript String Methods with Examples and Notes

const log = console.log;

// 1. length
const str1 = "Hello";
log("1. length:", str1.length); // 5

// 2. charAt(index)
log("2. charAt:", str1.charAt(1)); // "e"

// 3. indexOf(substring, fromIndex)
const str2 = "JavaScript";
log("3. indexOf:", str2.indexOf("a", 2)); // 3

// 4. lastIndexOf(substring, fromIndex)
const str3 = "abca";
log("4. lastIndexOf:", str3.lastIndexOf("a")); // 3

// 5. includes(substring, fromIndex)
log("5. includes:", str1.includes("ell")); // true

// 6. startsWith(prefix, position)
log("6. startsWith:", str2.startsWith("Java")); // true

// 7. endsWith(suffix, length)
log("7. endsWith:", "notes.txt".endsWith(".txt")); // true

// 8. slice(start, end)
log("8. slice:", str2.slice(0, 4)); // "Java"

// 9. substring(start, end)
log("9. substring:", str1.substring(1, 4)); // "ell"

// 10. substr(start, length) – legacy
log("10. substr:", str1.substr(1, 3)); // "ell"

// 11. toUpperCase() / toLowerCase()
log("11. toUpperCase:", str1.toUpperCase()); // "HELLO"
log("11. toLowerCase:", "WORLD".toLowerCase()); // "world"

// 12. trim() / trimStart() / trimEnd()
const padded = "  test  ";
log("12. trim:", padded.trim()); // "test"
log("12. trimStart:", padded.trimStart()); // "test  "
log("12. trimEnd:", padded.trimEnd()); // "  test"

// 13. replace(searchValue, newValue)
const greet = "Hi Bob";
log("13. replace:", greet.replace("Bob", "Alice")); // "Hi Alice"

// 14. replaceAll(searchValue, newValue)
const data = "a-b-c";
log("14. replaceAll:", data.replaceAll("-", "_")); // "a_b_c"

// 15. split(separator, limit)
const csv = "one,two,three";
log("15. split:", csv.split(",", 2)); // ["one", "two"]

// 16. concat(str1, str2, ...)
log("16. concat:", "Hi".concat(" ", "there")); // "Hi there"

// 17. repeat(count)
log("17. repeat:", "ha".repeat(3)); // "hahaha"

// 18. match(regex)
const alphanum = "abc123";
log("18. match:", alphanum.match(/\d+/)); // ["123"]

// 19. padStart(targetLength, padString)
log("19. padStart:", "5".padStart(3, "0")); // "005"

// 20. padEnd(targetLength, padString)
log("20. padEnd:", "5".padEnd(3, "0")); // "500"