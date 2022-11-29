const inputArray = [1, 2, 3, [4, [5]]];

/**
 * Solution 1: the first naive solution
 */
function naiveFlattenRecursively(value) {
  if (value === null || value === undefined) {
    return value;
  }

  const result = [];

  for (const item of value) {
    if (Array.isArray(item)) {
      result.push(...naiveFlattenRecursively(item));
    } else {
      result.push(item);
    }
  }

  return result;
}

/**
 * Solution 2: iterative solution without recursion
 */
function flattenIteratively(value) {
  const result = [];
  const copy = [...value]; // or value.slice()

  while (copy.length) {
    const item = copy.shift();

    if (Array.isArray(item)) {
      copy.unshift(...item);
    } else {
      result.push(item);
    }
  }

  return result;
}

/**
 * Solution 3: recursive solution
 */
function flattenRecursively(value) {
  return value.reduce((acc, item) => acc.concat(Array.isArray(item) ? flattenRecursively(item) : item), [])
}

/**
 * Solution 4: Iterative in-place solution
 */
function flattenInPlace(value) {
  for (let i = 0; i < value.length;) {
    if (Array.isArray(value[i])) {
      value.splice(i, 1, ...value[i]);
    } else {
      i++;
    }
  }

  return value;
}

console.log(naiveFlattenRecursively(inputArray));
console.log(flattenIteratively(inputArray));
console.log(flattenRecursively(inputArray));
console.log(flattenInPlace(inputArray));
