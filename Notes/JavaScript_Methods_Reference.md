# 📘 Complete JavaScript Methods Reference (String, Array, Object)

---

## 🔹 1. STRING METHODS

Strings are **immutable** → every method returns a new value (never modifies the original).

| Method                | Purpose                        | Example                    | Returns         | Mutates?          | Related          |
| --------------------- | ------------------------------ | -------------------------- | --------------- | ----------------- | ---------------- |
| slice(start, end)     | Extract substring              | `'hello'.slice(1,4)`       | `'ell'`         | ❌                | Array.slice()    |
| substring(start, end) | Similar to slice, no negatives | `'hello'.substring(1,4)`   | `'ell'`         | ❌                | —                |
| substr(start, len)    | From index, take length chars  | `'hello'.substr(1,3)`      | `'ell'`         | ❌ **Deprecated** | —                |
| split(sep)            | Split string into array        | `'a,b,c'.split(',')`       | `['a','b','c']` | ❌                | Array.join()     |
| replace(find, new)    | Replace substring              | `'cat'.replace('c','b')`   | `'bat'`         | ❌                | —                |
| toUpperCase()         | Convert to uppercase           | `'hi'.toUpperCase()`       | `'HI'`          | ❌                | —                |
| toLowerCase()         | Convert to lowercase           | `'Hi'.toLowerCase()`       | `'hi'`          | ❌                | —                |
| trim()                | Remove spaces                  | `' hi '.trim()`            | `'hi'`          | ❌                | —                |
| includes(substr)      | Contains substring?            | `'hello'.includes('ell')`  | `true`          | ❌                | Array.includes() |
| indexOf(value)        | Find first occurrence          | `'hello'.indexOf('l')`     | `2`             | ❌                | Array.indexOf()  |
| lastIndexOf(value)    | Find last occurrence           | `'hello'.lastIndexOf('l')` | `3`             | ❌                | —                |
| startsWith(str)       | Prefix check                   | `'hello'.startsWith('he')` | `true`          | ❌                | —                |
| endsWith(str)         | Suffix check                   | `'hello'.endsWith('lo')`   | `true`          | ❌                | —                |
| charAt(i)             | Character at index             | `'abc'.charAt(1)`          | `'b'`           | ❌                | `'abc'[1]`       |
| concat(str2)          | Join strings                   | `'a'.concat('b')`          | `'ab'`          | ❌                | Array.concat()   |
| repeat(n)             | Repeat string n times          | `'ab'.repeat(3)`           | `'ababab'`      | ❌                | —                |

---

## 🔹 2. ARRAY METHODS

Arrays are **mutable**, but many methods return a **new array**. For methods that mutate, we show **Returns** (the method’s return value) and **Array After** (the mutated array).

| Method                         | Purpose             | Example                        | Returns              | Array After             | Mutates? | Related           |
| ------------------------------ | ------------------- | ------------------------------ | -------------------- | ----------------------- | -------- | ----------------- |
| slice(start, end)              | Copy portion        | `[1,2,3,4].slice(1,3)`         | `[2,3]`              | (unchanged) `[1,2,3,4]` | ❌       | String.slice()    |
| **splice(start, del, ...add)** | Add/Remove elements | `a=[1,2,3]; a.splice(1,1,'X')` | `['2']` (removed)    | `a` → `[1,'X',3]`       | ✅       | opposite of slice |
| concat(arr2)                   | Combine arrays      | `[1,2].concat([3,4])`          | `[1,2,3,4]`          | (unchanged)             | ❌       | String.concat()   |
| push(x)                        | Add to end          | `a=[1]; a.push(2)`             | `2` (new length)     | `a` → `[1,2]`           | ✅       | —                 |
| pop()                          | Remove last         | `a=[1,2]; a.pop()`             | `2` (removed item)   | `a` → `[1]`             | ✅       | —                 |
| shift()                        | Remove first        | `a=[1,2]; a.shift()`           | `1` (removed item)   | `a` → `[2]`             | ✅       | —                 |
| unshift(x)                     | Add to start        | `a=[2]; a.unshift(1)`          | `2` (new length)     | `a` → `[1,2]`           | ✅       | —                 |
| join(sep)                      | Join into string    | `[1,2,3].join('-')`            | `'1-2-3'`            | (unchanged)             | ❌       | String.split()    |
| indexOf(val)                   | Find index          | `[1,2,3].indexOf(2)`           | `1`                  | (unchanged)             | ❌       | String.indexOf()  |
| includes(val)                  | Contains?           | `[1,2,3].includes(2)`          | `true`               | (unchanged)             | ❌       | String.includes() |
| reverse()                      | Reverse array       | `[1,2,3].reverse()`            | `[3,2,1]` (same ref) | `a` → `[3,2,1]`         | ✅       | —                 |
| sort(fn)                       | Sort array          | `[3,1,2].sort()`               | `[1,2,3]` (same ref) | sorted in place         | ✅       | —                 |
| map(fn)                        | Transform values    | `[1,2,3].map(x=>x*2)`          | `[2,4,6]`            | (unchanged)             | ❌       | —                 |
| filter(fn)                     | Keep matching       | `[1,2,3].filter(x=>x>1)`       | `[2,3]`              | (unchanged)             | ❌       | —                 |
| reduce(fn,init)                | Combine to single   | `[1,2,3].reduce((a,b)=>a+b,0)` | `6`                  | (unchanged)             | ❌       | —                 |
| find(fn)                       | Find element        | `[1,2,3].find(x=>x>1)`         | `2`                  | (unchanged)             | ❌       | —                 |
| findIndex(fn)                  | Find index          | `[1,2,3].findIndex(x=>x>1)`    | `1`                  | (unchanged)             | ❌       | —                 |
| every(fn)                      | All match?          | `[1,2,3].every(x=>x>0)`        | `true`               | (unchanged)             | ❌       | —                 |
| some(fn)                       | Any match?          | `[1,2,3].some(x=>x>2)`         | `true`               | (unchanged)             | ❌       | —                 |
| flat(depth)                    | Flatten nested      | `[1,[2,[3]]].flat(2)`          | `[1,2,3]`            | (unchanged)             | ❌       | —                 |
| flatMap(fn)                    | Map + flat          | `[1,2].flatMap(x=>[x,x*2])`    | `[1,2,2,4]`          | (unchanged)             | ❌       | —                 |
| fill(val,start,end)            | Fill with value     | `[1,2,3].fill(0,1,3)`          | `[1,0,0]` (same ref) | `a` → `[1,0,0]`         | ✅       | —                 |
| forEach(fn)                    | Loop only           | `[1,2,3].forEach(x=>x)`        | `undefined`          | (unchanged)             | ❌       | —                 |
| toString()                     | Convert to string   | `[1,2].toString()`             | `'1,2'`              | (unchanged)             | ❌       | —                 |

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
