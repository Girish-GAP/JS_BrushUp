# 🧠 Object in JavaScript — The Complete Developer + Interview Note

---

## 🔹 1️⃣ What is an Object?

An **object** in JavaScript is a collection of **key–value pairs** (unordered).  
It’s one of the **core data types** and forms the **foundation for arrays, functions, and classes** — all of which are objects under the hood.

```js
const user = { name: "Girish", age: 25 };
```

Internally equivalent to:

```js
const user = new Object({ name: "Girish", age: 25 });
```

---

## 🔹 2️⃣ What Happens Internally When You Create an Object?

When you write `{}`, the JS engine internally:

1. Creates a new empty object in memory
2. Sets its internal `[[Prototype]]` to `Object.prototype`
3. Returns a reference to it

```js
const obj = {};
console.log(Object.getPrototypeOf(obj) === Object.prototype); // true
```

📎 Every object in JS inherits from `Object.prototype`, unless explicitly changed.

---

## 🔹 3️⃣ Object vs Object Literal

| Form             | Example        | Behavior                      |
| ---------------- | -------------- | ----------------------------- |
| Object literal   | `{}`           | ✅ Preferred, faster, cleaner |
| Constructor form | `new Object()` | Same result, rarely used      |

---

## 🔹 4️⃣ Objects Are Reference Types

Objects are **stored by reference**, not by value.

```js
const a = { x: 1 };
const b = a;
b.x = 2;
console.log(a.x); // 2
```

📌 Even if declared with `const`, you can modify its properties — because `const` locks the **reference**, not the content.

---

## 🔹 5️⃣ Object Prototype Chain

Every object has an internal `[[Prototype]]` that links to another object.

```
{} → Object.prototype → null
```

So, all plain objects inherit utility methods from `Object.prototype`.

Access it via:

```js
Object.getPrototypeOf(obj);
```

Or in modern syntax:

```js
obj.__proto__;
```

---

## 🔹 6️⃣ Constructor and Static Methods of Object

### 🧩 Static Methods (called on Object itself)

| Method                                | Purpose                                                 |
| ------------------------------------- | ------------------------------------------------------- |
| Object.keys(obj)                      | Returns array of keys                                   |
| Object.values(obj)                    | Returns array of values                                 |
| Object.entries(obj)                   | Returns array of [key, value] pairs                     |
| Object.fromEntries(entries)           | Converts [key, value] pairs back to object              |
| Object.assign(target, ...sources)     | Copies properties from source to target                 |
| Object.create(proto)                  | Creates a new object with a given prototype             |
| Object.freeze(obj)                    | Makes object completely immutable                       |
| Object.seal(obj)                      | Prevents adding/removing properties (can modify values) |
| Object.preventExtensions(obj)         | Prevents adding new properties                          |
| Object.getPrototypeOf(obj)            | Returns prototype                                       |
| Object.setPrototypeOf(obj, proto)     | Sets prototype                                          |
| Object.getOwnPropertyNames(obj)       | Lists all property names (including non-enumerable)     |
| Object.getOwnPropertyDescriptors(obj) | Returns all property descriptors                        |
| Object.hasOwn(obj, key)               | Checks if property exists directly on object (ES2022)   |
| Object.is(a, b)                       | Like === but handles NaN and -0 correctly               |

---

## 🔹 7️⃣ Prototype Methods (inherited by all objects)

| Method                    | Description                                           |
| ------------------------- | ----------------------------------------------------- |
| hasOwnProperty(key)       | Checks if property exists directly on object          |
| isPrototypeOf(obj)        | Checks if this object is in another’s prototype chain |
| propertyIsEnumerable(key) | Checks if property is enumerable                      |
| toString()                | Returns `[object Object]` or custom type string       |
| valueOf()                 | Returns primitive representation                      |
| toLocaleString()          | Locale-aware string representation                    |

Example:

```js
const user = { name: "Girish" };
console.log(user.hasOwnProperty("name")); // true
console.log(user.toString()); // [object Object]
```

---

## 🔹 8️⃣ Property Descriptors

Each property has hidden settings called **descriptors**:

- `value`
- `writable`
- `enumerable`
- `configurable`

Example:

```js
const obj = { name: "Girish" };
console.log(Object.getOwnPropertyDescriptor(obj, "name"));
```

Output:

```js
{ value: 'Girish', writable: true, enumerable: true, configurable: true }
```

---

## 🔹 9️⃣ Enumerable vs Non-enumerable

Properties marked as `enumerable: false` won’t appear in:

- `Object.keys()`
- `for...in` loops
- `JSON.stringify()`

---

## 🔹 🔟 Object Immutability

| Method                        | Effect                                                |
| ----------------------------- | ----------------------------------------------------- |
| Object.freeze(obj)            | ❌ No new props, ❌ no delete, ❌ no modify           |
| Object.seal(obj)              | ❌ No new props, ❌ no delete, ✅ can modify existing |
| Object.preventExtensions(obj) | ❌ No new props, ✅ can delete/modify existing        |

---

## 🔹 11️⃣ Map / Filter Equivalent for Objects

Objects don’t have `.map()` or `.filter()`, but you can simulate them using `Object.entries()` and `Object.fromEntries()`.

### Filter Example

```js
const user = { a: 1, b: 2, c: 3 };

const filtered = Object.fromEntries(
  Object.entries(user).filter(([key, val]) => val > 1)
);
// { b: 2, c: 3 }
```

### Map Example

