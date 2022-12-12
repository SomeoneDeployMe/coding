// https://bigfrontend.dev/problem/implement-general-memoization-function
/**
 * @param {Function} func
 * @param {(args:[]) => string }  [resolver] - cache key generator
 */
function memo(func, resolver) {
  const cache = new Map();

  function memoized() {
    const cacheKey = resolver ? resolver(...arguments) : Array.from(arguments).join(',');

    if (cache.has(cacheKey)) {
      return cache.get(cacheKey);
    }

    const result = func.apply(this, arguments);

    cache.set(cacheKey, result);

    return result;
  }

  return memoized;
}

