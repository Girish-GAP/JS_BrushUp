# 📘 Complete JavaScript Methods Reference (String, Array, Object)

---

## 🔹 1. STRING METHODS

Strings are **immutable** → every method returns a new value (never modifies the original).

| Method                | Purpose                                  | Example                             | Returns            | Mutates? | Related / Hidden Details                                     |
| --------------------- | ---------------------------------------- | ----------------------------------- | ------------------ | -------- | ------------------------------------------------------------ |
| slice(start, end)     | Extract substring                        | `'hello'.slice(1,4)`                | `'ell'`            | ❌       | Supports negative indexes, similar to Array.slice()          |
| substring(start, end) | Similar to slice                         | `'hello'.substring(1,4)`            | `'ell'`            | ❌       | ❌ No negatives — swaps args if start > end                  |
| substr(start, len)    | Take `len` chars from `start`            | `'hello'.substr(1,3)`               | `'ell'`            | ❌       | ⚠️ Deprecated, avoid                                         |
| split(sep)            | Split string into array                  | `'a,b,c'.split(',')`                | `['a','b','c']`    | ❌       | Array ↔ `join()`                                             |
| replace(find, new)    | Replace substring                        | `'cat'.replace('c','b')`            | `'bat'`            | ❌       | ⚠️ Only replaces **first** match unless regex with `/g` used |
| replaceAll(find, new) | Replace all substrings                   | `'cat cat'.replaceAll('cat','dog')` | `'dog dog'`        | ❌       | Added in ES2021 ✅ safer than `/g`                           |
| toUpperCase()         | Convert to uppercase                     | `'hi'.toUpperCase()`                | `'HI'`             | ❌       | —                                                            |
| toLowerCase()         | Convert to lowercase                     | `'Hi'.toLowerCase()`                | `'hi'`             | ❌       | —                                                            |
| trim()                | Remove both-side spaces                  | `' hi '.trim()`                     | `'hi'`             | ❌       | Also: `.trimStart()` / `.trimEnd()`                          |
| includes(substr)      | Substring check                          | `'hello'.includes('ell')`           | `true`             | ❌       | Case-sensitive, Array.includes()                             |
| indexOf(value)        | First occurrence index                   | `'hello'.indexOf('l')`              | `2`                | ❌       | Returns `-1` if not found, Array.indexOf()                   |
| lastIndexOf(value)    | Last occurrence index                    | `'hello'.lastIndexOf('l')`          | `3`                | ❌       | —                                                            |
| startsWith(str)       | Prefix check                             | `'hello'.startsWith('he')`          | `true`             | ❌       | —                                                            |
| endsWith(str)         | Suffix check                             | `'hello'.endsWith('lo')`            | `true`             | ❌       | —                                                            |
| charAt(i)             | Character at index                       | `'abc'.charAt(1)`                   | `'b'`              | ❌       | Same as `'abc'[1]`                                           |
| charCodeAt(i)         | Unicode (ASCII) value                    | `'A'.charCodeAt(0)`                 | `65`               | ❌       | Opposite → `String.fromCharCode()`                           |
| concat(str2)          | Join strings                             | `'a'.concat('b')`                   | `'ab'`             | ❌       | Similar to `+`, Array.concat()                               |
| repeat(n)             | Repeat string n times                    | `'ab'.repeat(3)`                    | `'ababab'`         | ❌       | Throws RangeError if `n<0`                                   |
| padStart(len, str)    | Pad from start                           | `'5'.padStart(3, '0')`              | `'005'`            | ❌       | Also `.padEnd()`                                             |
| match(regex)          | Find matches                             | `'a1b2'.match(/\d/g)`               | `['1','2']`        | ❌       | Returns array or `null`                                      |
| matchAll(regex)       | Iterator for matches                     | `[... 'a1b2'.matchAll(/\d/g)]`      | `[ ['1'], ['2'] ]` | ❌       | Use `/g` regex only                                          |
| search(regex)         | Find index of first match                | `'abc'.search(/b/)`                 | `1`                | ❌       | Returns `-1` if not found                                    |
| localeCompare(str)    | Compare strings (dictionary order)       | `'a'.localeCompare('b')`            | `-1`               | ❌       | For sorting strings                                          |
| toString()            | Converts object/string wrapper to string | `new String('hi').toString()`       | `'hi'`             | ❌       | —                                                            |
| valueOf()             | Primitive value of String object         | `new String('hi').valueOf()`        | `'hi'`             | ❌       | Rarely used                                                  |
| normalize()           | Normalize Unicode                        | `'ê'.normalize()`                   | `'ê'`              | ❌       | For Unicode consistency                                      |
| at(index)             | Modern index access                      | `'abc'.at(-1)`                      | `'c'`              | ❌       | Supports negative indexes (ES2022)                           |

