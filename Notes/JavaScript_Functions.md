# 🧠 Everything You Must Know About Functions in JavaScript

---

## 🧩 1️⃣ What is a Function?

A function is a **reusable block of code** that performs a specific task.

Think of it as a machine: you give it inputs (parameters), it processes them, and gives an output (return).

```js
function add(a, b) {
  return a + b;
}
console.log(add(2, 3)); // 5
```

---

## ⚙️ 2️⃣ Function Anatomy

```js
function greet(name) {
  return `Hello, ${name}!`;
}
```

| Part     | Meaning            |
| -------- | ------------------ |
| function | Keyword to declare |
| greet    | Function name      |
| (name)   | Parameter(s)       |
| { ... }  | Function body      |
| return   | Output value       |

---

## 🔹 3️⃣ Types of Functions

### 🟢 (A) Function Declaration

```js
function sayHello() {
  console.log("Hello!");
}
sayHello();
```

✅ **Hoisted** — can be called before it’s defined.

---

### 🟡 (B) Function Expression

```js
const sayHello = function () {
  console.log("Hello!");
};
sayHello();
```

❌ Not hoisted — must be called after definition.

---

### 🟠 (C) Arrow Function (ES6)

```js
const sayHello = () => console.log("Hello!");
```

✅ Short syntax  
❌ No own `this`, `arguments`, or `prototype`

Use for callbacks, event handlers, or inline functions.

---

### 🔵 (D) IIFE — Immediately Invoked Function Expression

```js
(function () {
  console.log("Runs instantly!");
})();
```

Used for private scopes or one-time initialization.

---

### 🟤 (E) Constructor Function

```js
function Person(name) {
  this.name = name;
}
const p1 = new Person("Girish");
console.log(p1.name); // Girish
```

---

### ⚫ (F) Generator Function

```js
function* gen() {
  yield 1;
  yield 2;
}
const it = gen();
console.log(it.next()); // {value: 1, done: false}
```

---

## 🧠 4️⃣ Function Hoisting

| Function Type | Hoisted? | Call Before Definition? |
| ------------- | -------- | ----------------------- |
| Declaration   | ✅ Yes   | ✅                      |
| Expression    | ❌ No    | ❌                      |
| Arrow         | ❌ No    | ❌                      |

---

## 🧱 5️⃣ Functions are First-Class Citizens

Functions can be:

- Stored in variables
- Passed as arguments
- Returned from other functions
- Stored in objects/arrays

```js
function sayHi() {
  console.log("Hi");
}
function run(fn) {
  fn();
}
run(sayHi); // "Hi"
```

---

## 🧩 6️⃣ Higher-Order Functions

Functions that take or return other functions.

```js
function greet(name) {
  return () => console.log(`Hi ${name}`);
}
const hiGirish = greet("Girish");
hiGirish(); // "Hi Girish"
```

---

## 🧱 7️⃣ Closures

A closure is when a function “remembers” variables from its outer scope even after that scope is gone.

```js
function outer() {
  let counter = 0;
  return function inner() {
    counter++;
    console.log(counter);
  };
}
const inc = outer();
inc(); // 1
inc(); // 2
```

---

## 🔍 8️⃣ Lexical Scope

Scope is determined **by where the function is defined**, not where it’s called.

```js
let name = "Outer";
function outer() {
  let name = "Inner";
  function sayName() {
    console.log(name);
  }
  return sayName;
}
const fn = outer();
fn(); // Inner
```

---

## ⚙️ 9️⃣ this Keyword in Functions

| Function Type | How `this` behaves                |
| ------------- | --------------------------------- |
| Normal        | Depends on how it’s called        |
| Arrow         | Uses `this` from parent (lexical) |

```js
const obj = {
  name: "Girish",
  normal() {
    console.log(this.name);
  },
  arrow: () => console.log(this.name),
};
obj.normal(); // Girish ✅
obj.arrow(); // undefined ❌
```

---

## 🧾 🔟 Default & Rest Parameters

```js
function greet(name = "Guest") {
  console.log(`Hello, ${name}`);
}
greet(); // Hello, Guest

function sum(...nums) {
  return nums.reduce((a, b) => a + b);
}
console.log(sum(1, 2, 3)); // 6
```

---

## 🧩 1️⃣1️⃣ Destructuring in Parameters

```js
function showUser({ name, age }) {
  console.log(`${name} is ${age}`);
}
showUser({ name: "Girish", age: 24 });
```

---

## ⚙️ 1️⃣2️⃣ Pure vs Impure Functions

| Type   | Definition             | Example                      |
| ------ | ---------------------- | ---------------------------- |
| Pure   | No side effects        | add(a,b)                     |
| Impure | Affects external state | console.log(), Math.random() |

---

## 🧩 1️⃣3️⃣ Function Object Properties

```js
function test(a, b) {}
console.log(test.length); // 2
console.log(test.name); // test
test.version = "1.0";
console.log(test.version); // 1.0
```

---

## ⚡ 1️⃣4️⃣ Function Prototype & Constructor

```js
function Car(name) {
  this.name = name;
}
Car.prototype.drive = function () {
  console.log("Driving " + this.name);
};
const c = new Car("Tesla");
c.drive(); // Driving Tesla
```

---

## 🧠 1️⃣5️⃣ Best Practices

✅ Use arrow functions for short callbacks  
✅ Use declarations for reusable named functions  
✅ Keep functions small and pure  
✅ Use closures for private data  
✅ Name all functions for debugging  
✅ Avoid deep nesting — prefer early returns

---

## 🧮 1️⃣6️⃣ Visual Memory Tip

Function = Mini Program 🧠  
↳ Declaration = upfront definition  
↳ Expression = stored in variable  
↳ Arrow = short, no this  
↳ IIFE = runs instantly  
↳ Closure = memory saver 🧳  
↳ Higher-order = takes/returns function  
↳ Constructor = new object factory

## ⚡ JS Fun: `new`, `valueOf()`, and `toString()`

---

### 🧱 `new` Function Magic

```js
function ArrayWrapper(nums) {
  this.arr = nums;
}
const obj = new ArrayWrapper([1, 2]);
```

JS secretly does:
1️⃣ `let obj = {}`
2️⃣ links to `ArrayWrapper.prototype`
3️⃣ runs your function with `this = obj`
4️⃣ returns `obj` automatically 😎

---

### 🎭 Operator Magic

When JS sees objects in math or strings:

```js
obj1 + obj2; // → calls valueOf()
String(obj1); // → calls toString()
```

---

### 💥 Custom Behavior

```js
ArrayWrapper.prototype.valueOf = function () {
  return this.arr.reduce((a, b) => a + b, 0);
};

ArrayWrapper.prototype.toString = function () {
  return `[${this.arr.join(",")}]`;
};
```

✅ `obj1 + obj2` → `10`
✅ `String(obj1)` → `"[1,2]"`

---

### 🧠 Quick Rule

| Operation           | JS Calls     |
| ------------------- | ------------ |
| Math / `+`          | `valueOf()`  |
| String / `String()` | `toString()` |

---

### ✨ Summary

- `new` makes objects from functions.
- `valueOf()` & `toString()` make them act cool in math & strings.
- JS does all the magic behind your back 😎
