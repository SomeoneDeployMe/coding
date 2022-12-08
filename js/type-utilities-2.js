// https://www.greatfrontend.com/questions/javascript/type-utilities-ii
export function isArray(value) {
  return Array.isArray(value);
}

export function isFunction(value) {
  return typeof value === 'function';
}

export function isObject(value) {
  return typeof value === 'object' && value != null;
}

export function isPlainObject(value) {
  if (value == null) {
    return false;
  }

  return Object.getPrototypeOf(value) === null || Object.getPrototypeOf(value).constructor === Object;
}
