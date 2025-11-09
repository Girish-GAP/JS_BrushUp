# 🌟 JavaScript Spread Operator, Iterables, Literals & Enumerables — Easy Reference

## 🔹 1. Spread Operator (`...`)

The **spread operator (`...`)** expands things like arrays, strings, or sets into **individual elements**.

```js
Math.max(...[1, 2, 3]); // → 3
console.log(..."abc"); // → a b c
```

➡️ Expands `[1, 2, 3]` into `1, 2, 3`.

---

### ❌ Doesn’t Work With Plain Objects

```js
console.log(...{ a: 1, b: 2 });
// ❌ TypeError: Object is not iterable
```

Because plain objects are **not iterable**.

💡 Old (pre-ES6) way:

```js
Math.max.apply(null, [1, 2, 3]); // same as Math.max(...[1, 2, 3])
```

---

## 🔹 2. Spread in Objects

In objects, spread **copies properties** rather than expanding elements.

```js
const obj1 = { a: 1, b: 2 };
const obj2 = { ...obj1, c: 3 };
console.log(obj2); // { a: 1, b: 2, c: 3 }
```

➡️ Think of it as **merging** or **cloning** properties.

---

## 🔹 3. Iterable vs Non-Iterable

| Type      | Iterable? | Example          | Works with `...`? |
| --------- | --------- | ---------------- | ----------------- |
| Array     | ✅ Yes    | `[1, 2, 3]`      | ✅                |
| String    | ✅ Yes    | `'abc'`          | ✅                |
| Map / Set | ✅ Yes    | `new Set([1,2])` | ✅                |
| Object    | ❌ No     | `{ a:1, b:2 }`   | ❌                |

An **iterable** has a special method called:

```js
obj[Symbol.iterator];
```

That’s how JavaScript knows **how to loop over it** or **spread it**.

---

## 🔹 4. Literals (Simple Meaning)

A **literal** just means writing the value **directly in your code**, not creating it through a constructor.

| Type            | Example          |
| --------------- | ---------------- |
| Object literal  | `{ a: 1, b: 2 }` |
| Array literal   | `[1, 2, 3]`      |
| String literal  | `"hello"`        |
| Number literal  | `42`             |
| Boolean literal | `true`           |

💡 _Literal = Directly written value, not constructed dynamically._

---

## 🔹 5. Enumerable Properties

Every object property has hidden “flags”:

- `value`
- `writable`
- `enumerable`
- `configurable`

**Enumerable** means “can this property show up in loops or `Object.keys()`?”

```js
const user = { name: "Girish" };
Object.defineProperty(user, "age", {
  value: 24,
  enumerable: false,
});
console.log(Object.keys(user)); // ['name'] only
```

✅ The spread `{ ...obj }` copies **only enumerable** properties.

---

## ✅ Final Quick Recap

| Concept            | Meaning                                        | Example                                   |
| ------------------ | ---------------------------------------------- | ----------------------------------------- |
| **Spread (`...`)** | Expands iterable values or copies object props | `Math.max(...arr)` / `{...obj}`           |
| **Iterable**       | Something loopable (has `Symbol.iterator`)     | Arrays, strings, sets                     |
| **Literal**        | Value written directly in code                 | `{ a:1 }`, `[1,2]`                        |
| **Enumerable**     | Shows up in loops or `Object.keys()`           | Only enumerable keys copied by `{...obj}` |

---

## 💡 One-Line Summary

> Spread expands iterables, literals define data directly, and enumerable properties decide what’s visible in loops.

# 🧠 JavaScript Rest Parameter — `...args`

---

## 🧩 What It Does

The **rest parameter** collects all remaining function arguments into a **real array**.

```js
function sum(...args) {
  return args.reduce((a, b) => a + b);
}
sum(1, 2, 3); // 6
```

✅ Converts remaining arguments → real array  
✅ Works with both normal and arrow functions  
✅ Lets you use array methods (`map`, `reduce`, `filter`, etc.)  
❌ Only one rest parameter allowed — **must be the last** in the function signature.

---

## ⚙️ Example

```js
function demo(a, b, ...rest) {
  console.log(a, b); // first two
  console.log(rest); // remaining arguments as array
}

demo(1, 2, 3, 4, 5);
// a = 1, b = 2, rest = [3, 4, 5]
```

---

## 💡 Common Use Cases

### 🧮 1️⃣ Variable Number of Arguments

```js
function total(...nums) {
  return nums.reduce((sum, n) => sum + n, 0);
}
console.log(total(5, 10, 15)); // 30
```

---

### 🔁 2️⃣ Combine With Spread Operator

Spread expands arrays; rest collects them back.

```js
const nums = [1, 2, 3];
console.log(sum(...nums)); // spread values into arguments
```

✅ Spread → expands an array  
✅ Rest → collects arguments into an array

---

### 🧠 3️⃣ Default and Rest Together

```js
function log(type = "info", ...messages) {
  console.log(`[${type}]`, messages.join(", "));
}
log("error", "File missing", "Line 10");
// [error] File missing, Line 10
```

---

## ⚙️ Comparison with `arguments`

| Feature                 | `arguments` | `...rest`      |
| ----------------------- | ----------- | -------------- |
| Type                    | Array-like  | Real array ✅  |
| Works in arrow function | ❌ No       | ✅ Yes         |
| Uses array methods      | ❌ No       | ✅ Yes         |
| Modern use              | ❌ Old      | ✅ Recommended |

---

## 🧩 Real Example — Logging Utility

```js
function logAll(...args) {
  args.forEach((arg) => console.log(arg));
}
logAll("🚀 Start", "Processing", "✅ Done");
```

Output:

```
🚀 Start
Processing
✅ Done
```

---

## 🚀 Quick Recap

| Concept            | Meaning                                     |
| ------------------ | ------------------------------------------- |
| `...args`          | Collects remaining parameters into an array |
| `args.length`      | Number of collected arguments               |
| `args.map()`       | Works because it's a real array             |
| `...` must be last | Rest parameter must appear at the end       |
| Modern replacement | for legacy `arguments`                      |

💡 **In short:**  
Use `...args` for flexible, clean, and modern functions that handle dynamic numbers of arguments.
