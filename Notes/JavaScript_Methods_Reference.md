# 📘 Complete JavaScript Methods Reference (String, Array, Object)

---

## 🔹 1. STRING METHODS

Strings are **immutable** → every method returns a new value (never modifies the original).

| Method | Purpose | Example | Returns | Mutates? | Related |
|--------|----------|----------|----------|-----------|----------|
| slice(start, end) | Extract substring | `'hello'.slice(1,4)` | `'ell'` | ❌ | Array.slice() |
| substring(start, end) | Similar to slice, no negatives | `'hello'.substring(1,4)` | `'ell'` | ❌ | — |
| substr(start, len) | From index, take length chars | `'hello'.substr(1,3)` | `'ell'` | ❌ (Deprecated) | — |
| split(sep) | Split string into array | `'a,b,c'.split(',')` | `['a','b','c']` | ❌ | Array.join() |
| replace(find, new) | Replace substring | `'cat'.replace('c','b')` | `'bat'` | ❌ | — |
| toUpperCase() | Convert to uppercase | `'hi'.toUpperCase()` | `'HI'` | ❌ | — |
| toLowerCase() | Convert to lowercase | `'Hi'.toLowerCase()` | `'hi'` | ❌ | — |
| trim() | Remove spaces | `' hi '.trim()` | `'hi'` | ❌ | — |
| includes(substr) | Check if contains substring | `'hello'.includes('ell')` | `true` | ❌ | Array.includes() |
| indexOf(value) | Find first occurrence | `'hello'.indexOf('l')` | `2` | ❌ | Array.indexOf() |
| lastIndexOf(value) | Find last occurrence | `'hello'.lastIndexOf('l')` | `3` | ❌ | — |
| startsWith(str) | Prefix check | `'hello'.startsWith('he')` | `true` | ❌ | — |
| endsWith(str) | Suffix check | `'hello'.endsWith('lo')` | `true` | ❌ | — |
| charAt(i) | Character at index | `'abc'.charAt(1)` | `'b'` | ❌ | `'abc'[1]` |
| concat(str2) | Join strings | `'a'.concat('b')` | `'ab'` | ❌ | Array.concat() |
| repeat(n) | Repeat string n times | `'ab'.repeat(3)` | `'ababab'` | ❌ | — |

---

## 🔹 2. ARRAY METHODS

Arrays are **mutable**, but many methods return a **new array**.

| Method | Purpose | Example | Returns | Mutates? | Related |
|--------|----------|----------|----------|-----------|----------|
| slice(start, end) | Copy portion | `[1,2,3,4].slice(1,3)` | `[2,3]` | ❌ | String.slice() |
| splice(start, del, ...add) | Add/Remove elements | `a=[1,2,3]; a.splice(1,1,'X')` | `['2']` | ✅ | opposite of slice |
| concat(arr2) | Combine arrays | `[1,2].concat([3,4])` | `[1,2,3,4]` | ❌ | String.concat() |
| push(x) | Add to end | `a=[1]; a.push(2)` | `2` (new length) | ✅ | — |
| pop() | Remove last | `a=[1,2]; a.pop()` | `2` | ✅ | — |
| shift() | Remove first | `a=[1,2]; a.shift()` | `1` | ✅ | — |
| unshift(x) | Add to start | `a=[2]; a.unshift(1)` | `2` | ✅ | — |
| join(sep) | Join into string | `[1,2,3].join('-')` | `'1-2-3'` | ❌ | String.split() |
| indexOf(val) | Find index | `[1,2,3].indexOf(2)` | `1` | ❌ | String.indexOf() |
| includes(val) | Contains? | `[1,2,3].includes(2)` | `true` | ❌ | String.includes() |
| reverse() | Reverse array | `[1,2,3].reverse()` | `[3,2,1]` | ✅ | — |
| sort(fn) | Sort array | `[3,1,2].sort()` | `[1,2,3]` | ✅ | — |
| map(fn) | Transform values | `[1,2,3].map(x=>x*2)` | `[2,4,6]` | ❌ | — |
| filter(fn) | Keep matching | `[1,2,3].filter(x=>x>1)` | `[2,3]` | ❌ | — |
| reduce(fn,init) | Combine to single | `[1,2,3].reduce((a,b)=>a+b,0)` | `6` | ❌ | — |
| find(fn) | Find element | `[1,2,3].find(x=>x>1)` | `2` | ❌ | — |
| findIndex(fn) | Find index | `[1,2,3].findIndex(x=>x>1)` | `1` | ❌ | — |
| every(fn) | All match? | `[1,2,3].every(x=>x>0)` | `true` | ❌ | — |
| some(fn) | Any match? | `[1,2,3].some(x=>x>2)` | `true` | ❌ | — |
| flat(depth) | Flatten nested | `[1,[2,[3]]].flat(2)` | `[1,2,3]` | ❌ | — |
| flatMap(fn) | Map + flat | `[1,2].flatMap(x=>[x,x*2])` | `[1,2,2,4]` | ❌ | — |
| fill(val,start,end) | Fill with value | `[1,2,3].fill(0,1,3)` | `[1,0,0]` | ✅ | — |
| forEach(fn) | Loop only | `[1,2,3].forEach(x=>console.log(x))` | `undefined` | ❌ | — |
| toString() | Convert to string | `[1,2].toString()` | `'1,2'` | ❌ | — |

