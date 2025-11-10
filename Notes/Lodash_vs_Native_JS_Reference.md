# ⚙️ Lodash → Native JavaScript Equivalents (Quick Interview Reference)

## 🧩 Lodash vs Native — Side-by-Side Comparison

| Lodash | Native / ES6+ Equivalent | Notes |
|--------|---------------------------|--------|
| `_.debounce(fn, t)` | 🧠 Manual — use `setTimeout` inside a wrapper | No direct native version — but easily implemented manually |
| `_.throttle(fn, t)` | 🧠 Manual — track timestamps or use `setTimeout` | No native — use `Date.now()` for intervals |
| `_.chunk(arr, size)` | `for (let i=0; i<arr.length; i+=size) chunks.push(arr.slice(i, i+size))` | Native loop or reduce version possible |
| `_.uniq(arr)` | `[...new Set(arr)]` | Fastest native way ✅ |
| `_.flatten(arr)` | `arr.flat()` | ES2019 added `.flat(depth)` |
| `_.flattenDeep(arr)` | `arr.flat(Infinity)` | Deep flatten ✅ |
| `_.cloneDeep(obj)` | `structuredClone(obj)` | ES2021 built-in deep clone ✅ |
| `_.merge(obj1, obj2)` | `{ ...obj1, ...obj2 }` (shallow) | Lodash deeply merges nested props |
| `_.pick(obj, keys)` | `Object.fromEntries(keys.map(k => [k, obj[k]]))` | Or destructuring `{a,b} = obj` for known keys |
| `_.omit(obj, keys)` | `Object.fromEntries(Object.entries(obj).filter(([k]) => !keys.includes(k)))` | Clean native version ✅ |
| `_.isEqual(a, b)` | ❌ No built-in | Must write recursive comparison — Lodash still useful |
| `_.groupBy(arr, fn)` | `arr.reduce((acc, el) => { const k = fn(el); (acc[k] = acc[k] || []).push(el); return acc; }, {})` | Easy to re-create with reduce ✅ |
| `_.range(start, end, step)` | `Array.from({length: (end-start)/step}, (_,i)=> start+i*step)` | Slightly verbose but effective |
| `_.shuffle(arr)` | `arr.sort(() => Math.random() - 0.5)` | Simple but not perfectly random (biased) |
| `_.memoize(fn)` | Manual: `const cache = new Map(); return (...a)=>cache.get(a[0])||cache.set(a[0],fn(...a))` | Easy to write manually ✅ |
| `_.once(fn)` | Manual: `let called=false; return ()=>{if(!called){called=true; fn();}}` | Short and native ✅ |

---

## 🧠 When to Use Lodash

✅ **Use Lodash if:**
- You need deep utilities (`cloneDeep`, `merge`, `isEqual`, etc.)
- You support **older browsers** (pre-ES6)
- You want concise and battle-tested syntax

🚫 **Skip Lodash if:**
- You use **modern JS (Node 12+ / ES2019+)**
- You care about **bundle size**
- You can write small helpers easily

---

## ⚙️ Built-in Methods Worth Memorizing

| Category | Useful Built-ins |
|-----------|------------------|
| **Array** | `.map()`, `.filter()`, `.reduce()`, `.some()`, `.every()`, `.flat()`, `.find()`, `.includes()` |
| **Object** | `Object.keys()`, `Object.values()`, `Object.entries()`, `Object.fromEntries()` |
| **Set / Map** | `new Set()`, `new Map()`, `.has()`, `.add()`, `.delete()` |
| **Utility** | `structuredClone()`, `Array.isArray()`, `Array.from()` |

---

## 🧾 TL;DR — Native Shortcuts

| Need | Native Option |
|------|----------------|
| Unique values | `[...new Set(arr)]` |
| Flatten deeply | `arr.flat(Infinity)` |
| Clone deeply | `structuredClone(obj)` |
| Group items | `.reduce()` |
| Merge objects | `{...a, ...b}` |
| Pick / Omit | `Object.entries() + filter()` |
| Generate range | `Array.from()` |

---

💡 **Tip for Interviews:**  
When asked “Do we still need Lodash?”, answer:  
> “Not necessarily — ES6+ gives most features natively (like `flat`, `Set`, `structuredClone`).  
> I’d only use Lodash for deep equality, merging, or legacy code support.”