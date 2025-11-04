# 🔍 JavaScript Mutability, Strings vs Arrays — Complete Notes

## 🧠 1. Mutable vs Immutable — The Core Concept

### ➤ Mutable
If a data type is **mutable**, it means you can **change its value in place** — the original variable’s internal data is modified.

✅ Examples: **Arrays**, **Objects**
```js
let a = [1, 2, 3];
let b = a;
b.push(4);
console.log(a); // [1, 2, 3, 4] — same reference, changed in place
```

---

### ➤ Immutable
If a data type is **immutable**, it means any change creates a new value, and the original stays unchanged.

✅ Examples: **Strings**, **Numbers**, **Booleans**
```js
let s1 = "ABCD";
let s2 = s1;
s2 = s2 + "E";
console.log(s1); // "ABCD" — unchanged
```
✅ **Strings are immutable**, **Arrays are mutable** in JavaScript.

---

## 🧩 2. Real Example: `split`, `reverse`, `join`
```js
const s = "ABCD";
const j = s.split('');   // ['A','B','C','D'] — returns new array
j.reverse();              // modifies the same array in place
const k = j.join('');     // returns new string (doesn't touch array)
console.log(k); // "DCBA"
```

### 📋 Behavior Summary
| Method | Belongs to | Mutates Original? | Returns | Description |
|--------|-------------|------------------|----------|--------------|
| `split()` | String | ❌ No | ✅ New Array | Splits string into array |
| `reverse()` | Array | ✅ Yes | ✅ Same Array | Reverses array in place |
| `join()` | Array | ❌ No | ✅ New String | Returns joined string |

---

## ⚙️ 3. Common JS Methods by Behavior

### ✅ Array Methods That **MUTATE** Original Array
These directly change the existing array in memory:

| Method | Description |
|--------|--------------|
| push() | Adds element(s) at end |
| pop() | Removes last element |
| shift() | Removes first element |
| unshift() | Adds element(s) at start |
| splice() | Adds/removes elements at specific index |
| reverse() | Reverses array in place |
| sort() | Sorts array in place |
| fill() | Fills array with static value |
| copyWithin() | Copies part of array to another location |

🧠 **Why?** — These are designed for cases where developers want to update the same array directly (e.g., pushing data, reordering).

---

### ❌ Array Methods That **Do NOT** Mutate
These create and return a new array instead of modifying the existing one:

| Method | Description |
|--------|--------------|
| concat() | Combines arrays into new array |
| slice() | Returns a section (copy) of array |
| map() | Transforms each element, returns new array |
| filter() | Filters elements by condition |
| reduce() | Reduces array to a single value |
| flat() / flatMap() | Flattens nested arrays |
| toSorted() | (ES2023) Returns sorted copy |
| toReversed() | (ES2023) Returns reversed copy |
| toSpliced() | (ES2023) Returns spliced copy |

🧠 **Why?** — These follow functional programming principles — no side effects, pure and predictable.

---

## ❌ String Methods — All Non-Mutating
All string methods return new values because strings are immutable.

| Method | Description |
|--------|--------------|
| slice() | Returns substring |
| substring() | Returns substring (similar to slice) |
| replace() | Replaces part of string |
| toUpperCase() / toLowerCase() | Changes case |
| trim() / trimStart() / trimEnd() | Removes whitespace |
| split() | Splits string into array |
| padStart() / padEnd() | Pads string with characters |
| repeat() | Repeats string multiple times |

🧠 Example:
```js
let s = "hello";
let upper = s.toUpperCase();
console.log(s);      // "hello" — unchanged
console.log(upper);  // "HELLO" — new string
```

---

## 🧱 4. Why Are Strings Immutable?
Strings are **primitive values**, not objects.  
When you “modify” them, JavaScript actually creates a new string value instead of changing the original.

### ✅ Benefits of Immutability
- 🔹 **Performance:** Engines can reuse memory efficiently.  
- 🔹 **Predictability:** No side effects from shared references.  
- 🔹 **Safety:** Multiple variables can hold the same string safely.

Arrays, however, are **objects stored by reference**, designed for in-place modification for speed and flexibility.

---

## 🧮 5. Quick Comparison Table

| Type | Example | Mutable? | Mutating Methods | Non-Mutating Methods |
|------|----------|-----------|------------------|----------------------|
| String | "abc" | ❌ No | — | slice, replace, toUpperCase, split |
| Array | [1,2,3] | ✅ Yes | push, pop, splice, reverse, sort | map, filter, concat, slice |

---

## 🧩 6. Clarifications
✅ Even though arrays are mutable, **not all array methods mutate**.  
✅ Strings have **only non-mutating** methods.  
❌ You **cannot use array methods** like `push()` on strings.

```js
let s = "abc";
s.push("d"); // ❌ TypeError: s.push is not a function
```

🟡 Some methods look similar between arrays and strings — e.g., `slice()` works on both.

```js
"hello".slice(1,3); // "el"
[1,2,3,4].slice(1,3); // [2,3]
```

🔄 To treat a string like an array:
```js
let str = "abcd";
let arr = str.split('');  // ['a','b','c','d']
arr.push('e');
str = arr.join('');
console.log(str); // "abcde"
```

---

## 💡 7. Mental Model to Remember
If the method sounds like it’s **changing the structure**, it usually mutates.  
➡️ e.g., push, pop, sort, reverse, splice

If it sounds like it’s **creating something new**, it’s non-mutating.  
➡️ e.g., map, filter, concat, slice

---

## 🧾 8. Final Quick Cheat Sheet

### 🔸 Array Methods
| Category | Methods | Mutates? |
|-----------|----------|----------|
| Add/Remove Elements | push, pop, shift, unshift, splice | ✅ Yes |
| Reorder/Modify | reverse, sort, fill, copyWithin | ✅ Yes |
| Copy/Create New | concat, slice, map, filter, reduce, flat, toSorted, toReversed, toSpliced | ❌ No |

### 🔸 String Methods
| Category | Methods | Mutates? |
|-----------|----------|----------|
| Extraction | slice, substring, substr (deprecated) | ❌ No |
| Case/Trim | toUpperCase, toLowerCase, trim, trimStart, trimEnd | ❌ No |
| Replace/Modify | replace, replaceAll, padStart, padEnd, repeat | ❌ No |
| Split/Join | split (→ array), concat | ❌ No |

### 🔸 Summary of Mutability
| Type | Mutable? | Notes |
|------|-----------|-------|
| Array | ✅ Yes | Some methods mutate, some return new arrays |
| String | ❌ No | All methods return new values |
| Object | ✅ Yes | Always mutable |
| Number / Boolean / Null / Undefined / Symbol / BigInt | ❌ No | All are immutable primitives |

---

## ✅ Key Takeaways
- Arrays are **mutable**, but not every method mutates.  
- Strings are **immutable**, no method can change the original.  
- You can remember easily by **method purpose naming**.  
- Understanding this helps write **clean, side-effect-free JS code**.
