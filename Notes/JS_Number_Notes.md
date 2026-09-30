# ⚡️ JavaScript Numbers — Complete & Practical Reference (All-in-One)

## 📘 1️⃣ Numbers Are Primitive & Immutable

JavaScript numbers are **primitive values** (not objects) and **immutable**.

```js
let a = 10;
a.toFixed(2); // "10.00"
console.log(a); // 10
```

JS temporarily wraps primitives in a `Number` object when calling methods.

---

## 🧩 2️⃣ JS Number Basics

- Single numeric type: 64‑bit IEEE 754
- Precision: ~15–17 digits
- Safe integer range: ±(2^53−1)

---

## 🔢 3️⃣ Number Creation

```js
let n1 = 10; // primitive
let n2 = new Number(10); // object ❌
```

---

## 🧮 4️⃣ Instance Methods

| Method           | Purpose                  |
| ---------------- | ------------------------ |
| toFixed()        | Fixed decimals (string)  |
| toPrecision()    | Total significant digits |
| toExponential()  | Scientific format        |
| toString(base)   | Convert base             |
| toLocaleString() | Locale formatting        |
| valueOf()        | Primitive value          |

---

## 🧠 5️⃣ Static Methods

Number.isFinite(), Number.isInteger(), Number.isNaN(), Number.isSafeInteger(), Number.parseFloat(), Number.parseInt()

---

## How can you detect NaN in JavaScript?

NaN is a special numeric value in JavaScript that indicates “Not-a-Number.” You can use Number.isNaN() or isNaN() to check for NaN, though they behave differently.

```js
console.log(Number.isNaN(NaN)); // true
console.log(Number.isNaN("hello")); // false (doesn't coerce)
console.log(Number.isNaN(undefined)); // false

console.log(isNaN(NaN)); // true
console.log(isNaN("hello")); // true (coerces to NaN)
console.log(isNaN(undefined)); // true (coerces to NaN)
```

## What does `Number.isNaN()` actually mean?

```js
Number.isNaN(value)
```

It asks:

> **"Is this value actually the special JavaScript value `NaN`?"**

It does **not** convert the value first.

```js
Number.isNaN(NaN);         // true
Number.isNaN("hello");     // false
Number.isNaN(undefined);   // false
Number.isNaN(123);         // false
```

### Why doesn't `"hello"` return `true`?

Because `"hello"` is a **string**, not `NaN`.

```js
Number.isNaN("hello"); // false
```

However:

```js
const result = Number("hello");

console.log(result); // NaN
console.log(Number.isNaN(result)); // true
```

The conversion produced `NaN`, so now `Number.isNaN()` correctly detects it.

---

## `Number.isNaN()` vs `isNaN()`

This is the important distinction.

### `Number.isNaN()` → NO coercion

```js
Number.isNaN("123");   // false
Number.isNaN("hello"); // false
Number.isNaN("");      // false
Number.isNaN(NaN);     // true
```

It checks the value **as it is**.

### `isNaN()` → DOES coercion

```js
isNaN("123");   // false → "123" becomes 123
isNaN("hello"); // true  → "hello" becomes NaN
isNaN("");      // false → "" becomes 0
isNaN(undefined); // true → undefined becomes NaN
```

So:

```text
Number.isNaN(x)
    ↓
"Is x already NaN?"

isNaN(x)
    ↓
"After converting x to a number, does it become NaN?"
```

---

## Why is `Number.isNaN()` useful?

Calculations or conversions can produce `NaN`:

```js
const height = Number("abc");

console.log(height); // NaN

if (Number.isNaN(height)) {
    console.log("Invalid number");
}
```

This is especially useful when you want to detect a **failed numeric calculation/conversion** without accidentally converting other types.

### Rule to remember

> **Use `Number.isNaN()` when you specifically want to detect an actual `NaN` result.**

And remember:

```js
NaN !== NaN // true
```

So don't use:

```js
value === NaN // ❌
```

Use:

```js
Number.isNaN(value) // ✅
```
also remember : 
```js
console.log(typeof(NaN)) // number
```
---
---

## 🧱 6️⃣ Static Properties

