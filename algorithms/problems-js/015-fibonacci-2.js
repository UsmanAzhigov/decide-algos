/**
 * С числами Фибоначчи мы уже познакомились в прошлой задаче.
 *
 * Напишите функцию isFibonacci(value) которая определяет, является ли value числом Фибоначчи.
 *
 * Пример:
 *
 * isFibonacci(1) === 1
 * isFibonacci(2) === 3
 * isFibonacci(55) === 10
 * isFibonacci(52) === undefined
 *
 * @param {number} value
 * @returns {undefined|number}
 */
function isFibonacci(value) {
  if (value < 0) return false;

  function isPerfectSquare(x) {
    const s = Math.sqrt(x);
    return Number.isInteger(s);
  }

  return (
    isPerfectSquare(5 * value * value + 4) ||
    isPerfectSquare(5 * value * value - 4)
  );
} // делал не я

console.log(isFibonacci(1));
console.log(isFibonacci(2));
console.log(isFibonacci(55));
