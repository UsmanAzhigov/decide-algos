/**
 *
 * Петя, Катя и Сережа делают из бумаги журавликов.
 * Вместе они сделали X журавликов. Сколько журавликов сделал каждый ребенок, если известно,
 * что Петя и Сережа сделали одинаковое количество журавликов,
 * а Катя сделала в два раза больше журавликов, чем Петя и Сережа вместе?
 *
 * Напишите функцию computeOrizurus(total) которая вычислит
 * сколько журавликов сделал каждый ребенок.
 *
 * Пример:
 *
 * computeOrizurus(6) === [1, 4, 1]
 * computeOrizurus(24) === [4, 16, 4]
 * computeOrizurus(60) === [10, 40, 10]
 *
 * @param {number} total общее количество сделанных журавликов
 * @returns {number[]} массив чисел, где первый элемент это количество журавликов сделанных Петей,
 * второй элемент – Катей, третий – Сережей
 */
function computeOrizurus(total) {
  const boy = total / 3;

  return [boy / 2, boy * 2, boy / 2];
}

console.log(computeOrizurus(6)),
  console.log(computeOrizurus(24)),
  console.log(computeOrizurus(60));

//  * computeOrizurus(6) === [1, 4, 1]
//  * computeOrizurus(24) === [4, 16, 4]
//  * computeOrizurus(60) === [10, 40, 10]
