# ⚙️ JavaScript Data Structures — Quick Master Reference

(Complete summary of Set, Map, Object, WeakSet, WeakMap — with use-cases, examples, and performance notes.)

---

## 🧩 1️⃣ Set — Unique Value Collection

📘 **Definition:**  
A Set stores **unique values only** (no duplicates).  
➡️ Think: “Do I only care whether it exists?” → Use **Set**.

### ✨ Example
```js
const nums = new Set([1, 2, 2, 3]);
console.log(nums); // Set(3) { 1, 2, 3 }
```

### 🔧 Common Methods

| Method | Description | Example | Output |
|---------|--------------|----------|---------|
| .add(v) | Add value | nums.add(4) | {1,2,3,4} |
| .delete(v) | Remove value | nums.delete(2) | true |
| .has(v) | Check existence | nums.has(3) | true |
| .size | Count elements | nums.size | 3 |
| .clear() | Remove all | nums.clear() | empty |
| for...of | Iterate | `for (let v of nums)` | 1,2,3 |

💡 **Use-cases:**  
✅ Remove duplicates  
✅ Track visited elements  
✅ Fast existence checks (O(1))

```js
const arr = [1, 2, 2, 3];
const unique = [...new Set(arr)];
console.log(unique); // [1, 2, 3]
```

🧠 Think: “Is it unique?” → **Set**

---

## 🔑 2️⃣ Map — Key-Value Pairs (Flexible Dictionary)

📘 **Definition:**  
A Map holds **key-value pairs**, where **keys can be of any type** (string, number, object, etc).  
➡️ Use when you need mapping or frequency counting.

### ✨ Example
```js
const map = new Map();
map.set("a", 1);
map.set("b", 2);
console.log(map.get("a")); // 1
```

### 🔧 Common Methods

| Method | Description | Example | Output |
|---------|--------------|----------|---------|
| .set(k,v) | Add/update | map.set("x",10) | Map(1) { "x" => 10 } |
| .get(k) | Retrieve value | map.get("x") | 10 |
| .has(k) | Key exists? | map.has("x") | true |
| .delete(k) | Remove key | map.delete("x") | true |
| .clear() | Remove all | map.clear() | empty |
| .size | No. of pairs | map.size | count |
| .forEach((v,k)) | Iterate | `map.forEach((v,k)=>console.log(k,v))` | prints pairs |
| for...of | Destructure | `for (let [k,v] of map)` | key,value |

💡 **Use-cases:**  
✅ Frequency counting  
✅ Cache or lookup tables  
✅ Key-value relation with any type key  
✅ Maintain insertion order

### 🧮 Example (Count Frequency)
```js
const arr = [1, 2, 2, 3, 3, 3];
const freq = new Map();
for (let n of arr) freq.set(n, (freq.get(n) || 0) + 1);
for (let [num, count] of freq) console.log(`${num} → ${count} times`);
```

🧠 Think: “I need a value for each key.” → **Map**

---

## 🧰 3️⃣ Object — Classic Key-Value Pair

📘 **Definition:**  
An Object is a key-value structure, but keys are **strings or symbols only**.  
➡️ Works great for fixed structures or when keys are known in advance.

### ✨ Example
```js
const user = { name: "Alex", age: 25 };
console.log(user.name); // Alex
```

### 🔧 Common Operations

| Syntax | Description | Example | Output |
|---------|--------------|----------|---------|
| obj.key / obj['key'] | Access value | user['age'] | 25 |
| obj.key = val | Add/update | user.city = "Pune" | adds city |
| delete obj.key | Remove key | delete user.age | true |
| Object.keys(obj) | All keys | ['name', 'city'] |  |
| Object.values(obj) | All values | ['Alex', 'Pune'] |  |
| Object.entries(obj) | [key, value] pairs | [['name','Alex'], ['city','Pune']] |  |

💡 **Use-cases:**  
✅ Simple structured data  
✅ Configs / JSON data  
✅ When you don’t need dynamic keys or ordering

