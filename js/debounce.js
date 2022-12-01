function debounce(fn, wait) {
  let timeoutId;

  // We mustn't return arrow function here because of how it binds its context
  return function(...args) {
    const context = this; // context may be lost if we pass arrow function instead a traditional function to setTimeout
    clearTimeout(timeoutId);

    timeoutId = setTimeout(() => {
      fn.apply(context, args);
    }, wait);
  }
}