```js
const doubled = Object.fromEntries(
  Object.entries(user).map(([key, val]) => [key, val * 2])
);
// { a: 2, b: 4, c: 6 }
```

---

## 🔹 12️⃣ Common Interview Questions

**Q1️⃣:** Difference between `Object.freeze()` and `Object.seal()`  
→ `freeze()` = cannot add, delete, or modify.  
→ `seal()` = cannot add/delete, but can modify existing.

**Q2️⃣:** What is Prototype Chain?  
Every object has a hidden link (`[[Prototype]]`) pointing to another object — usually `Object.prototype`. This continues until `null`.

**Q3️⃣:** Why objects don’t have `map()` or `filter()`?  
Because they’re **unordered key-value structures**, not **index-based sequences**.

**Q4️⃣:** Difference between `in` and `hasOwnProperty()`

```js
const obj = { a: 1 };
console.log("a" in obj); // true
console.log(obj.hasOwnProperty("a")); // true
console.log("toString" in obj); // true (inherited)
console.log(obj.hasOwnProperty("toString")); // false
```

**Q5️⃣:** Shallow vs Deep Copy

| Type         | Method                                                     | Description               |
| ------------ | ---------------------------------------------------------- | ------------------------- |
| Shallow Copy | `Object.assign({}, obj)` / `{...obj}`                      | Copies top-level only     |
| Deep Copy    | `structuredClone(obj)` / `JSON.parse(JSON.stringify(obj))` | Copies nested objects too |

---

## 🔹 13️⃣ Special Objects and Inheritance

- `Object.prototype` → root of all objects
- Arrays, functions, and user-defined classes all inherit from it

```js
console.log([] instanceof Object); // true
console.log(function () {} instanceof Object); // true
```

---

## 🔹 14️⃣ Useful Inspection Tricks

```js
console.log(Object.getOwnPropertyNames(Object)); // static methods
console.log(Object.getOwnPropertyNames(Object.prototype)); // prototype methods
console.log(Object.keys(obj)); // enumerable keys
console.log(Object.entries(obj)); // key-value pairs
```

---

## 🔹 15️⃣ Key Takeaways (Must Remember)

✅ `{}` is shorthand for `new Object()`  
✅ All objects inherit from `Object.prototype`  
✅ Objects are reference types  
✅ Use destructuring or `fromEntries()` for immutable transformations  
✅ `map()` and `filter()` don’t exist for objects — use entries workaround  
✅ `Object.freeze`, `Object.seal`, and `Object.preventExtensions` control mutability  
✅ `Object.create()` enables prototype-based inheritance

---

### 💡 In One Line:

> Objects are the DNA of JavaScript — everything in JS eventually inherits from them.

# 🧠 Two Ways to Access Object Properties in JavaScript

---

In JavaScript, you can access values from an object in two main ways 👇

---

## ✅ 1️⃣ Dot Notation → `obj.key`

```js
const user = { name: "Girish", age: 25 };

console.log(user.name); // "Girish"
console.log(user.age); // 25
```

✔️ Clean and simple — used most of the time.  
⚠️ Limitation: doesn’t work for dynamic keys or keys with spaces.

---

## ⚠️ 2️⃣ Bracket Notation → `obj[key]`

```js
const user = { name: "Girish", age: 25 };
const key = "name";

console.log(user[key]); // "Girish"
```

✔️ Works dynamically  
✔️ Works with keys that have spaces or special characters  
✔️ Works when key is stored in a variable

---

## 🧩 Difference Between the Two

| Feature                        | `obj.key` | `obj[key]` |
| ------------------------------ | --------- | ---------- |
| When key is known              | ✅ Works  | ✅ Works   |
| When key is variable           | ❌ Fails  | ✅ Works   |
| When key has space/symbol      | ❌ Fails  | ✅ Works   |
| When key is dynamic (computed) | ❌ Fails  | ✅ Works   |

---

### Example — Key with Space

```js
const user = { "first name": "Girish" };

console.log(user["first name"]); // ✅ "Girish"
console.log(user.first name);    // ❌ Syntax error
```

---

### Example — Dynamic Key

```js
const key = "age";
const user = { name: "Girish", age: 25 };

console.log(user.key); // ❌ undefined
console.log(user[key]); // ✅ 25
```

🧠 Because `user.key` literally means “property named 'key'”, not `'age'`.

---

## ⚙️ Internally — How It Works

Both notations are related:

- `obj.key` → shorthand for `obj["key"]`
- `obj[key]` → evaluates the **expression** inside the brackets.

### Example of Computed Access

```js
const index = "city";
const user = { city: "Pune" };

console.log(user[index]); // "Pune"
```

---

## 🚀 Pro Tip — Dynamic Access & Updates

```js
const prop = "name";
const user = { name: "Girish" };

user[prop] = "Pawar"; // ✅ updates value dynamically

console.log(user); // { name: "Pawar" }
```

✅ Perfect when:

- Accessing keys programmatically
- Working in loops
- Using user input as property names

---

## 🧠 TL;DR Summary

| Use Case                             | Recommended |
| ------------------------------------ | ----------- |
| Static, simple keys                  | `obj.key`   |
| Dynamic keys or keys with spaces     | `obj[key]`  |
| When iterating over keys             | `obj[key]`  |
| When defining/removing computed keys | `obj[key]`  |

---

💡 **Remember:**  
Use **dot notation** for readability and simplicity.  
Use **bracket notation** when you need flexibility or dynamic behavior.
