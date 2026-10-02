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

| Property | Meaning |
|---|---|
| `Number.MAX_SAFE_INTEGER` | Largest safe integer |
| `Number.MIN_SAFE_INTEGER` | Smallest safe integer |
| `Number.MAX_VALUE` | Largest finite number |
| `Number.MIN_VALUE` | Smallest positive representable number |
| `Number.POSITIVE_INFINITY` | Positive infinity |
| `Number.NEGATIVE_INFINITY` | Negative infinity |
| `Number.NaN` | Not-a-Number value |
| `Number.EPSILON` | Precision gap near 1 |

> **Important distinction:** `Number.MIN_VALUE` is a tiny positive number, not the most negative number.


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

| Method | What it does | Example |
|---|---|---|
| `Number()` | Converts a value to a number | `Number("42") // 42` |
| `+str` | Unary `+` converts a string/value to a number | `+"42" // 42` |
| `parseInt()` | Converts a string to an integer, stopping at the decimal/non-numeric part | `parseInt("42.8") // 42` |
| `parseFloat()` | Converts a string to a floating-point number | `parseFloat("42.8") // 42.8` |

### Important differences

```js
Number("42px")       // NaN
parseInt("42px")     // 42
parseFloat("42.8px") // 42.8
```

**Why?**

- `Number()` → expects the **whole value** to represent a valid number.
- `parseInt()` → reads an **integer from the beginning**.
- `parseFloat()` → reads a **decimal number from the beginning**.

### Unary `+`

```js
const str = "123";

+str // 123
```

It's basically a short way to perform numeric conversion:

```js
Number(str) // 123
+str        // 123
```

### Quick rule

```text
Number()     → "Convert the whole value to a number"
+value       → "Short numeric conversion"
parseInt()   → "Get an integer from the beginning"
parseFloat() → "Get a decimal number from the beginning"
```

---

## 🧠 🔟 Floating-Point Issues

## JavaScript — Floating-Point Comparison & `Number.EPSILON`

### The problem

JavaScript uses floating-point numbers, so some decimal calculations are not represented exactly:

```js
0.1 + 0.2 === 0.3
// false
```

Even though mathematically:

```text
0.1 + 0.2 = 0.3
```

JavaScript may internally get something like:

```text
0.30000000000000004
```
Problem : 
Decimal number ->  Stored internally as binary floating-point  ->  Some decimals cannot be represented exactly  ->  Tiny rounding errors can appear  ->  Don't blindly use === for sensitive decimal calculations

---

### How to compare decimal calculations

Instead of checking exact equality:

```js
actual === expected // ❌ may fail because of tiny precision errors
```

Check how **far apart** the values are:

```js
Math.abs(actual - expected) < tolerance
```

Example:

```js
const actual = 0.3 - 0.1;
const expected = 0.2;
const tolerance = 0.000001;

Math.abs(actual - expected) < tolerance;
// true
```

### What is happening?

```text
actual:       0.19999999999999998
expected:     0.2
                         ↓
             calculate the difference
                         ↓
        Math.abs(actual - expected)
                         ↓
              tiny difference
                         ↓
          smaller than tolerance?
                         ↓
                        true
```

The subtraction is **not trying to make the answer zero**.

It asks:

> **"How far apart are these two numbers?"**

---

### What is `Number.EPSILON`?

`Number.EPSILON` is a very small built-in value:

```js
Number.EPSILON
// 2.220446049250313e-16
```

It can be used as a tolerance for **very tiny floating-point errors**:

```js
Math.abs(0.1 + 0.2 - 0.3) < Number.EPSILON;
// true
```

### Important: tolerance depends on the requirement

Don't assume `Number.EPSILON` should always be used.

The general pattern is:

```js
Math.abs(actual - expected) < tolerance
```

And `tolerance` depends on **how much error your application can accept**.

For example:

```js
const tolerance = 0.000001;
```

means:

> "A difference smaller than `0.000001` is close enough for my purpose."

### Remember

```text
===                         → exact equality
Math.abs(a - b) < tolerance → close enough
Number.EPSILON              → very tiny built-in tolerance/reference
```

```js
Math.round((0.1 + 0.2) * 100) / 100; // Rounding changes the value to the precision I want.
```

```js
const actual = 0.3 - 0.1;
const expected = 0.2;
const tolerance = 0.000001;
Math.abs(actual - expected) < tolerance;  // Tolerance checks whether two values are close enough.
```

**Main concept:** When dealing with floating-point calculations, don't blindly expect decimal values to be exactly equal. Compare their difference against an appropriate tolerance.

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

## BigInt

### 1. What is BigInt?

Used to represent very large integers without losing integer precision.

```js
const num = 12345678901234567890n;
console.log(num);
```

### 2. When is it needed?

JavaScript's `Number` type has a safe-integer limit:

```js
Number.MAX_SAFE_INTEGER;
// 9007199254740991
```

Use `BigInt` when you need exact integer calculations beyond this range.

### 3. Creating BigInt

```js
const a = 100n;
const b = BigInt("9007199254740993");
```

### 4. Important Rules

```js
10n + 5n; // 15n

10n + 5;  // TypeError: Cannot mix BigInt and Number

10n / 3n; // 3n (fraction discarded)
```

- Add `n` to an integer literal to create a `BigInt`.
- `BigInt` supports integers, not decimal fractions.
- Avoid converting huge `BigInt` values to `Number`, because precision can be lost.
- `typeof 10n` returns `"bigint"`.

### 5. When Not to Use It

For ordinary calculations such as BMI, UI values, and most everyday arithmetic, `Number` is sufficient.

> **Interview takeaway:** `BigInt` represents arbitrarily large integers, but it cannot be mixed directly with `Number` in arithmetic.


---

## 🧮 1️⃣3️⃣ Exact Decimal Arithmetic

## Floating-Point Precision and Currency

### Problem

JavaScript `Number` can produce floating-point precision errors.

```js
0.1 + 0.2; // 0.30000000000000004
```

### Solution

For currency, store amounts as integers in the smallest currency unit (paise or cents).

```js
const priceInPaise = 1999; // ₹19.99
const quantity = 3;

const totalPaise = priceInPaise * quantity; // 5997
const totalRupees = totalPaise / 100;        // 59.97
```

### Important Points

- Keep calculations in integer paise as long as possible.
- Convert to rupees only when needed for display.
- Handle rounding carefully when a calculation produces fractions of a paise.
- `BigInt` can represent huge integers, but it doesn't support decimal fractions directly.

> **Interview takeaway:** Using integer currency units reduces floating-point errors in financial calculations.


---

## 🎯 1️⃣4️⃣ Formatting

```js
(1234.5).toLocaleString("en-IN", { style: "currency", currency: "INR" }); // ₹1,234.50
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