---

## 🔹 2. ARRAY METHODS

Arrays are **mutable**, but many methods return a **new array**. For methods that mutate, we show **Returns** (the method’s return value) and **Array After** (the mutated array).

| Method                         | Purpose                      | Example                          | Returns           | Array After   | Mutates? | Related / Hidden Details                                                          |
| ------------------------------ | ---------------------------- | -------------------------------- | ----------------- | ------------- | -------- | --------------------------------------------------------------------------------- |
| slice(start, end)              | Copy portion                 | `[1,2,3,4].slice(1,3)`           | `[2,3]`           | `[1,2,3,4]`   | ❌       | Negative indexes allowed; non-mutating clone trick: `arr.slice()`, String.slice() |
| **splice(start, del, ...add)** | Add/Remove elements          | `a=[1,2,3]; a.splice(1,1,'X')`   | `['2']` (removed) | `[1,'X',3]`   | ✅       | ⚠️ Mutates in place; opposite of `slice`                                          |
| concat(arr2)                   | Combine arrays               | `[1,2].concat([3,4])`            | `[1,2,3,4]`       | `[1,2]`       | ❌       | Spread alternative: `[...a, ...b]`, String.concat()                               |
| push(x)                        | Add to end                   | `a=[1]; a.push(2)`               | `2` (new length)  | `[1,2]`       | ✅       | Use spread for immutable append                                                   |
| pop()                          | Remove last                  | `a=[1,2]; a.pop()`               | `2` (removed)     | `[1]`         | ✅       | —                                                                                 |
| shift()                        | Remove first                 | `a=[1,2]; a.shift()`             | `1`               | `[2]`         | ✅       | —                                                                                 |
| unshift(x)                     | Add to start                 | `a=[2]; a.unshift(1)`            | `2` (new length)  | `[1,2]`       | ✅       | —                                                                                 |
| join(sep)                      | Join into string             | `[1,2,3].join('-')`              | `'1-2-3'`         | `[1,2,3]`     | ❌       | Inverse → `String.split()`                                                        |
| indexOf(val)                   | Find index                   | `[1,2,3].indexOf(2)`             | `1`               | `[1,2,3]`     | ❌       | Returns `-1` if not found, String.indexOf()                                       |
| includes(val)                  | Contains?                    | `[1,2,3].includes(2)`            | `true`            | `[1,2,3]`     | ❌       | Uses `===` for equality check, String.includes()                                  |
| reverse()                      | Reverse array                | `[1,2,3].reverse()`              | `[3,2,1]`         | `[3,2,1]`     | ✅       | ⚠️ Mutates — avoid if preserving original                                         |
| sort(fn)                       | Sort array                   | `[3,1,2].sort()`                 | `[1,2,3]`         | `[1,2,3]`     | ✅       | ⚠️ Lexicographic by default; use `(a,b)=>a-b` for numbers                         |
| map(fn)                        | Transform values             | `[1,2,3].map(x=>x*2)`            | `[2,4,6]`         | `[1,2,3]`     | ❌       | Does not skip `undefined` holes                                                   |
| filter(fn)                     | Keep matching                | `[1,2,3].filter(x=>x>1)`         | `[2,3]`           | `[1,2,3]`     | ❌       | —                                                                                 |
| reduce(fn,init)                | Combine to single            | `[1,2,3].reduce((a,b)=>a+b,0)`   | `6`               | `[1,2,3]`     | ❌       | Use `reduceRight()` for reverse                                                   |
| find(fn)                       | Find element                 | `[1,2,3].find(x=>x>1)`           | `2`               | `[1,2,3]`     | ❌       | Returns first match or `undefined`                                                |
| findIndex(fn)                  | Find index                   | `[1,2,3].findIndex(x=>x>1)`      | `1`               | `[1,2,3]`     | ❌       | —                                                                                 |
| findLast(fn)                   | Find from right              | `[1,2,3].findLast(x=>x>1)`       | `3`               | `[1,2,3]`     | ❌       | ES2023                                                                            |
| findLastIndex(fn)              | Find index from right        | `[1,2,3].findLastIndex(x=>x>1)`  | `2`               | `[1,2,3]`     | ❌       | ES2023                                                                            |
| every(fn)                      | All match?                   | `[1,2,3].every(x=>x>0)`          | `true`            | `[1,2,3]`     | ❌       | Stops early on false                                                              |
| some(fn)                       | Any match?                   | `[1,2,3].some(x=>x>2)`           | `true`            | `[1,2,3]`     | ❌       | Stops early on true                                                               |
| flat(depth)                    | Flatten nested               | `[1,[2,[3]]].flat(2)`            | `[1,2,3]`         | `[1,[2,[3]]]` | ❌       | Default depth = 1                                                                 |
| flatMap(fn)                    | Map + flat                   | `[1,2].flatMap(x=>[x,x*2])`      | `[1,2,2,4]`       | `[1,2]`       | ❌       | Equivalent to `map().flat(1)`                                                     |
| fill(val,start,end)            | Fill with value              | `[1,2,3].fill(0,1,3)`            | `[1,0,0]`         | `[1,0,0]`     | ✅       | Mutates; inclusive start, exclusive end                                           |
| forEach(fn)                    | Loop only                    | `[1,2,3].forEach(x=>x)`          | `undefined`       | `[1,2,3]`     | ❌       | Can’t break early                                                                 |
| toString()                     | Convert to string            | `[1,2].toString()`               | `'1,2'`           | `[1,2]`       | ❌       | —                                                                                 |
| toLocaleString()               | Localized string             | `[1000].toLocaleString('en-IN')` | `'1,000'`         | `[1000]`      | ❌       | Locale-aware formatting                                                           |
| copyWithin(t,s,e)              | Copy part within array       | `[1,2,3,4].copyWithin(0,2)`      | `[3,4,3,4]`       | `[3,4,3,4]`   | ✅       | Rarely used; overwrites data                                                      |
| entries()                      | Iterator of `[index, value]` | `[10,20].entries()`              | `Iterator`        | `[10,20]`     | ❌       | Use in `for...of`                                                                 |
| keys()                         | Iterator of indexes          | `[10,20].keys()`                 | `Iterator`        | `[10,20]`     | ❌       | —                                                                                 |
| values()                       | Iterator of values           | `[10,20].values()`               | `Iterator`        | `[10,20]`     | ❌       | —                                                                                 |
| at(index)                      | Safe index access            | `[1,2,3].at(-1)`                 | `3`               | `[1,2,3]`     | ❌       | Supports negatives (ES2022)                                                       |
| Array.isArray(x)               | Check if array               | `Array.isArray([])`              | `true`            | —             | ❌       | Safer than `instanceof`                                                           |