MAX_VALUE, MIN_VALUE, MAX_SAFE_INTEGER, MIN_SAFE_INTEGER, POSITIVE_INFINITY, NEGATIVE_INFINITY, NaN

---

## 🎯 7️⃣ Math Methods


| Method          | What it does                                                      | Example                     |
| --------------- | ----------------------------------------------------------------- | --------------------------- |
| `Math.round()`  | Rounds to the nearest integer                                     | `Math.round(4.6) // 5`      |
| `Math.floor()`  | Rounds **down** to the nearest integer                            | `Math.floor(4.9) // 4`      |
| `Math.ceil()`   | Rounds **up** to the nearest integer                              | `Math.ceil(4.1) // 5`       |
| `Math.trunc()`  | Removes the decimal part                                          | `Math.trunc(4.9) // 4`      |
| `Math.random()` | Generates a random number from `0` (inclusive) to `1` (exclusive) | `Math.random() // 0.734...` |
| `Math.pow()`    | Raises a number to a power                                        | `Math.pow(2, 3) // 8`       |
| `Math.sqrt()`   | Returns the square root                                           | `Math.sqrt(25) // 5`        |
| `Math.abs()`    | Returns the absolute/positive value                               | `Math.abs(-10) // 10`       |
| `Math.min()`    | Returns the smallest number                                       | `Math.min(5, 2, 8) // 2`    |
| `Math.max()`    | Returns the largest number                                        | `Math.max(5, 2, 8) // 8`    |

### Quick difference to remember

```js
Math.round(4.6) // 5   → nearest
Math.floor(4.9) // 4   → down
Math.ceil(4.1)  // 5   → up
Math.trunc(4.9) // 4   → remove decimal
```

**Note:** `Math.trunc()` is different from `floor()` for negative numbers:

```js
Math.floor(-4.9) // -5
Math.trunc(-4.9) // -4
```


---

## 💥 8️⃣ Special Values

Infinity, -Infinity, NaN

Use `Number.isNaN()` instead of `isNaN()`.

---

## ⚙️ 9️⃣ Type Conversion

Number(), +str, parseInt(), parseFloat()

---

## 🧠 🔟 Floating-Point Issues

```js
0.1 + 0.2; // 0.30000000000000004
```

Fix:

```js
Math.round((0.1 + 0.2) * 100) / 100;
```

Safe compare:

```js
Math.abs(a - b) < Number.EPSILON;
```

---

## 🧮 1️⃣1️⃣ Rounding Patterns

### Round to N decimals

```js
const roundTo = (n, d) => Math.round(n * 10 ** d) / 10 ** d;
```

### No trailing zeros

```js
parseFloat(Math.round(n * 100) / 100);
```

### With trailing zeros

```js
(40.7).toFixed(2);
```

---

## 🧾 1️⃣2️⃣ Safe Integers & BigInt

Use BigInt for huge numbers:

```js
123456789n + 2n;
```

---

## 🧮 1️⃣3️⃣ Exact Decimal Arithmetic

Use integer math for currency:

```js
(1999 * 3) / 100; // 59.97
```

---

## 🎯 1️⃣4️⃣ Formatting

```js
(1234.5).toLocaleString("en-IN", { style: "currency", currency: "INR" });
```

---

## 🧩 1️⃣5️⃣ Interview Traps

- Floating errors
- `isNaN()` coercion
- `.toFixed()` returns string
- Precision loss above MAX_SAFE_INTEGER
- +0 vs -0 (Object.is)

```js
(10.567).toFixed(2); // '10.57'
Number.isInteger(10.5); // false
Number.parseInt("101", 2); // 5
Number.MAX_SAFE_INTEGER; // 9007199254740991
Math.round(4.5); // 5
0.1 + 0.2; // 0.30000000000000004
Object.is(+0, -0); // false
typeof NaN; // 'number'
```

---

## 🎯 TL;DR Summary

- Only one number type
- Use Math.round for safe rounding
- Use Number.EPSILON for comparisons
- Prefer Number.isNaN()
- Use BigInt for very large ints
- Use integer math for currency
