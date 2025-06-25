/**
 * Напишите функцию sortTimestamps(list) сортирующую список временных моментов.
 *
 * Пример:
 *
 * sortTimestamps(['23:02:59', '02:07:00']) === ['02:07:00', '23:02:59']
 *
 * @param {string[]} list массив временных моментов представленных в виде строк в формате 'HH:MM:SS'
 * @returns {string[]} отсортированный по возрастанию массив временных моментов
 */
function sortTimestamps(list) {
  return list.sort((a, b) => {
    const [h1, m1, s1] = a.split(':').map(Number);
    const [h2, m2, s2] = b.split(':').map(Number);

    if (h1 !== h2) return h1 - h2;
    if (m1 !== m2) return m1 - m2;
    return s1 - s2;
  });
}

console.log(sortTimestamps(['23:02:59', '02:07:00'])); // ['02:07:00', '23:02:59']
console.log(sortTimestamps(['12:00:00', '11:59:59', '12:00:01'])); // ['11:59:59', '12:00:00', '12:00:01']
console.log(sortTimestamps(['00:00:00', '23:59:59', '12:30:30'])); // ['00:00:00', '12:30:30', '23:59:59']
console.log(sortTimestamps(['01:01:01', '01:01:00', '01:01:02'])); // ['01:01:00', '01:01:01', '01:01:02']
