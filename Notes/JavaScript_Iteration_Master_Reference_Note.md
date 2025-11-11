# 🧠 JavaScript Iteration — Master Reference Note

---

## 🧩 1️⃣ What Arrays, Objects, and Strings Actually Are

| Type   | What It Really Is                                        | Example                                                    | Key Point                                                |
| ------ | -------------------------------------------------------- | ---------------------------------------------------------- | -------------------------------------------------------- |
| Object | Base structure in JS                                     | `{ name: "Girish", age: 24 }`                              | Everything in JS (Array, Function) is built from Objects |
| Array  | Special kind of Object with numeric keys ("0", "1", "2") | `[10, 20, 30]` → internally `{0:10, 1:20, 2:30, length:3}` | That’s why `typeof [] === 'object'`                      |
| String | Array-like object with indexes for each char             | `"abc"[0] → "a"`                                           | Immutable — can’t change characters                      |

---

## 🔁 2️⃣ Classic Loops (Work Everywhere)

### ✅ for

Used for arrays or strings when you need index control or want to break/continue.

```js
const arr = [10, 20, 30];
for (let i = 0; i < arr.length; i++) {
  console.log(arr[i]);
}
```

✅ Use when:

- You need index (`i`)
- You might use `break` or `continue`

❌ Don’t use for: Objects directly (needs `Object.keys()` first)

---

### ✅ while

Good when loop depends on a condition rather than fixed length.

```js
let i = 0;
while (i < 3) {
  console.log(i);
  i++;
}
```

✅ Use when: Condition-based loops  
❌ Avoid for: Normal array iteration (use `for...of`)

---

### ✅ do...while

Always runs at least once.

```js
let num = 0;
do {
  console.log(num);
  num++;
} while (num < 3);
```

✅ Use when: You must execute once before checking condition.

---

## 🔸 3️⃣ Loops Specifically for Objects and Arrays

### ⚠️ for...in → for objects, not arrays

```js
const user = { name: "Girish", age: 24 };

for (let key in user) {
  console.log(key, ":", user[key]);
}
// name : Girish
// age : 24
```

✅ Use for: Iterating object keys  
❌ Avoid for arrays → loops over enumerable properties (even prototypes)

**Why unsafe for arrays:**

```js
Array.prototype.extra = "oops";
const arr = [1, 2, 3];
for (let i in arr) console.log(i);
// 0, 1, 2, extra  ← unwanted
```

---

### ✅ for...of → for iterables (arrays, strings, maps, sets)

```js
const arr = [10, 20, 30];
for (let value of arr) {
  console.log(value);
}
```

✅ Use for: Arrays, Strings, Maps, Sets  
❌ Cannot use for: Plain objects (non-iterable)

**String example:**

```js
for (let char of "Hi!") console.log(char);
// H, i, !
```

---

### ✅ forEach() → array-only loop with callback

```js
const arr = [1, 2, 3];
arr.forEach((num, i) => {
  console.log(i, num);
});
```

✅ Use when: You want simple array iteration  
❌ Avoid when: You need `break` / `continue` (not supported)

---

## 🔸 4️⃣ Functional Array Iteration Methods

Modern, functional ways of looping arrays.

| Method   | What it does                                | Example                                |
| -------- | ------------------------------------------- | -------------------------------------- |
| map()    | Transforms elements and returns a new array | `[1,2,3].map(x => x*2)` → `[2,4,6]`    |
| filter() | Keeps elements matching condition           | `[1,2,3,4].filter(x => x>2)` → `[3,4]` |
| reduce() | Combines into one value                     | `[1,2,3].reduce((a,b)=>a+b,0)` → `6`   |
| find()   | Finds first matching element                | `[10,20,30].find(x => x>15)` → `20`    |
| every()  | Checks if all match                         | `[2,4,6].every(x=>x%2===0)` → `true`   |
| some()   | Checks if any match                         | `[1,2,3].some(x=>x>2)` → `true`        |

✅ Use when: You want functional, clean, non-mutating approach  
❌ Avoid when: You need to stop early (they loop entire array)

---

