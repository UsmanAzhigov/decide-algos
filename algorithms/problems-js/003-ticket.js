/**
 * Счастливым билетом называют такой билет с шестизначным номером,
 * где сумма первых трех цифр равна сумме последних трех.
 *
 * Напишите функцию checkTicket(number) которая проверяет счастливость билета.
 *
 * Пример:
 *
 * checkTicket('005212') === true
 * checkTicket('133700') === true
 * checkTicket('123032') === false
 *
 * @param {string} number
 * @returns {boolean}
 */
function checkTicket(number) {
  let result1 = number.slice(0, 3).toString().split('');
  let result2 = number.slice(3).toString().split('');
  return (
    Number(result1[0]) + Number(result1[1]) + Number(result1[2]) ===
    Number(result2[0]) + Number(result2[1]) + Number(result2[2])
  );
}

// Решение гпт
// function checkTicket(number) {
//   if (number.length !== 6 || !/^\d{6}$/.test(number)) return false;

//   const digits = number.split('').map(Number);
//   const sumFirstHalf = digits.slice(0, 3).reduce((sum, n) => sum + n, 0);
//   const sumSecondHalf = digits.slice(3).reduce((sum, n) => sum + n, 0);

//   return sumFirstHalf === sumSecondHalf;
// }

console.log(checkTicket('005212'));
console.log(checkTicket('133700'));
console.log(checkTicket('123032'));
