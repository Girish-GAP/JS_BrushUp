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

| Value | Becomes |
|--------|----------|
| 123 | "123" |
| true | "true" |
| false | "false" |
| null | "null" |
| undefined | "undefined" |
| [1,2] | "1,2" |
| {} | "[object Object]" |

📘 **Example:**
```js
1 + "2"; // "12" → string concatenation
```

---

### 🔸 2. To Number

Happens with **math operators** (`-`, `*`, `/`, `<`, `>`, etc.)

| Value | Becomes |
|--------|----------|
| "123" | 123 |
| "123abc" | NaN |
| true | 1 |
| false | 0 |
| null | 0 |
| undefined | NaN |
| "" or " " | 0 |

📘 **Examples:**
```js
"5" - 1;   // 4  (string → number)
true + 1;  // 2  (true → 1)
"5a" * 2;  // NaN
```

---

### 🔸 3. To Boolean

Used in **conditionals** (`if`, `while`, `for`).

**Falsy values → false**  
`false, 0, -0, "", null, undefined, NaN`

Everything else → **true**.

📘 **Example:**
```js
if ("") console.log("yes");   // ❌ falsy
if ("hello") console.log("yes"); // ✅ truthy
```

---

## 🔹 How JS Decides What to Convert To (Operator Rules)

| Operator | Behavior |
|-----------|-----------|
| `+` | If any operand is a string → string concatenation. Else → numeric addition. |
| `-`, `*`, `/`, `%`, `<`, `>` | Convert both to numbers. |
| `==` | Convert both sides to a common type (per coercion rules). |
| `===` | No coercion — compare type + value directly. |

📘 **Examples:**
```js
"1" + 1; // "11"   → string
"1" - 1; // 0      → number
```

---

## ⚖️ == vs ===

| Operator | Name | Type Conversion? | Checks |
|-----------|------|------------------|---------|
| `==` | Loose Equality | ✅ Yes | Only value |
| `===` | Strict Equality | ❌ No | Type + value |

📘 **Examples:**
```js
"1" == 1;       // true   → string → number
"1" === 1;      // false  → different types
true == 1;      // true
false == 0;     // true
null == undefined; // true  (special case)
NaN == NaN;     // false  (NaN never equals itself)
```

✅ **Best Practice:** Always use `===` and `!==` to avoid unexpected coercion.

---

## 🧮 Tricky (Interview-Level) Examples

| Expression | Internal Conversion | Result | Type |
|-------------|----------------------|---------|------|
| `"1" + 1` | `"1" + "1"` | `"11"` | string |
| `"1" - 1` | `1 - 1` | `0` | number |
| `true + false` | `1 + 0` | `1` | number |
| `10 + null` | `10 + 0` | `10` | number |
| `10 + undefined` | `10 + NaN` | `NaN` | number |
| `[] + []` | `"" + ""` | `""` | string |
| `[] + {}` | `"" + "[object Object]"` | `"[object Object]"` | string |
| `{} + []` | block vs expression ambiguity → usually `0` | number |

---

## 💡 Explicit Conversion (Recommended)

| Purpose | Method | Example | Result |
|----------|---------|----------|---------|
| To Number | `Number()` | `Number("5")` | `5` |
| To String | `String()` | `String(5)` | `"5"` |
| To Boolean | `Boolean()` | `Boolean(0)` | `false` |

or shorthand:

```js
+"5";       // 5
!!"text";   // true
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