```js
const arr = [1,2,2,3,3,3];
const freq = {};
for (let n of arr) freq[n] = (freq[n] || 0) + 1;
console.log(freq); // {1:1, 2:2, 3:3}
```

🧠 Think: “Small, structured data — keys known.” → **Object**

---

## ⚖️ Map vs Object — Key Differences

| Feature | 🗺️ Map | 🧱 Object |
|----------|--------|-----------|
| Key type | Any (string, obj, func...) | String / Symbol only |
| Ordered | ✅ Yes | ⚠️ Not guaranteed |
| Iteration | for...of, .forEach() | Object.keys() etc. |
| Performance | Faster for frequent adds/removes | Slightly slower |
| Use Case | Dynamic, runtime keys | Static, structured data |

💬 **Interview Tip:**  
“Map is better when keys are dynamic or not strings.”

---

## 🧿 4️⃣ WeakSet — Object-only Unique Set

📘 **Definition:**  
A WeakSet is like Set, but:  
- Only stores **objects**  
- References are **weak** → auto removed when object deleted

```js
let obj = {name: "A"};
const ws = new WeakSet();
ws.add(obj);
obj = null; // object garbage collected automatically
```

🧠 Use when:  
✅ You want to track objects without preventing garbage collection.

---

## 🗝️ 5️⃣ WeakMap — Object-only Key-Value Map

📘 **Definition:**  
Like Map, but:  
- Keys must be objects  
- Auto garbage collected if object deleted  
- Not iterable

```js
let obj = { id: 1 };
const wm = new WeakMap();
wm.set(obj, "meta");
obj = null; // key auto removed
```

🧠 Use when:  
✅ Attach metadata to objects safely  
✅ Private data in class or cache

---

## 🧭 When to Use What (Quick Summary)

| Situation | Best DS | Why |
|------------|----------|-----|
| Remove duplicates | 🧩 Set | Only unique values |
| Track visited elements | 🧩 Set | Fast existence check |
| Frequency count | 🔑 Map / Object | Key → Count |
| Cache API results | 🔑 Map | Dynamic key-value |
| Simple config data | 🧱 Object | Known keys |
| Attach hidden metadata | 🗝️ WeakMap | Auto cleanup |
| Track object references | 🧿 WeakSet | Auto cleanup |

---

## ⚙️ Iteration Quick Reference

| Structure | Loop Example | Output |
|------------|---------------|--------|
| Set | for (let v of set) | values |
| Map | for (let [k,v] of map) | key + value |
| Object | for (let [k,v] of Object.entries(obj)) | key + value |

---

## ⚡ Performance Notes (Big-O)

| Operation | Set | Map | Object |
|------------|------|------|---------|
| Insert | O(1) | O(1) | O(1) |
| Delete | O(1) | O(1) | O(1) |
| Search | O(1) | O(1) | O(1) |
| Ordered? | ✅ | ✅ | ⚠️ Not guaranteed |
| Key type | any | any | string/symbol |

---

## 🧮 Practical Example (All Together)

```js
const set = new Set([1,2,2,3]);
console.log([...set]); // [1,2,3]

const map = new Map();
[1,2,2,3].forEach(n => map.set(n, (map.get(n)||0)+1));
console.log(map); // {1=>1,2=>2,3=>1}

const obj = {};
[1,2,2,3].forEach(n => obj[n] = (obj[n]||0)+1);
console.log(obj); // {1:1,2:2,3:1}
```

---

## 💬 Final Mental Model

| Structure | Ask Yourself... | If YES → Use |
|------------|------------------|--------------|
| Set | Do I only care if something exists? | 🧩 Set |
| Map | Do I want to store info about something? | 🔑 Map |
| Object | Do I have fixed fields (e.g. user.name)? | 🧱 Object |
| WeakMap / WeakSet | Do I want to track objects without memory leak? | 🗝️ WeakMap / 🧿 WeakSet |

---
