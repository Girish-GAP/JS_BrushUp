
# ⚡ Debounce vs Throttle — JavaScript Interview Notes

---

## 🧩 Why They Matter
Both **debouncing** and **throttling** control how often a function executes, especially during high-frequency events like `scroll`, `resize`, or `input`.  
They improve performance and user experience.

---

## ⚙️ 1. Debounce

### 🔹 Definition
Debouncing ensures a function runs **only after a delay** since the last time it was called.  
It waits for the user to stop triggering the event.

### 💬 Use Cases
- API calls while typing (search box)
- Window resizing (fires only after resize stops)
- Auto-save after user stops editing

### 🧠 Example
```js
function debounce(fn, delay) {
  let timeoutId;
  return function (...args) {
    clearTimeout(timeoutId);
    timeoutId = setTimeout(() => fn(...args), delay);
  };
}
```

**Usage:**
```js
const handleSearch = debounce(() => {
  console.log("Fetching results...");
}, 500);
```

### 🔸 Variants & Enhancements

#### Leading Call (Run Immediately)
```js
function debounce(fn, delay, immediate = false) {
  let timeoutId;
  return function (...args) {
    const callNow = immediate && !timeoutId;
    clearTimeout(timeoutId);
    timeoutId = setTimeout(() => {
      timeoutId = null;
      if (!immediate) fn(...args);
    }, delay);
    if (callNow) fn(...args);
  };
}
```

#### Cancelable Debounce
```js
function debounce(fn, delay) {
  let timeoutId;
  const debounced = (...args) => {
    clearTimeout(timeoutId);
    timeoutId = setTimeout(() => fn(...args), delay);
  };
  debounced.cancel = () => clearTimeout(timeoutId);
  return debounced;
}
```

---

## ⚙️ 2. Throttle

### 🔹 Definition
Throttling ensures a function executes **at most once every X milliseconds**, no matter how frequently it’s called.

### 💬 Use Cases
- Scroll or resize events
- Mouse move tracking
- Preventing button spam clicks

### 🧠 Example (Timestamp Method)
```js
function throttle(fn, delay) {
  let lastCall = 0;
  return function (...args) {
    const now = Date.now();
    if (now - lastCall >= delay) {
      lastCall = now;
      fn(...args);
    }
  };
}
```

### 🧠 Example (Timeout Method)
```js
function throttle(fn, delay) {
  let timeoutId = null;
  return function (...args) {
    if (!timeoutId) {
      fn(...args);
      timeoutId = setTimeout(() => (timeoutId = null), delay);
    }
  };
}
```

---

## ⚔️ Debounce vs Throttle — Quick Comparison

| Feature | **Debounce** | **Throttle** |
|----------|---------------|---------------|
| **Execution** | After quiet period | At regular intervals |
| **Goal** | Wait for inactivity | Control execution rate |
| **Use Case** | Search input, resize end | Scroll, mouse move |
| **Trigger Pattern** | Final event only | Periodic (every X ms) |
| **React Usage** | Input change handlers | Continuous actions |

---

## ⚙️ React Tips

Wrap callbacks in **useCallback()** to avoid recreation:
```js
const handleSearch = useCallback(debounce(fetchData, 500), []);
```

For throttled functions tied to UI, always clean up timers:
```js
useEffect(() => {
  return () => throttledFn.cancel?.();
}, []);
```

---

## 🧾 TL;DR Summary

| Concept | Key Idea | Use When |
|----------|-----------|-----------|
| **Debounce** | Wait for inactivity | API calls after typing stops |
| **Throttle** | Limit call frequency | Scroll / resize events |
