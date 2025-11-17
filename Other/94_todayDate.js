// Today Date

let dayMapping = {
  0: "sunday",
  1: "monday",
  2: "tuesday",
  3: "wednesday",
  4: "thursday",
  5: "friday",
  6: "saturday",
};

let monthMapping = {
  0: "january",
  1: "february",
  2: "march",
  3: "april",
  4: "may",
  5: "june",
  6: "july",
  7: "august",
  8: "september",
  9: "october",
  10: "november",
  11: "december",
};

let today = new Date();

console.log(today); // 2025-11-17T11:46:44.436Z
console.log(dayMapping[today.getDay()]);
console.log(monthMapping[today.getMonth()]);

console.log(today.toLocaleString("en-US", { weekday: "long" }));
console.log(today.toLocaleString("en-US", { month: "long" }));

console.log(today.toLocaleString("en-IN", { timeZone: "Asia/Kolkata" }));