---

## 🔹 3. OBJECT METHODS

Objects store **key-value pairs**, mostly non-mutating (except a few).

| Method | Purpose | Example | Returns | Mutates? | Related |
|--------|----------|----------|----------|-----------|----------|
| Object.keys(obj) | Get keys | `Object.keys({a:1,b:2})` | `['a','b']` | ❌ | — |
| Object.values(obj) | Get values | `Object.values({a:1,b:2})` | `[1,2]` | ❌ | — |
| Object.entries(obj) | Get key-value pairs | `Object.entries({a:1})` | `[ ['a',1] ]` | ❌ | — |
| Object.fromEntries(arr) | Build from pairs | `Object.fromEntries([['a',1]])` | `{a:1}` | ❌ | — |
| Object.assign(t,s) | Copy props | `Object.assign({}, {a:1})` | `{a:1}` | ✅ (mutates target) | Spread `{...s}` |
| Object.freeze(obj) | Lock all props | `Object.freeze({a:1})` | same object | ✅ | — |
| Object.seal(obj) | Prevent add/remove | `Object.seal({a:1})` | same object | ✅ | — |
| Object.hasOwn(obj,key) | Check property | `Object.hasOwn({a:1},'a')` | `true` | ❌ | — |
| Object.create(proto) | New obj with proto | `Object.create(null)` | empty obj | ❌ | — |
| Object.is(a,b) | Precise equality | `Object.is(NaN,NaN)` | `true` | ❌ | better than === |
| Object.getOwnPropertyNames(obj) | Get all keys | `Object.getOwnPropertyNames({a:1})` | `['a']` | ❌ | — |
| Object.defineProperty(obj,key,desc) | Define descriptor | `Object.defineProperty({},'a',{value:1})` | same object | ✅ | — |

---

## 🔁 4. OVERLAPS (Shared Methods)

| Method | String | Array | Object | Purpose |
|--------|---------|--------|---------|----------|
| slice() | ✅ | ✅ | ❌ | Extract portion without mutation |
| concat() | ✅ | ✅ | ❌ | Combine multiple values |
| includes() | ✅ | ✅ | ❌ | Check if value exists |
| indexOf() | ✅ | ✅ | ❌ | Find index |
| toString() | ✅ | ✅ | ✅ | Convert to string |
| length | ✅ | ✅ | ❌ | Count of items |
| Spread (`...`) | ❌ | ✅ | ✅ | Expand or clone |

---

## 🧩 5. slice() vs splice()

| Feature | slice() | splice() |
|----------|----------|----------|
| Available In | String, Array | Array only |
| Mutates Original? | ❌ No | ✅ Yes |
| Purpose | Extract portion | Add/Remove elements |
| Example | `[1,2,3,4].slice(1,3)` → `[2,3]` | `[1,2,3,4].splice(1,2)` → modifies to `[1,4]` |

---

## 🧠 6. Quick Mutability Summary

| Type | Mutating Methods | Non-Mutating Methods |
|------|------------------|----------------------|
| String | None | All return new string |
| Array | push, pop, shift, unshift, splice, sort, reverse, fill | slice, map, filter, concat, reduce, etc. |
| Object | assign, defineProperty, freeze, seal | keys, values, entries, fromEntries |

---

### ✅ One-Line Summary

> Strings are immutable, Arrays are flexible, and Objects are powerful — knowing their mutating vs non-mutating methods keeps your JS clean and predictable.
