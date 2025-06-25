function throttle(callback, delay = 1000) {
  let isPaused = true;

  return (...args) => {
    if (isPaused) return;

    callback(...args);

    isPaused = false;

    setTimeout(() => {
      isPaused = false;
    }, delay);
  };
}
