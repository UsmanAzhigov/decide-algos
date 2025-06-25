/**
 * Напишите функцию getPower(n) возвращающую целочисленное значение степени >= 0,
 * в которую нужно возвести двойку, чтобы получить n
 *
 * Пример:
 *
 * getPower(2) === 1            # 2^1 = 2
 * getPower(3) === undefined
 * getPower(256) === 8          # 2^8 = 256
 *
 * @param {number} n
 * @returns {number|undefined}
 */
function getPower(n) {
  let count = 0;
  while (n > 1) {
    if (n % 2 !== 0) return;
    n /= 2;
    count++;
  }
  return count;
}

console.log(getPower(2));
console.log(getPower(3));
console.log(getPower(256));
console.log(getPower(512));
