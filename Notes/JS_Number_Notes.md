# ⚡️ JS Number — Quick Revision Notes

## 📘 Numbers are Primitive & Immutable
JavaScript numbers are **primitive values** (not objects), meaning they cannot be changed once created.

```js
let a = 10;
a.toFixed(2); // returns "10.00", but doesn't change a
console.log(a); // still 10 ✅
```

Even though you can call methods like `.toFixed()` or `.toPrecision()`, they **return a new value** (usually string) and don’t modify the original number.

Internally, JS temporarily wraps the primitive in a **Number object** so you can call methods:

```js
let a = 10;
// JS secretly does:
new Number(a).toFixed(2); // "10.00"
```

---

## 🧩 1️⃣ Basics
- JS has only one numeric type: **number** (IEEE 754 double-precision float).
- Range ≈ ±(2^1024), precision ~15–17 digits.
- ✅ Safe integer range: `−(2^53−1)` → `+(2^53−1)`

```js
Number.MIN_SAFE_INTEGER; // -9007199254740991
Number.MAX_SAFE_INTEGER; // 9007199254740991
```

---

## 🔢 2️⃣ Number Creation
```js
let n1 = 10; // primitive
let n2 = new Number(10); // object wrapper ❌

typeof n1; // "number"
typeof n2; // "object"
```
⚠️ Always use **primitive** numbers — object wrappers cause issues in comparisons.

---

## 🧮 3️⃣ Common Instance Methods

| Method | Purpose | Example | Output |
|--------|----------|----------|--------|
| **toFixed(d)** | Fixed decimals → string | (10.567).toFixed(2) | '10.57' |
| **toPrecision(d)** | Total significant digits | (10.567).toPrecision(3) | '10.6' |
| **toExponential(d)** | Scientific form | (1000).toExponential(2) | '1.00e+3' |
| **toString(base)** | Convert base (2, 8, 16, etc.) | (255).toString(16) | 'ff' |
| **toLocaleString()** | Locale formatting | (1234567.89).toLocaleString('en-IN') | '12,34,567.89' |
| **valueOf()** | Returns primitive value | (100).valueOf() | 100 |

💡 Tip: Use `(10).toFixed(2)` instead of `10.toFixed(2)` (dot parsing issue).

---

## 🧠 4️⃣ Static Methods (on Number)

| Method | Purpose | Example | Output |
|--------|----------|----------|--------|
| **Number.isFinite(x)** | Checks finite | Number.isFinite(10/0) | false |
| **Number.isInteger(x)** | True if integer | Number.isInteger(10.5) | false |
| **Number.isNaN(x)** | True if real NaN | Number.isNaN('a'/2) | true |
| **Number.isSafeInteger(x)** | Within safe range | Number.isSafeInteger(2**53) | false |
| **Number.parseFloat(str)** | Parse float | Number.parseFloat('10.5px') | 10.5 |
| **Number.parseInt(str, base)** | Parse int | Number.parseInt('101', 2) | 5 |

---

## 🧱 5️⃣ Static Properties

| Property | Description |
|-----------|--------------|
| **Number.MAX_VALUE** | 1.79e+308 (largest number) |
| **Number.MIN_VALUE** | 5e-324 (smallest positive) |
| **Number.MAX_SAFE_INTEGER** | 9007199254740991 |
| **Number.MIN_SAFE_INTEGER** | -9007199254740991 |
| **Number.POSITIVE_INFINITY / NEGATIVE_INFINITY** | Infinity constants |
| **Number.NaN** | Constant “Not-a-Number” |

---

## 🎯 6️⃣ Math Operations

```js
Math.round(4.7) // 5
Math.floor(4.7) // 4
Math.ceil(4.1) // 5
Math.trunc(4.9) // 4
Math.random() // 0 → 1
Math.pow(2,3) // 8
Math.sqrt(16) // 4
Math.abs(-5) // 5
Math.min(3,1,5) // 1
Math.max(3,1,5) // 5
```

🧠 Tip: Know rounding difference between `floor`, `ceil`, `trunc`, `round`.

---

## 🧩 7️⃣ Special Number Values

| Value | Meaning |
|--------|----------|
| **Infinity** | Overflow / division by 0 |
| **-Infinity** | Underflow |
| **NaN** | Invalid number (`'a'/2`) |
| **isNaN()** | Global function (coerces input) — prefer `Number.isNaN()` |

---

## ⚙️ 8️⃣ Type Conversion

```js
Number('10') // 10
+'10' // 10
parseInt('10px') // 10
parseFloat('10.5') // 10.5
Number(true) // 1
Number(false) // 0
Number('') // 0
Number(null) // 0
Number(undefined) // NaN
```

---

## 🧠 9️⃣ Interview Tips / Gotchas

| Case | Explanation |
|------|--------------|
| 0.1 + 0.2 !== 0.3 | Floating-point precision issue |
| ✅ Fix | `+(0.1 + 0.2).toFixed(1)` |
| NaN === NaN | false (NaN never equals itself) |
| typeof NaN | 'number' |
| Division by 0 | Returns Infinity, not error |
| parseInt('08') | 8 (base 10 default since ES5) |
| Math.round(-1.5) | -1 (rounds away from 0) |
| Object.is(+0, -0) | false (only reliable check) |

---

## 🧾 10️⃣ Mini Cheatsheet Summary

```js
(10.567).toFixed(2) // '10.57'
Number.isInteger(10.5) // false
Number.parseInt('101', 2) // 5
Number.MAX_SAFE_INTEGER // 9007199254740991
Math.round(4.5) // 5
0.1 + 0.2 // 0.30000000000000004
Object.is(+0, -0) // false
typeof NaN // 'number'
```