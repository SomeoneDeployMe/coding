function curry(fn) {
  return function curried(...args) {
    if (fn.length > args.length) {
      /* we are using .bind() here because we want "this" to work properly and making next calls with preserved arguments
      from previous calls*/
      return curried.bind(this, ...args);
    }

    return fn.apply(this, args);
  }
}

function multiple(a, b) {
  return a * b;
}

console.log(curry(multiple)(2)(7));
