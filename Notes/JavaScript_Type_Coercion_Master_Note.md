# 🧠 JavaScript Type Coercion — Master Note

---

## 🔹 What is Type Coercion?

JavaScript automatically converts one data type to another when needed — this is **type coercion**.

It happens in two forms:

- **Implicit coercion:** JS does it automatically → `"1" + 2 → "12"`
- **Explicit coercion:** You do it manually → `Number("1") → 1`

---

## ⚙️ Types of Coercion

### 🔸 1. To String

Happens mostly with the `+` operator when **one operand is a string**.

| Value     | Becomes           |
| --------- | ----------------- |
| 123       | "123"             |
| true      | "true"            |
| false     | "false"           |
| null      | "null"            |
| undefined | "undefined"       |
| [1,2]     | "1,2"             |
| {}        | "[object Object]" |

📘 **Example:**

```js
1 + "2"; // "12" → string concatenation
```

---

### 🔸 2. To Number

Happens with **math operators** (`-`, `*`, `/`, `<`, `>`, etc.)

| Value     | Becomes |
| --------- | ------- |
| "123"     | 123     |
| "123abc"  | NaN     |
| true      | 1       |
| false     | 0       |
| null      | 0       |
| undefined | NaN     |
| "" or " " | 0       |

📘 **Examples:**

```js
"5" - 1; // 4  (string → number)
true + 1; // 2  (true → 1)
"5a" * 2; // NaN
```

---

### 🔸 3. To Boolean

Used in **conditionals** (`if`, `while`, `for`).

**Falsy values → false**  
`false, 0, -0, "", null, undefined, NaN`

Everything else → **true**.

📘 **Example:**

```js
if ("") console.log("yes"); // ❌ falsy
if ("hello") console.log("yes"); // ✅ truthy
```

---

## 🔹 How JS Decides What to Convert To (Operator Rules)

| Operator                     | Behavior                                                                    |
| ---------------------------- | --------------------------------------------------------------------------- |
| `+`                          | If any operand is a string → string concatenation. Else → numeric addition. |
| `-`, `*`, `/`, `%`, `<`, `>` | Convert both to numbers.                                                    |
| `==`                         | Convert both sides to a common type (per coercion rules).                   |
| `===`                        | No coercion — compare type + value directly.                                |

📘 **Examples:**

```js
"1" + 1; // "11"   → string
"1" - 1; // 0      → number
```

---

## ⚖️ == vs ===

| Operator | Name            | Type Conversion? | Checks       |
| -------- | --------------- | ---------------- | ------------ |
| `==`     | Loose Equality  | ✅ Yes           | Only value   |
| `===`    | Strict Equality | ❌ No            | Type + value |

📘 **Examples:**

```js
"1" == 1; // true   → string → number
"1" === 1; // false  → different types
true == 1; // true
false == 0; // true
null == undefined; // true  (special case)
NaN == NaN; // false  (NaN never equals itself)
```

✅ **Best Practice:** Always use `===` and `!==` to avoid unexpected coercion.

---

## 🧮 Tricky (Interview-Level) Examples

| Expression       | Internal Conversion                         | Result              | Type   |
| ---------------- | ------------------------------------------- | ------------------- | ------ |
| `"1" + 1`        | `"1" + "1"`                                 | `"11"`              | string |
| `"1" - 1`        | `1 - 1`                                     | `0`                 | number |
| `true + false`   | `1 + 0`                                     | `1`                 | number |
| `10 + null`      | `10 + 0`                                    | `10`                | number |
| `10 + undefined` | `10 + NaN`                                  | `NaN`               | number |
| `[] + []`        | `"" + ""`                                   | `""`                | string |
| `[] + {}`        | `"" + "[object Object]"`                    | `"[object Object]"` | string |
| `{} + []`        | block vs expression ambiguity → usually `0` | number              |

---

## 💡 Explicit Conversion (Recommended)

