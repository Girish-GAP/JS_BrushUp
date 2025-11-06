# ⚙️ JavaScript `reduce()` — Methods in Brief

---

## 🔹 Purpose

`reduce()` combines all array elements into a **single value** (like sum, object, string, etc.).  
It’s one of the most powerful methods for aggregation, transformation, and custom logic.

---

## 🧠 Syntax

```js
array.reduce((a, b, c, d) => { ... }, initialValue);
```

| Param | Meaning | Example |
|--------|----------|----------|
| `a` | Accumulator → previous return value (starts from `initialValue` or first element) | running total |
| `b` | Current element being processed | 1, 2, 3… |
| `c` | Current index | 0, 1, 2… |
| `d` | The full array | `[1,2,3,4]` |

✅ **Always give an `initialValue`** — avoids empty array errors & makes behavior predictable.

---

## 🧩 Example

```js
const arr = [1, 2, 3, 4, 5];
const add = arr.reduce((a, b, c, d) => {
  console.log(a, b, c, d);
  return a + b;
}, 0);

console.log(add); // 15
```

➡️ `a` starts at `0`, then adds each element → final result = `15`.

---

## 🔧 Common Use Cases

| Task | Example | Result |
|------|----------|---------|
| Sum | `[1,2,3].reduce((a,b)=>a+b,0)` | `6` |
| Max | `[1,9,3].reduce((a,b)=>a>b?a:b)` | `9` |
| Flatten | `[[1],[2]].reduce((a,b)=>a.concat(b),[])` | `[1,2]` |
| Count occurrences | `['a','b','a'].reduce((a,c)=>(a[c]=(a[c]||0)+1,a),{})` | `{ a: 2, b: 1 }` |

---

## ⚙️ Key Points

✅ `reduce()` **does not mutate** the original array  
✅ If no `initialValue`, first element becomes the accumulator (`a`)  
✅ Returns the **final accumulated value**  
✅ Useful for both **math** and **data transformation** tasks

---

### 💡 Bonus Tip
You can use reduce() to build any higher-order function — like map, filter, or find — from scratch.

---

### 🧾 In Short
> `reduce()` = accumulate + transform + compute — your all-purpose data reducer.
