# 🧠 JavaScript Classes — Quick Reference Sheet

---

## 🏗️ 1️⃣ What is a Class?

➡️ A **blueprint** to create objects with shared properties & methods.  
➡️ Syntactic sugar over JS’s **prototype-based inheritance**.

```js
class Student {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  getInfo() {
    return `${this.name} is ${this.age} years old`;
  }
}

const s1 = new Student("Girish", 24);
console.log(s1.getInfo()); // Girish is 24 years old
```
... (truncated for brevity)
