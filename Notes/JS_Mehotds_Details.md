# 🧠 JavaScript — Array.prototype.sort() (Complete Notes)

---

## 🔹 1. Purpose

`sort()` arranges the elements of an array **in place** (modifies the original array) and returns it.

```js
const arr = [5, 2, 9];
arr.sort(); // sorts array in place
```

---

## 🔹 2. Default Behavior

By default, `sort()`:

- Converts all elements to strings
- Sorts them **lexicographically** (dictionary order)
- Based on **Unicode code points**

```js
const arr = [5, 2, 11];
arr.sort();
console.log(arr); // [11, 2, 5] ❌ (not numerical)
```

✅ Works fine for pure strings:

```js
["banana", "apple", "cherry"].sort();
// ['apple', 'banana', 'cherry']
```

---

## 🔹 3. Sorting Numbers Correctly

To sort **numerically**, provide a compare function:

```js
arr.sort((a, b) => a - b); // ascending
arr.sort((a, b) => b - a); // descending
```

| Return Value | Meaning          | Result     |
| ------------ | ---------------- | ---------- |
| `< 0`        | a comes before b | Keep order |
| `> 0`        | a comes after b  | Swap order |
| `0`          | Equal            | No change  |

💡 `(a - b)` works because:

- a < b → negative → keep
- a > b → positive → swap
- a == b → zero → same order

---

## 🔹 4. Step-by-Step Example

```js
const arr = [5, 2, 8];
arr.sort((a, b) => a - b);
```

Comparisons:
(5,2) → 3 → swap → [2,5,8]  
(5,8) → -3 → keep → [2,5,8]  
✅ Final: [2,5,8]

---

## 🔹 5. Sorting Objects

Sort arrays of objects by a property:

```js
const users = [
  { name: "Girish", age: 25 },
  { name: "Amit", age: 22 },
  { name: "Ravi", age: 28 },
];
users.sort((a, b) => a.age - b.age);
// [{Amit,22}, {Girish,25}, {Ravi,28}]
```

Descending:

```js
users.sort((a, b) => b.age - a.age);
```

Sort by name alphabetically:

```js
users.sort((a, b) => a.name.localeCompare(b.name));
```

---

## 🔹 6. Sorting Strings

⚠️ Default string sorting uses Unicode order:

```js
["Banana", "apple", "Orange"].sort();
// ['Banana', 'Orange', 'apple'] (uppercase < lowercase)
```

✅ Correct alphabetical sorting (locale-aware):

```js
arr.sort((a, b) => a.localeCompare(b));
```

Output: `["apple", "Banana", "Orange"]`

---

## 🔹 7. localeCompare() Details

`a.localeCompare(b)` returns:

| Return | Meaning    | Example                                |
| ------ | ---------- | -------------------------------------- |
| `< 0`  | a before b | `'apple'.localeCompare('banana') → -1` |
| `> 0`  | a after b  | `'banana'.localeCompare('apple') → 1`  |
| `0`    | Equal      | `'a'.localeCompare('a') → 0`           |

**Case-insensitive:**

```js
arr.sort((a, b) => a.localeCompare(b, undefined, { sensitivity: "base" }));
```

**Locale-aware (multi-language):**

```js
arr.sort((a, b) => a.localeCompare(b, "de")); // German locale
```

---

## 🔹 8. Mutability

⚠️ `sort()` changes the original array.

```js
const arr = [3, 1, 2];
const sorted = arr.sort();
console.log(arr); // [1,2,3]
console.log(sorted); // [1,2,3] (same reference)
```

✅ Clone before sorting:

```js
const sorted = [...arr].sort((a, b) => a - b);
```

---

## 🔹 9. Sorting Stability

Since **ES2019**, `sort()` is **stable** — equal values keep their original order.

```js
const items = [
  { name: "A", group: 1 },
  { name: "B", group: 2 },
  { name: "C", group: 1 },
];
items.sort((a, b) => a.group - b.group);
console.log(items);
// [{A,1}, {C,1}, {B,2}] ✅ A and C preserved
```

---

## 🔹 10. Algorithm Used

Modern JS engines (like Chrome’s **V8**) use **Timsort** — hybrid of merge + insertion sort.
| Property | Value |
|-----------|--------|
| Time complexity | O(n log n) |
| In-place | ✅ |
| Stable | ✅ (ES2019) |

---

## 🔹 11. Sorting Mixed Types

```js
const arr = [10, "2", "banana", 5];
arr.sort((a, b) => a.toString().localeCompare(b.toString()));
```

---

## 🔹 12. Summary Table

| Topic             | Description                    | Example               |
| ----------------- | ------------------------------ | --------------------- |
| Default           | Lexicographical                | [11,2,5] → [11,2,5]   |
| Numeric           | (a,b)=>a-b                     | [2,5,9,11]            |
| String            | localeCompare                  | a.localeCompare(b)    |
| Object            | a.age-b.age                    | sort by key           |
| Case-insensitive  | localeCompare with sensitivity | Works for text        |
| Stability         | Equal values keep order        | Since ES2019          |
| Mutation          | Sorts in place                 | Use [...arr] to clone |
| Algorithm         | Timsort                        | O(n log n)            |
| Negative/Positive | Negative=keep, Positive=swap   | (a,b)=>a-b            |

---

## 🔹 13. Quick Reference

```js
arr.sort((a, b) => a - b);
```

✅ Negative → keep  
✅ Positive → swap  
✅ Zero → equal

---

## 🧩 Real-world Uses

```js
users.sort((a, b) => a.name.localeCompare(b.name)); // alphabetically
nums.sort((a, b) => b - a); // descending
products.sort((a, b) => a.price - b.price); // by price
words.sort((a, b) => a.localeCompare(b, undefined, { sensitivity: "base" })); // ignore case
```

---

## ✅ Key Takeaways

- `sort()` **mutates** the original array
- Always use a **compare function** for numbers or objects
- For strings, prefer **localeCompare()**
- Sorting is **stable** since ES2019
- Uses **Timsort** internally
- **Negative = keep, Positive = swap, Zero = equal**

---
