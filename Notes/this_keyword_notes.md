🧠 **this in JavaScript — Quick Reference Notes**

---

### ⚙️ What is `this`?

`this` refers to the object that calls the function (the execution context).

Its value depends on **how** a function is called, not **where** it’s defined.

---

### 🔹 1. Global Scope
```js
console.log(this);
```
**Browser:** → `window`

**Node.js / strict mode:** → `undefined`

---

### 🔹 2. Inside an Object Method
```js
const obj = {
  name: "JS",
  show() {
    console.log(this.name);
  }
};
obj.show(); // "JS"
```
✅ `this` → the object that called the method (`obj`)

---

### 🔹 3. In a Standalone Function
```js
function greet() {
  console.log(this);
}
greet(); // undefined in strict mode, window otherwise
```
✅ Strict mode → `undefined`

✅ Non-strict mode → `window`

---

### 🔹 4. Arrow Functions
```js
const obj = {
  name: "JS",
  arrow: () => console.log(this)
};
obj.arrow(); // ❌ `this` is not `obj`
```
⚠️ Arrow functions **don’t have their own `this`**.
They capture `this` from their surrounding **lexical scope**.

---

### 🔹 5. In Constructor Functions
```js
function User(name) {
  this.name = name;
}
const u = new User("Alice");
console.log(u.name); // Alice
```
✅ `this` → the **newly created instance**.

---

### 🔹 6. In Classes
```js
class Car {
  constructor(model) {
    this.model = model;
  }
  show() {
    console.log(this.model);
  }
}
new Car("BMW").show(); // "BMW"
```
✅ Same as constructor functions — `this` → the instance.

---

### 🔹 7. Using call(), apply(), bind()
You can manually set `this`:

```js
function show() { console.log(this.name); }
const user = { name: "Girish" };

show.call(user);   // "Girish"
show.apply(user);  // "Girish"
const boundFn = show.bind(user);
boundFn();         // "Girish"
```

| Method | Effect |
|---------|--------|
| **call(thisArg, ...args)** | Invokes immediately with `this` set |
| **apply(thisArg, [args])** | Same but arguments as array |
| **bind(thisArg)** | Returns new function with fixed `this` |

---

### 🔹 8. In Prototypes
```js
Array.prototype.last = function() {
  return this[this.length - 1];
};
[1,2,3].last(); // 3
```
✅ Works because `this` points to the **array instance** that called `.last()`.

⚠️ If written as arrow function → `this = undefined`.

---

### 🧾 TL;DR Table
| Context | `this` refers to |
|----------|------------------|
| Global (strict) | `undefined` |
| Global (non-strict) | `window` / `global` |
| Object method | The object |
| Function (strict) | `undefined` |
| Function (non-strict) | Global object |
| Arrow function | `this` of outer scope |
| Constructor / Class | The instance |
| With .call / .apply / .bind | Explicitly set value |
| In prototype method | The instance calling the method |

---

### 🧠 Bonus — Debug Tip
If you’re ever unsure:
```js
console.log(this);
```
Check what’s printed — it reveals the current **execution context** instantly.

