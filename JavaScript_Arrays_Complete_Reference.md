# 📚 JavaScript Arrays — Complete Reference

## 🧠 Nature of Arrays

- **Type:** Object  
- **Mutable:** ✅ Yes  
- **Storage:** By reference (any variable pointing to it can see changes)

```js
const arr = [1, 2, 3];
const copy = arr;
copy.push(4);
console.log(arr); // [1, 2, 3, 4] — changed
```

Arrays are just **objects with numeric keys** and a special `length` property.  
```js
typeof [] // "object"
```

---

## ⚙️ Mutating Methods (change original array)
These directly alter the array **in place**.

| Method | Description |
|--------|--------------|
| push() | Adds element(s) to end |
| pop() | Removes last element |
| shift() | Removes first element |
| unshift() | Adds element(s) to start |
| splice() | Adds/removes elements from specific index |
| reverse() | Reverses order |
| sort() | Sorts array in place |
| fill() | Replaces all elements with given value |
| copyWithin() | Copies part of array within itself |

```js
const nums = [1, 2, 3];
nums.reverse();
console.log(nums); // [3, 2, 1]
```

---

## 🧩 Non-Mutating Methods (return new array)
These return a **new array** and keep the original untouched.

| Method | Description |
|--------|--------------|
| concat() | Combines arrays or elements |
| slice() | Returns subarray |
| map() | Transforms every element |
| filter() | Filters by condition |
| reduce() | Reduces to single value (does not mutate) |
| flat() | Flattens nested arrays |
| flatMap() | map + flat |
| toSorted() | (ES2023) Same as sort() but non-mutating |
| toReversed() | (ES2023) Non-mutating reverse |
| toSpliced() | (ES2023) Non-mutating splice |
| find(), findIndex(), findLast(), some(), every(), includes(), indexOf(), join(), entries(), keys(), values() | All non-mutating |

```js
const arr = [1, 2, 3];
const newArr = arr.map(x => x * 2);
console.log(arr);    // [1, 2, 3]
console.log(newArr); // [2, 4, 6]
```

---

## 🧾 Mutate vs Non-Mutate Summary Table

| Mutate Original (In-Place) | Return New (Non-Mutating) |
|-----------------------------|----------------------------|
| push, pop, shift, unshift, splice, reverse, sort, fill, copyWithin | concat, slice, map, filter, reduce, flat, flatMap, toSorted, toReversed, toSpliced |

---

## 🔗 Array and String Method Overlaps

Both arrays and strings are **iterable and index-based**, so they share some method names — but behavior and return types differ.

| Method | String Behavior | Array Behavior | Mutates? |
|--------|------------------|----------------|-----------|
| slice() | Returns substring (string) | Returns subarray (array) | ❌ No |
| concat() | Joins two strings | Joins arrays/elements | ❌ No |
| toString() | Returns itself | Converts elements into comma-separated string | ❌ No |

🧩 Some method names overlap, but **output types differ**.

---

## 🌟 Useful New ES2023 Non-Mutating Array Methods

| Method | Description |
|--------|--------------|
| toSorted() | Returns a sorted copy |
| toReversed() | Returns reversed copy |
| toSpliced(start, deleteCount, ...items) | Same as splice but returns new array |
| with(index, newValue) | Returns new array with replaced element |

```js
const arr = [1, 2, 3];
const sorted = arr.toSorted((a, b) => b - a);
console.log(arr);    // [1, 2, 3]
console.log(sorted); // [3, 2, 1]
```

---

## ⚖️ How Arrays Differ from Objects

Arrays are specialized objects but:

- Indexed numerically (0,1,2,...)  
- Maintain order  
- Have length auto-updated  
- Prototype methods built for sequence manipulation  

```js
const arr = [10, 20];
const obj = {0: 10, 1: 20};

arr.push(30); // ✅ works
obj.push(30); // ❌ TypeError
```

Arrays are **“ordered objects”** with numeric keys and extra helpers.

---

## 🧮 Memory & Behavior Notes

- Arrays are **stored by reference**.  
- Mutating an array changes it for all references.  
- Non-mutating methods return new arrays — used in **functional programming**.  
- Clone safely using `[...]` or `.slice()`.  

```js
const arr = [1, 2, 3];
const clone = [...arr]; // Safe copy
```

---

## 🧠 Quick Pattern Summary

| Pattern | Meaning |
|----------|----------|
| Methods that sound like **actions** (push, pop, sort, reverse, splice) | Likely mutates |
| Methods that sound like **computations** (map, filter, slice, concat) | Likely non-mutating |

---

## 🧰 Commonly Used Safe Patterns

### ✅ Clone Array
```js
const copy = [...arr];
```

### ✅ Immutable Add
```js
const newArr = [...arr, 4];
```

### ✅ Immutable Remove
```js
const filtered = arr.filter(x => x !== value);
```

### ✅ Immutable Replace
```js
const updated = arr.map(x => (x === old ? newVal : x));
```

---

## 🧾 Summary

- Arrays are **mutable objects**, but many methods support **non-mutating functional patterns**.  
- Always know whether a method **mutates** or **returns a copy**, since it affects how your data behaves in memory.