---

## 🔹 3. OBJECT METHODS

Objects store **key-value pairs**. Most are **non‑mutating**, some **mutate** the target.

| Method                              | Purpose                              | Example                                   | Returns     | Mutates?           | Notes / Related                           |
| ----------------------------------- | ------------------------------------ | ----------------------------------------- | ----------- | ------------------ | ----------------------------------------- |
| Object.keys(obj)                    | Get keys                             | `Object.keys({a:1,b:2})`                  | `['a','b']` | ❌                 | enumerable, own, string keys              |
| Object.values(obj)                  | Get values                           | `Object.values({a:1,b:2})`                | `[1,2]`     | ❌                 | enumerable, own                           |
| Object.entries(obj)                 | Get key-value pairs                  | `Object.entries({a:1})`                   | `[['a',1]]` | ❌                 | —                                         |
| Object.fromEntries(arr)             | Build from pairs                     | `Object.fromEntries([['a',1]])`           | `{a:1}`     | ❌                 | —                                         |
| Object.assign(t,s)                  | Copy props into **target**           | `Object.assign({}, {a:1})`                | `{a:1}`     | ✅ (mutates **t**) | spread `{...s}` is similar                |
| Object.freeze(obj)                  | Lock object                          | `Object.freeze({a:1})`                    | same object | ✅                 | no adds/deletes/writes                    |
| Object.seal(obj)                    | No add/remove                        | `Object.seal({a:1})`                      | same object | ✅                 | writes allowed                            |
| Object.hasOwn(obj,key)              | Own prop?                            | `Object.hasOwn({a:1},'a')`                | `true`      | ❌                 | safer than `hasOwnProperty`               |
| Object.create(proto)                | New with prototype                   | `Object.create(null)`                     | empty obj   | ❌                 | no default proto                          |
| Object.is(a,b)                      | Precise equality                     | `Object.is(NaN,NaN)`                      | `true`      | ❌                 | differs from `===` for `-0`               |
| Object.getOwnPropertyNames(obj)     | Own **string** keys (incl. non-enum) | `Object.getOwnPropertyNames({a:1})`       | `['a']`     | ❌                 | **excludes symbols**                      |
| Object.defineProperty(obj,key,desc) | Define descriptor                    | `Object.defineProperty({},'a',{value:1})` | same object | ✅                 | controls writable/enumerable/configurable |

