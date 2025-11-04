# 🌟 JavaScript Spread Operator, Iterables, Literals & Enumerables — Easy Reference

## 🔹 1. Spread Operator (`...`)

The **spread operator (`...`)** expands things like arrays, strings, or sets into **individual elements**.

```js
Math.max(...[1, 2, 3]);  // → 3
console.log(...'abc');   // → a b c
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

| Type | Iterable? | Example | Works with `...`? |
|------|------------|----------|-------------------|
| Array | ✅ Yes | `[1, 2, 3]` | ✅ |
| String | ✅ Yes | `'abc'` | ✅ |
| Map / Set | ✅ Yes | `new Set([1,2])` | ✅ |
| Object | ❌ No | `{ a:1, b:2 }` | ❌ |

An **iterable** has a special method called:
```js
obj[Symbol.iterator]
```
That’s how JavaScript knows **how to loop over it** or **spread it**.

---

## 🔹 4. Literals (Simple Meaning)

A **literal** just means writing the value **directly in your code**, not creating it through a constructor.

| Type | Example |
|------|----------|
| Object literal | `{ a: 1, b: 2 }` |
| Array literal | `[1, 2, 3]` |
| String literal | `"hello"` |
| Number literal | `42` |
| Boolean literal | `true` |

💡 *Literal = Directly written value, not constructed dynamically.*

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
  enumerable: false
});
console.log(Object.keys(user)); // ['name'] only
```

✅ The spread `{ ...obj }` copies **only enumerable** properties.

---

## ✅ Final Quick Recap

| Concept | Meaning | Example |
|----------|----------|----------|
| **Spread (`...`)** | Expands iterable values or copies object props | `Math.max(...arr)` / `{...obj}` |
| **Iterable** | Something loopable (has `Symbol.iterator`) | Arrays, strings, sets |
| **Literal** | Value written directly in code | `{ a:1 }`, `[1,2]` |
| **Enumerable** | Shows up in loops or `Object.keys()` | Only enumerable keys copied by `{...obj}` |

---

## 💡 One-Line Summary
> Spread expands iterables, literals define data directly, and enumerable properties decide what’s visible in loops.
