# ⚡ JavaScript Asynchronous Master Note  
### (Callbacks → Promises → Async/Await)

---

## 🧩 1. JavaScript Execution Model

### 🧵 Single-threaded + Non-blocking
JavaScript executes **one thing at a time**, but delegates slow tasks (API calls, timers, I/O) to the **event loop**.

```js
console.log("Start");
setTimeout(() => console.log("Timer done!"), 2000);
console.log("End");
```

📤 **Output:**
```
Start
End
Timer done!
```
➡️ JS moves the timeout callback to the **queue**, and runs it **later** when the main thread is free.

---

## 💡 2. Callbacks

### 👉 Definition
A **callback** is a function passed as an argument to another function to be executed later.

```js
function greet(name){ console.log("Hello " + name); }
function getUser(callback){ const name = "Girish"; callback(name); }
getUser(greet);
```

### 🧠 Why We Use Callbacks
Because JS won’t wait for slow tasks — we tell it:  
👉 “**Call me back when done**.”

```js
setTimeout(() => console.log("Done after 1s"), 1000);
```

### 🔸 Types of Callbacks

| Type | Example | When it runs |
|------|----------|---------------|
| Synchronous | `arr.map(x => x*2)` | Immediately |
| Asynchronous | `setTimeout(fn,1000)` | Later (after async work) |

### ⚠️ Callback Hell

Nested dependent callbacks:
```js
getUser(id, u => {
  getPosts(u, p => {
    getComments(p, c => {
      console.log("Done");
    });
  });
});
```

😵 Hard to read, test, and maintain.

### 🧱 Node.js Error-First Pattern
```js
function readFile(cb){
  const success = false;
  if(!success) cb("❌ Error", null);
  else cb(null, "Data");
}

readFile((err, data) => {
  if(err) console.log(err);
  else console.log(data);
});
```
➡️ First arg = error, second = result.

---

## 💎 3. Promises

A **Promise** is an object representing a value that may be ready **now**, **later**, or **never**.

### 🧭 States
`pending` → `fulfilled ✅` → `rejected ❌`

### ✨ Create a Promise
```js
const myPromise = new Promise((resolve, reject) => {
  const ok = true;
  ok ? resolve("🎉 Success") : reject("❌ Failed");
});
```

### 🔹 Consume a Promise
```js
myPromise
  .then(res => console.log(res))
  .catch(err => console.log(err))
  .finally(() => console.log("Done!"));
```

### 🔁 Convert Callback → Promise
```js
function doTask(task){
  return new Promise(resolve => {
    console.log("Starting " + task);
    setTimeout(() => {
      console.log(task + " done");
      resolve();
    }, 1000);
  });
}

doTask("Step1")
  .then(() => doTask("Step2"))
  .then(() => doTask("Step3"))
  .then(() => console.log("✅ All done"))
  .catch(err => console.log(err));
```

### ⚙️ Promise Utilities

| Method | Purpose |
|--------|----------|
| `.then()` | Handle success |
| `.catch()` | Handle error |
| `.finally()` | Always runs |
| `Promise.all([])` | Run in parallel; fail fast |
| `Promise.allSettled([])` | Wait for all, regardless of failure |
| `Promise.race([])` | First to settle wins |

---

## 🚀 4. Async / Await

A cleaner syntax built on Promises — looks **synchronous**, behaves **asynchronous**.

### ✅ Basic Example
```js
async function runTasks(){
  await doTask("Step1");
  await doTask("Step2");
  console.log("✅ Done!");
}
runTasks();
```

Equivalent to `.then()` chaining, but much cleaner.

### ⚠️ Error Handling
```js
async function run(){
  try {
    await doTask("Step1");
    await doTask("Step2");
  } catch(err) {
    console.log("❌", err);
  } finally {
    console.log("Finished");
  }
}
```

### 🧩 Parallel Execution
If tasks are independent:
```js
await Promise.all([
  doTask("A"),
  doTask("B"),
  doTask("C")
]);
```
⏱️ Runs all simultaneously.

---

## 🔍 5. Event Loop & Task Queue

The **event loop** manages async operations.  
When the call stack is empty, it picks queued callbacks or promise handlers to execute.

### Microtasks vs Macrotasks

```js
setTimeout(() => console.log("timeout"));
Promise.resolve().then(() => console.log("promise"));
console.log("start");
```

📤 Output:
```
start
promise
timeout
```
➡️ Promises (**microtasks**) run **before** timers (**macrotasks**).

---

## 🪄 6. Real-World Async Example (fetch)

```js
async function getData(){
  try {
    const res = await fetch("https://api.github.com/users/Girish-GAP");
    const data = await res.json();
    console.log(data);
  } catch(err) {
    console.error("Error:", err);
  }
}
```

---

## 🧭 7. Comparison Summary

| Feature | Callback | Promise | Async/Await |
|----------|-----------|----------|-------------|
| Syntax | Nested | Chained | Sequential |
| Error Handling | Manual | `.catch()` | `try...catch` |
| Readability | Low | Medium | High |
| Flow Control | Hard | Chainable | Linear |
| Return Type | None | Promise | Promise |

---

## 🧰 8. Best Practices

✅ Keep async code **flat** (avoid deep nesting)  
✅ Always use **try/catch** around awaits  
✅ Use **Promise.all** for parallel tasks  
✅ Don’t mix `.then()` and `await` unnecessarily  
✅ Always handle rejections (`.catch()` or `try/catch`)  
✅ Use **clear function names** (e.g., `fetchUser()` not `cb1`)  

---

## 🧠 9. Mental Model

| Concept | Analogy |
|----------|----------|
| Callback | Pizza shop calls you when ready 🍕 |
| Promise | Online order — “we’ll deliver soon” 🚚 |
| Async/Await | You await delivery while doing other work 🧾 |

---

## 🧾 10. Quick Reference (Cheat Sheet)

### Promise
```js
function work(){
  return new Promise((res, rej) => {
    setTimeout(() => res("✅ Done"), 1000);
  });
}
```

### Async / Await
```js
async function run(){
  try {
    const result = await work();
    console.log(result);
  } catch(e) {
    console.error(e);
  }
}
run();
```

---

## 🔑 Final Takeaways

- **Callbacks** → first async building block  
- **Promises** → solve nesting + cleaner error handling  
- **Async/Await** → ultimate readability & flow  
- **Event Loop** → the core engine behind all async behavior  

✨ Always **handle errors** and **understand timing order** to master JavaScript async programming.
