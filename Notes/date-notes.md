# 📅 JavaScript Date Explanation (Step-by-Step)

## ⭐ LAYER 1 — What is a Date in JavaScript?

A **Date object** is just a wrapper around a **timestamp** — the number of milliseconds since **Jan 1, 1970 (UTC)**.

```js
new Date().getTime(); // timestamp in ms
```

Everything (year, month, day, etc.) is calculated from this timestamp.

---

## ⭐ LAYER 2 — How Dates Are Created

### ✅ 2.1 — Current Date

```js
new Date();
```

### ✅ 2.2 — Specific Date (year, month, day…)

```js
new Date(2025, 10, 17);
```

⚠️ **Month is 0‑based** → January = 0, December = 11

### ✅ 2.3 — From ISO String (recommended)

```js
new Date("2025-11-17");
```

⚠️ Other string formats (10/17/2025) may behave differently across browsers.

### ✅ 2.4 — From timestamp

```js
new Date(1700000000000);
```

---

## ⭐ LAYER 3 — Reading Date Components

Use **getters** — they never mutate the date.

```js
d.getFullYear();
d.getMonth(); // 0-based
d.getDate(); // day of month
d.getDay(); // 0 = Sunday
d.getHours();
d.getMinutes();
d.getSeconds();
d.getMilliseconds();
d.getTime(); // timestamp
```

---

## ⭐ LAYER 4 — Changing Date Components (Setters)

Setters **mutate** the original date.

```js
const d = new Date();
d.setFullYear(2030);
d.setMonth(5); // June
d.setDate(15);
```

⚠️ JS **auto-adjusts overflow**:

```js
new Date(2025, 0, 31).setMonth(1);
// Feb 31 → becomes March 3
```

---

## ⭐ LAYER 5 — Formatting Dates

### ✅ 5.1 — ISO Format (best for API/database)

```js
date.toISOString();
// 2025-11-17T12:43:22.000Z
```

### ✅ 5.2 — Locale Formatting

```js
date.toLocaleString("en-IN");
date.toLocaleDateString("en-IN");
date.toLocaleTimeString("en-IN");
```

Custom formatting:

```js
date.toLocaleDateString("en-IN", {
  day: "2-digit",
  month: "long",
  year: "numeric",
});
```

### ✅ 5.3 — Manual formatting

```js
`${d.getDate()}/${d.getMonth() + 1}/${d.getFullYear()}`;
```

---

## ⭐ LAYER 6 — Date Arithmetic

### Add days

```js
d.setDate(d.getDate() + 5);
```

### Add months

```js
d.setMonth(d.getMonth() + 1);
```

### Difference between dates

```js
const diff = date1 - date2; // ms
```

Convert:

```js
const days = diff / (1000 * 60 * 60 * 24);
const hours = diff / (1000 * 60 * 60);
```

---

## ⭐ LAYER 7 — Timezones

Local vs UTC getters:

| Local      | UTC           |
| ---------- | ------------- |
| getHours() | getUTCHours() |
| getDate()  | getUTCDate()  |

Force timezone:

```js
new Date().toLocaleString("en-US", { timeZone: "Asia/Kolkata" });
```

---

## ⭐ BONUS — Common Bugs

❌ Month is zero-based  
❌ `new Date("random string")` — unpredictable  
❌ Setters mutate existing date  
❌ Overflow auto-fixes (Feb 31 → March 3)

---

## ⭐ FINAL SUMMARY

You now understand:

✔ Date = wrapper over timestamp  
✔ 4 ways to create  
✔ How to read values  
✔ How setters mutate  
✔ Formatting (ISO, locale, manual)  
✔ Date arithmetic  
✔ Timezones  
✔ Common edge cases

This is full interview‑level mastery.
