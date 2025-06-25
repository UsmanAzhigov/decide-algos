// 1 балл
/**
 * Реализовать функцию compose, которая принимает
 * переменное количество функций и возвращает новую функцию.
 * Результат работы каждой функции передается в следующую.
 */

// Code here

const square = (x) => x * x;
const times2 = (x) => x * 2;
const sum = (a, b) => a + b;

const compose =
  (...funcs) =>
  (arg) =>
    funcs.reduceRight((acc, fn) => fn(acc), arg);

console.clear();
console.log(compose(square, times2)(2) === square(times2(2)));
console.log(compose(square, times2, sum)(3, 4) === square(times2(sum(3, 4))));
