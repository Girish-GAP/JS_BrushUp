const convertTo24HrsFormat = (time) => {
  time = time.toLowerCase();
  let isPm = time.slice(time.length - 2) === "pm";
  let splitTime = time.split(":");
  let hour = parseInt(splitTime[0]);

  if (isPm) {
    if (hour !== 12) {
      hour = hour + 12;
    }
  } else {
    if (hour === 12) {
      hour = "00";
    }
  }

  let min = splitTime[1].slice(0, splitTime[1].indexOf("m") - 1);
  min = min.length === 1 ? "0" + min : min;
  hour = hour.toString().length === 1 ? "0" + hour : hour;

  return `${hour}:${min}`;
};

console.log(convertTo24HrsFormat("12:10AM")); // 00:10
console.log(convertTo24HrsFormat("5:00AM")); // 05:00
console.log(convertTo24HrsFormat("12:33PM")); // 12:33
console.log(convertTo24HrsFormat("01:59PM")); // 13:59
console.log(convertTo24HrsFormat("11:8PM")); // 23:08
console.log(convertTo24HrsFormat("10:02PM")); // 22:02