---

If wanted to print this methods in console just use this :

```js
function listMethods(obj) {
  return Object.getOwnPropertyNames(obj.prototype).filter(
    (prop) => typeof obj.prototype[prop] === "function"
  );
}

// Usage:
console.log(listMethods(Array)); // All Array methods
console.log(listMethods(Map)); // All Map methods
```

1. You can view the function definition in console

For most built-in or custom methods:

console.log(Array.prototype.map);

✅ Output:

```js
ƒ map() { [native code] }
```

This means map is a native function implemented in C++ (inside the JS engine) — not in JavaScript code, so you can’t see its inner logic directly.

⚡ 2. For your own functions, you can see the full body

```js
function add(a, b) {
  return a + b;
}
```

console.log(add.toString());

✅ Output:

```js
"function add(a, b) {
  return a + b;
}"
```

So .toString() gives you the exact function definition in string form.

## 🔁 4. OVERLAPS (Shared Concepts)

| Feature        | String | Array | Object | Purpose / Note                                       |
| -------------- | ------ | ----- | ------ | ---------------------------------------------------- |
| slice()        | ✅     | ✅    | ❌     | Extract portion without mutation                     |
| concat()       | ✅     | ✅    | ❌     | Combine values                                       |
| includes()     | ✅     | ✅    | ❌     | Membership test                                      |
| indexOf()      | ✅     | ✅    | ❌     | Find index                                           |
| toString()     | ✅     | ✅    | ✅     | Convert to string                                    |
| length (prop)  | ✅     | ✅    | ❌     | Count chars/items                                    |
| Spread (`...`) | ✅\*   | ✅    | ✅     | \*Strings are iterable: `[...'abc']` / `fn(...'ab')` |

---

## 🧩 5. slice() vs splice()

| Feature           | slice()                          | splice()                                                      |
| ----------------- | -------------------------------- | ------------------------------------------------------------- |
| Available In      | String, Array                    | Array only                                                    |
| Mutates Original? | ❌ No                            | ✅ Yes                                                        |
| Purpose           | Extract portion                  | Add/Remove elements                                           |
| Example           | `[1,2,3,4].slice(1,3)` → `[2,3]` | `a=[1,2,3,4]; a.splice(1,2)` → returns `[2,3]`, `a` → `[1,4]` |

---

## 🧠 6. Quick Mutability Summary

| Type   | Mutating Methods                                                      | Non-Mutating Methods                                                               |
| ------ | --------------------------------------------------------------------- | ---------------------------------------------------------------------------------- |
| String | —                                                                     | All return new string                                                              |
| Array  | push, pop, shift, unshift, splice, sort, reverse, fill                | slice, map, filter, concat, reduce, flat, flatMap, toSorted, toReversed, toSpliced |
| Object | assign (mutates target), defineProperty, freeze, seal, setPrototypeOf | keys, values, entries, fromEntries, `...` (spread), `structuredClone`, `Object.is` |

---

### ✅ One-Line Summary

> Strings are immutable, Arrays mix mutable and immutable patterns, and Objects are flexible key-value stores — know **what mutates** vs **what returns a copy** to avoid bugs.
