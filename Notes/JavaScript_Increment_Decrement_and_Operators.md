# 🧠 JavaScript Increment & Decrement and Operators — Master Note

---

## 1️⃣ Increment & Decrement Operators (++, --)

These operators increase or decrease a variable’s value by 1.

There are two forms:

- **Prefix → ++a / --a**
- **Postfix → a++ / a--**

### 🔹 A. Prefix (++a, --a)

👉 Increments/decrements first, then returns the updated value.

```js
let a = 5;
let b = ++a; 
// Step 1: a = a + 1 → 6
// Step 2: return new value (6)
console.log(a, b); // 6, 6
```

✅ Use when you need the new value immediately.

### 🔹 B. Postfix (a++, a--)

👉 Returns the original value first, then increments/decrements.

```js
let a = 5;
let b = a++;
// Step 1: return original value (5)
// Step 2: then a = a + 1 → 6
console.log(a, b); // 6, 5
```

✅ Use when you need the old value first.

### 🧩 Example in loop:

```js
let i = 0;
while (i++ < 3) console.log(i);
```

| Step | Condition (i++ < 3) | Value printed |
|------|---------------------|----------------|
| i = 0 | compare 0 < 3 → true → increment to 1 | 1 |
| i = 1 | compare 1 < 3 → true → increment to 2 | 2 |
| i = 2 | compare 2 < 3 → true → increment to 3 | 3 |
| i = 3 | compare 3 < 3 → false | — |

✅ Output: 1, 2, 3

### 🧠 In return statements:

```js
function demo() {
  let x = 5;
  return x++;
}
console.log(demo()); // 5
```

→ Because x++ returns the old value.

```js
function demo2() {
  let x = 5;
  return ++x;
}
console.log(demo2()); // 6
```

→ Because ++x returns the new value.

### ✅ Summary of ++ and --

| Form | Meaning | Updates | Returns |
|-------|----------|----------|----------|
| ++a | Prefix Increment | Immediately | New Value |
| a++ | Postfix Increment | After Expression | Old Value |
| --a | Prefix Decrement | Immediately | New Value |
| a-- | Postfix Decrement | After Expression | Old Value |

---

## ⚙️ 2️⃣ All JavaScript Operator Categories

JavaScript has 5 main categories of operators:

---

### 🔹 A. Arithmetic Operators

| Operator | Meaning | Example | Result |
|-----------|----------|----------|----------|
| + | Addition | 5 + 3 | 8 |
| - | Subtraction | 5 - 3 | 2 |
| * | Multiplication | 5 * 3 | 15 |
| / | Division | 10 / 2 | 5 |
| % | Modulus (remainder) | 10 % 3 | 1 |
| ** | Exponentiation | 2 ** 3 | 8 |
| ++ | Increment | a++, ++a | — |
| -- | Decrement | a--, --a | — |

---

### 🔹 B. Assignment Operators

| Operator | Meaning | Example | Same As |
|-----------|----------|----------|----------|
| = | Assign | x = 10 | — |
| += | Add & assign | x += 2 | x = x + 2 |
| -= | Subtract & assign | x -= 2 | x = x - 2 |
| *= | Multiply & assign | x *= 2 | x = x * 2 |
| /= | Divide & assign | x /= 2 | x = x / 2 |
| %= | Modulus & assign | x %= 3 | x = x % 3 |
| **= | Power & assign | x **= 2 | x = x ** 2 |

---

### 🔹 C. Comparison Operators

| Operator | Meaning | Example | Result |
|-----------|----------|----------|----------|
| == | Equal (type convert) | '5' == 5 | true |
| === | Strict Equal | '5' === 5 | false |
| != | Not Equal | '5' != 5 | false |
| !== | Strict Not Equal | '5' !== 5 | true |
| > | Greater than | 5 > 3 | true |
| < | Less than | 5 < 3 | false |
| >= | Greater or Equal | 5 >= 5 | true |
| <= | Less or Equal | 3 <= 3 | true |

✅ Always prefer === and !== to avoid type coercion.

---

### 🔹 D. Logical Operators

| Operator | Meaning | Example | Result |
|-----------|----------|----------|----------|
| && | AND | a && b | Returns first falsy / last truthy |
| || | OR | a || b | Returns first truthy / last falsy |
| ! | NOT | !true | false |
| ?? | Nullish coalescing | null ?? 'x' | 'x' |

💡 Short-circuiting:
- a && b: if a is falsy, returns a.
- a || b: if a is truthy, returns a.

---

### 🔹 E. Ternary Operator (Conditional)

```js
const result = (age >= 18) ? "Adult" : "Minor";
```

---

### 🔹 F. Bitwise Operators

| Operator | Meaning | Example | Binary Result |
|-----------|----------|----------|----------|
| & | AND | 5 & 1 | 1 |
| | | OR | 5 | 5 |
| ^ | XOR | 5 ^ 1 | 4 |
| ~ | NOT | ~5 | -6 |
| << | Left shift | 5 << 1 | 10 |
| >> | Right shift | 5 >> 1 | 2 |
| >>> | Zero-fill right shift | -5 >>> 1 | Large positive int |

---

### 🔹 G. Miscellaneous Operators

| Operator | Meaning | Example |
|-----------|----------|----------|
| typeof | Type of operand | typeof 42 → 'number' |
| instanceof | Object instance check | obj instanceof Array |
| in | Property exists check | 'name' in obj |
| delete | Remove property | delete obj.key |
| , | Evaluate multiple expressions | (a++, b++) |
| void | Evaluate without returning | void 0 → undefined |

---

## ⚙️ 3️⃣ Operator Precedence and Associativity

Defines which operator runs first when multiple appear together.

| Priority | Operator Type | Example | Associativity |
|-----------|----------------|----------|----------------|
| 1 | () Parentheses | (a + b) | — |
| 2 | Member Access / Function Call | obj.prop | Left → Right |
| 4 | Postfix ++, -- | a++ | Left → Right |
| 5 | Prefix ++, --, +, -, ! | ++a | Right → Left |
| 6 | Exponentiation | a ** b | Right → Left |
| 7 | Multiplicative | *, /, % | Left → Right |
| 8 | Additive | +, - | Left → Right |
| 9 | Relational | <, >, <=, >= | Left → Right |
| 10 | Equality | ==, !=, ===, !== | Left → Right |
| 11 | Logical AND | && | Left → Right |
| 12 | Logical OR | || | Left → Right |
| 13 | Assignment | =, +=, -= | Right → Left |

---

## ✅ 4️⃣ Key Takeaways (for Senior Devs)

✔ ++a vs a++ → prefix updates before returning, postfix after returning.  
✔ Remember precedence: * / % before + -, and parentheses () override all.  
✔ Associativity decides tie-breaking.  
✔ Ternary, assignment, and exponentiation are right-associative.  
✔ Use parentheses () for clarity.  
✔ Short-circuiting: a && b, a || b, ?? are evaluated left-to-right.  
✔ Know precedence to debug complex expressions easily.
