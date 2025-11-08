// Write a switch statement code in JavaScript?

const getFramework = (lang) => {
  switch (lang) {
    case "js":
      return "Nodejs, React";
      break;

    case "py":
      return "Django, FastAPI";
      break;

    case "java":
      return "Sprint boot";
      break;

    default:
      return "no data set for " + (lang || "this");
  }
};

console.log(getFramework("java"));
