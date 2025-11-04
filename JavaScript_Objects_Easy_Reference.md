# 🧠 JavaScript Objects — Human-Friendly Complete Reference

## 1. What is an Object?

Think of an **object** as a labeled box that holds key-value pairs.  
Each “label” (called a **key**) points to some data (the **value**).

```js
const user = {
  name: "Girish",
  age: 24,
  skills: ["React", "Node.js"]
};
```

Each property has behind-the-scenes rules called **property descriptors** — they tell JavaScript whether a key can be changed, shown, or deleted.

Objects are everywhere — arrays, functions, classes, and dates all build on top of them.

---

## 2. Nature and Behavior

| Property | Value |
|-----------|--------|
| Type | Reference |
| Mutable | ✅ Yes |
| Stored by | Reference |

```js
const a = { x: 10 };
const b = a;
b.x = 20;
console.log(a.x); // 20 — same memory reference
```

👉 When two variables point to the same object, **changing one changes both**.  
Always **clone** if you want a separate copy.

---

## 3. Ways to Create Objects

### ➤ Object Literal (most common)
```js
const user = { name: "Girish", age: 24 };
```

### ➤ Constructor (old-school)
```js
const user = new Object();
user.name = "Girish";
```

### ➤ Object.create(proto)
Creates an object linked to another one.
```js
const person = { greet() { console.log("hi") } };
const user = Object.create(person);
user.name = "Girish";
```

### ➤ Class Syntax (modern way)
```js
class User {
  constructor(name) { this.name = name; }
}
const u = new User("Girish");
```

---

## 4. Mutating vs Non-Mutating Operations

| Mutates (changes object) | Doesn’t Mutate (returns copy/new) |
|---------------------------|------------------------------------|
| obj.key = value | { ...obj } (spread copy) |
| delete obj.key | Object.assign({}, obj) |
| Object.assign(target, src) | structuredClone(obj) |
| Object.defineProperty() | Object.keys(), values(), entries() |
| Object.setPrototypeOf() | Object.fromEntries() |
| Object.seal(), Object.freeze() | Object.is() |

---

## 5. Important Built-in Methods

### 🔍 Get Info / Iterate
```js
Object.keys(obj);     // ['a', 'b']
Object.values(obj);   // [1, 2]
Object.entries(obj);  // [['a',1], ['b',2]]
Object.fromEntries(entries); // Convert back to object
Object.hasOwn(obj, key); // Check direct property
```

```js
const obj = { a: 1, b: 2 };
for (let key in obj) console.log(key); // 'a', 'b'
```

---

## 6. Property Control (Descriptors & Restrictions)

Control how a property behaves with `Object.defineProperty()`.

```js
Object.defineProperty(obj, 'name', {
  value: 'Girish',
  writable: false,   // cannot be changed
  enumerable: true,  // visible in loops
  configurable: false // cannot delete
});
```

| Method | Effect |
|--------|---------|
| `Object.preventExtensions()` | Can’t add new keys |
| `Object.seal()` | Can’t add/remove, can modify values |
| `Object.freeze()` | Full lock — can’t change anything |

```js
const settings = { version: 1 };
Object.freeze(settings);
settings.version = 2; // ignored
```

---

## 7. Cloning & Merging

| Operation | Example |
|------------|----------|
| Shallow clone | `{ ...obj }` or `Object.assign({}, obj)` |
| Deep clone | `structuredClone(obj)` |
| Merge | `{ ...obj1, ...obj2 }` |

---

## 8. Checking if Property Exists

```js
"key" in obj;               // checks own + prototype
obj.hasOwnProperty("key");  // checks only own
Object.hasOwn(obj, "key");  // modern safe version
```

```js
const user = { name: "Girish" };
console.log("name" in user); // true
```

---

## 9. Comparing Objects

```js
{a:1} === {a:1} // false — different references
```

For deep comparison:
```js
JSON.stringify(obj1) === JSON.stringify(obj2); // works for simple objects
```

For precise equality:
```js
Object.is(NaN, NaN); // true
Object.is(-0, 0);    // false
```

---

## 10. Iterating Objects

### ➤ Keys
```js
for (const key in obj) console.log(key);
```

### ➤ Key-Value Pairs
```js
Object.entries(obj).forEach(([k, v]) => console.log(k, v));
```

### ➤ Transform or Filter
```js
const doubled = Object.fromEntries(
  Object.entries(obj).map(([k, v]) => [k, v * 2])
);

const filtered = Object.fromEntries(
  Object.entries(obj).filter(([k, v]) => v > 10)
);
```

---

## 11. Objects vs Arrays vs Strings

| Type | Structure | Mutable? | Example |
|------|------------|-----------|----------|
| Object | key-value pairs (unordered) | ✅ Yes | `{ name: "Girish" }` |
| Array | numeric index (ordered) | ✅ Yes | `[1,2,3]` |
| String | sequence of chars | ❌ No | `"hello"` |

All arrays and functions are technically objects.  
```js
typeof [] // "object"
typeof function() {} // "function" (special object)
```

---

## 12. Prototype & Inheritance (Interview Core)

Every object links to another object — its **prototype**.

```js
const animal = { eats: true };
const dog = Object.create(animal);
console.log(dog.eats); // true (inherited)
```

| Method | Description |
|---------|-------------|
| Object.getPrototypeOf(obj) | Get prototype |
| Object.setPrototypeOf(obj, proto) | Change prototype |

🧩 **Key Idea:** Classes in JS are just a prettier way to work with prototypes.

---

## 13. JSON and Objects

Convert object to string (to send/store):
```js
const json = JSON.stringify({name: "Girish"});
```

Convert string back to object:
```js
const parsed = JSON.parse(json);
```

---

## 14. Best Practices for Performance

✅ Prefer **immutability** (`{...obj}` clones)  
✅ Use `Object.freeze()` for constant configs  
✅ Always check props using `Object.hasOwn()`  
✅ Use `structuredClone()` for deep copies  
✅ For transformations, use `Object.entries()` + `Object.fromEntries()`  

---

## 15. Common Interview Questions

- Difference between `Object.freeze()`, `Object.seal()`, and `Object.preventExtensions()`?  
- How does the **prototype chain** work?  
- How is `Object.assign()` different from the spread operator?  
- How to deep clone an object safely?  
- Difference between `in` and `hasOwnProperty()`?  
- Why is comparing two objects tricky in JS?  
- How to iterate over object keys and values?  
- Why are arrays technically objects?  

---

## 16. Quick Summary Table

| Mutating Methods | Non-Mutating Methods |
|------------------|----------------------|
| property assignment | Object.keys / values / entries |
| delete | Object.fromEntries |
| Object.assign(target) | Object.assign({}, obj) |
| defineProperty | Spread syntax `{...obj}` |
| setPrototypeOf | structuredClone |
| freeze/seal (once) | Object.hasOwn, Object.is |

---

## 17. 🧩 One-Line Summary

> **Objects are the backbone of JavaScript.**  
> They’re flexible, mutable key-value stores that form the base for arrays, functions, and classes.  
> Understanding cloning, immutability, and prototypes makes you a *true JS expert*.