## 🔸 5️⃣ Iterating Objects Safely (Modern Way)

Objects are **not iterable**, so convert them first.

```js
const user = { name: "Girish", age: 24 };

// Keys
Object.keys(user).forEach((key) => console.log(key)); // name, age

// Values
Object.values(user).forEach((val) => console.log(val)); // Girish, 24

// Entries
Object.entries(user).forEach(([key, val]) => console.log(key, val));
```

✅ Use when: You want to iterate key–value pairs  
✅ Safe, modern, and avoids prototype pollution

---

## 🔸 6️⃣ Iterating Strings

Strings are iterable like arrays.

```js
const str = "JS";

for (let char of str) {
  console.log(char);
}
// J
// S
```

✅ Use `for...of` for strings  
✅ Can also use classic `for` with index

```js
for (let i = 0; i < str.length; i++) {
  console.log(str[i]);
}
```

❌ Avoid `forEach()` — strings don’t have it.

---

## 🧠 7️⃣ Iterable vs Non-Iterable Types

| Type   | Iterable? | Use for...of? | Notes                                |
| ------ | --------- | ------------- | ------------------------------------ |
| Array  | ✅        | ✅            | Loops over values                    |
| String | ✅        | ✅            | Loops over characters                |
| Map    | ✅        | ✅            | Loops over entries [key, value]      |
| Set    | ✅        | ✅            | Loops over values                    |
| Object | ❌        | ❌            | Must convert with `Object.entries()` |

---

## ⚙️ 8️⃣ Arrays Are Objects — Example

```js
const arr = [10, 20, 30];

console.log(typeof arr); // 'object'
console.log(Object.keys(arr)); // ['0', '1', '2']
console.log(arr.length); // 3

arr.customProp = "hello";
for (let key in arr) console.log(key); // 0,1,2,customProp ❌
```

✅ That’s why we don’t use `for...in` for arrays — it catches extra props.

---

## ⚙️ 9️⃣ Strings Are Array-Like — Example

```js
const str = "Hello";

console.log(str[0]); // 'H'
console.log(str.length); // 5

str[0] = "Y";
console.log(str); // still "Hello" (immutable)
```

✅ You can read like array  
❌ You can’t modify characters

---

## 🧠 🔟 Final Summary — Which Loop to Use (and Avoid)

| Purpose                      | Best Loop                      | Avoid        | Why                       |
| ---------------------------- | ------------------------------ | ------------ | ------------------------- |
| Iterate Array (values only)  | `for...of` / `forEach()`       | `for...in`   | clean, safe               |
| Iterate Array (need index)   | `for`                          | `for...in`   | index control             |
| Transform Array              | `map()`                        | `for...in`   | modern, functional        |
| Filter Array                 | `filter()`                     | manual loops | readable                  |
| Sum or reduce values         | `reduce()`                     | `for...in`   | concise, expressive       |
| Iterate Object (keys/values) | `Object.entries() + forEach()` | `for...of`   | object not iterable       |
| Iterate String (chars)       | `for...of`                     | `for...in`   | works cleanly             |
| Conditional Looping          | `while` / `do...while`         | —            | for condition-based loops |

---

```js
arr
  .map((x) => ({ key: fn(x), value: x }))
  .sort((a, b) => a.key - b.key)
  .map((obj) => obj.value);
```

Each call creates a new array from the previous one.

```js
const step1 = arr.map(...);
const step2 = step1.sort(...);
const step3 = step2.map(...);
```

```js
Raw input → Map stage → Sort stage → Map stage → Final output
```

Chained methods (map, sort, filter, etc.) execute one full pass each, not nested.
They’re optimized for readability and clarity, and JS engines handle them efficiently.

## ✅ Key Takeaways

🧩 Everything (arrays, functions, etc.) is built from **objects**  
🧮 Arrays = objects with numeric keys and `length` property  
🔡 Strings = array-like but immutable  
⚠️ `for...in` is for objects, **not** arrays  
💎 `for...of` is for **iterables** (arrays, strings, maps, sets)  
🧠 Use **functional methods** (`map`, `filter`, `reduce`) for clean, modern code

---
