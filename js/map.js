// https://www.greatfrontend.com/questions/javascript/array-map
/**
 * @callback callbackFn
 * @param {object} [thisArg]
 * @return {Array}
 */
Array.prototype.myMap = function (callbackFn, thisArg) {
  const length = this.length;
  const result = new Array(length);

  for (let i = 0; i < length; i++) {
    if (Object.prototype.hasOwnProperty.call(this, i)) {
      result[i] = callbackFn.call(thisArg, this[i], i, this);
    }
  }

  return result;
};