| Purpose    | Method      | Example       | Result  |
| ---------- | ----------- | ------------- | ------- |
| To Number  | `Number()`  | `Number("5")` | `5`     |
| To String  | `String()`  | `String(5)`   | `"5"`   |
| To Boolean | `Boolean()` | `Boolean(0)`  | `false` |

or shorthand:

```js
+"5"; // 5
!!"text"; // true
```

---

## 🔍 Internal Coercion Flow (Simplified Visualization)

```
           ┌─────────────┐
           │   Operator  │
           └──────┬──────┘
                  │
        ┌─────────▼──────────┐
        │  Is it '+' ?       │
        └────────┬───────────┘
                 │
     ┌───────────▼───────────┐
     │ Any operand string?   │──► yes → to string → concatenate
     └───────────┬───────────┘
                 │ no
                 ▼
           convert to number → add
```

---

## 🚀 Key Takeaways

✅ `+` → string concatenation if any operand is a string  
✅ Use `===` instead of `==` to avoid weird coercion bugs  
✅ `NaN` is never equal to itself (`NaN !== NaN`)  
✅ `null` and `undefined` are loosely equal but not strictly equal  
✅ Convert explicitly when clarity matters (`Number()`, `String()`, `Boolean()`)  
✅ **Falsy values:** `false`, `0`, `""`, `null`, `undefined`, `NaN`

---

### 💬 In Short

> Coercion makes JS flexible but tricky — know when the engine converts types so you stay in control.

# 🧮 JavaScript Math Object — Quick Reference Sheet

---

The `Math` object is a **built-in static object** that provides mathematical constants and functions.  
🧠 You call methods directly — **not** with `new Math()`.

---

## 🔹 1️⃣ Basic Operations

| 🧩 Method     | 📝 Description            | 💡 Example      | 🎯 Output |
| ------------- | ------------------------- | --------------- | --------- |
| Math.abs(x)   | Absolute (positive) value | Math.abs(-5)    | 5         |
| Math.round(x) | Round to nearest integer  | Math.round(4.6) | 5         |
| Math.floor(x) | Round down                | Math.floor(4.9) | 4         |
| Math.ceil(x)  | Round up                  | Math.ceil(4.1)  | 5         |
| Math.trunc(x) | Remove decimal part       | Math.trunc(4.7) | 4         |

---

## 🔹 2️⃣ Powers and Roots

| ⚡ Method      | 🧮 Description          | 💡 Example     | 🎯 Output |
| -------------- | ----------------------- | -------------- | --------- |
| Math.pow(a, b) | a raised to power b     | Math.pow(2, 3) | 8         |
| Math.sqrt(x)   | Square root             | Math.sqrt(9)   | 3         |
| Math.cbrt(x)   | Cube root               | Math.cbrt(27)  | 3         |
| a \*\* b       | Exponentiation operator | 2 \*\* 3       | 8         |

---

## 🔹 3️⃣ Random Numbers

| 🎲 Method     | 🧮 Description     | 💡 Example                                         | 🎯 Output       |
| ------------- | ------------------ | -------------------------------------------------- | --------------- |
| Math.random() | Random between 0–1 | Math.random()                                      | 0.57            |
| Range (0–9)   | Custom range       | Math.floor(Math.random() \* 10)                    | 0–9             |
| Range (1–10)  | Inclusive          | Math.floor(Math.random() \* 10) + 1                | 1–10            |
| Custom range  | min–max            | Math.floor(Math.random() \* (max - min + 1)) + min | between min–max |

---

## 🔹 4️⃣ Min, Max, Clamp

| 🧩 Method         | 💡 Example                        | 🎯 Output                  |
| ----------------- | --------------------------------- | -------------------------- |
| Math.max(4, 9, 2) |                                   | 9                          |
| Math.min(4, 9, 2) |                                   | 2                          |
| Clamp value       | Math.min(max, Math.max(min, val)) | Forces value between range |

---

## 🔹 5️⃣ Decimal Precision

| 🧮 Use                 | 💡 Example                   | 🎯 Output |
| ---------------------- | ---------------------------- | --------- |
| Round to 2 decimals    | (3.14159).toFixed(2)         | "3.14"    |
| Convert back to number | Number((3.14159).toFixed(2)) | 3.14      |

