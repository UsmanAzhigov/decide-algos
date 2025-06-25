// 1;

/**
 * Нужно написать каррирование,
 * и предусмотреть что кол-во аргументов может быть неограниченно.
 */

function curry(fn) {
  return function curried(...args) {
    if (args.length >= fn.length) {
      return fn.apply(this, args);
    } else {
      return (...nextArgs) => curried(...args, ...nextArgs);
    }
  };
}

function multiply(a, b, c) {
  return a * b * c;
}

console.log(curry(multiply)(2, 3, 4)); // 24
console.log(curry(multiply)(2, 3)(4)); // 24
console.log(curry(multiply)(2)(3)(4)); // 24
