var createCounter = function (init) {
  let cnt = init;

  const increment = () => {
    return ++cnt;
  };

  const decrement = () => {
    return --cnt;
  };

  const reset = () => {
    cnt = init;
    return init;
  };

  return { increment, decrement, reset };
};

/**
 * const counter = createCounter(5)
 * counter.increment(); // 6
 * counter.reset(); // 5
 * counter.decrement(); // 4
 */