---

## 🔹 6️⃣ Trigonometric Methods (Radians)

| 📐 Method    | 💡 Example          | 🎯 Output |
| ------------ | ------------------- | --------- |
| Math.sin(x)  | Math.sin(Math.PI/2) | 1         |
| Math.cos(x)  | Math.cos(0)         | 1         |
| Math.tan(x)  | Math.tan(Math.PI/4) | 1         |
| Math.asin(x) | Math.asin(1)        | 1.5708    |
| Math.acos(x) | Math.acos(1)        | 0         |
| Math.atan(x) | Math.atan(1)        | 0.7854    |

💡 Convert degrees → radians:  
`deg * (Math.PI / 180)`

---

## 🔹 7️⃣ Logarithmic and Exponential

| 📈 Method     | 💡 Example       | 🎯 Output |
| ------------- | ---------------- | --------- |
| Math.log(x)   | Math.log(Math.E) | 1         |
| Math.log10(x) | Math.log10(100)  | 2         |
| Math.exp(x)   | Math.exp(1)      | 2.718     |

---

## 🔹 8️⃣ Useful Constants

| 🧭 Constant  | 📝 Description | 🎯 Value          |
| ------------ | -------------- | ----------------- |
| Math.PI      | π              | 3.141592653589793 |
| Math.E       | Euler’s number | 2.718281828459045 |
| Math.SQRT2   | √2             | 1.4142            |
| Math.SQRT1_2 | √½             | 0.7071            |
| Math.LN2     | ln(2)          | 0.693             |
| Math.LN10    | ln(10)         | 2.302             |
| Math.LOG2E   | log₂(e)        | 1.442             |
| Math.LOG10E  | log₁₀(e)       | 0.434             |

---

## 🔹 9️⃣ Advanced / ES6+ Methods

| ⚙️ Method        | 🧮 Description                | 💡 Example         | 🎯 Output     |
| ---------------- | ----------------------------- | ------------------ | ------------- |
| Math.sign(x)     | 1 for +, -1 for –, 0 for 0    | Math.sign(-5)      | -1            |
| Math.hypot(a, b) | √(a² + b²)                    | Math.hypot(3, 4)   | 5             |
| Math.imul(a, b)  | 32-bit integer multiplication | Math.imul(2, 4)    | 8             |
| Math.expm1(x)    | eˣ - 1                        | Math.expm1(1)      | 1.718         |
| Math.log1p(x)    | ln(1 + x)                     | Math.log1p(1)      | 0.693         |
| Math.fround(x)   | 32-bit float version          | Math.fround(1.337) | ≈1.3370000123 |

---

## 🔹 🔟 Common Interview Tasks

| 🧠 Task              | Code                                     | Result          |
| -------------------- | ---------------------------------------- | --------------- |
| Random int 1–100     | Math.floor(Math.random() \* 100) + 1     | 1–100           |
| Round to 2 decimals  | Number(num.toFixed(2))                   | e.g. 3.14       |
| Max of array         | Math.max(...arr)                         | largest element |
| Generate 4-digit OTP | Math.floor(1000 + Math.random() \* 9000) | 1000–9999       |

---

## 🔹 11️⃣ Operator Reminder

| Operator   | Meaning             | Associativity |
| ---------- | ------------------- | ------------- |
| \*\*       | Exponentiation      | Right-to-left |
| \* / % + - | Standard arithmetic | Left-to-right |

Example:

```js
2 ** (3 ** 2); // 2 ** (3 ** 2) = 512
```

---

## 🧠 TL;DR Must-Know List (for Interviews)

✅ Math.abs()  
✅ Math.floor(), Math.ceil(), Math.round(), Math.trunc()  
✅ Math.pow() / \*\*, Math.sqrt()  
✅ Math.random()  
✅ Math.max() / Math.min()  
✅ Math.sign(), Math.hypot()  
✅ Math.PI, Math.E  
✅ Math.log(), Math.exp()  
✅ toFixed() for decimals

---
