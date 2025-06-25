/**
 * Напишите функцию getTimeDelta(x, y) определяющую,
 * сколько секунд прошло между двумя моментами времени x и y.
 *
 * Время передается в формате 'HH:MM:SS'. Минимальное значение – '00:00:00', максимальное – '23:59:59'.
 *
 * По условию x всегда меньше y.
 *
 * Пример:
 *
 * getTimeDelta('00:00:00', '00:00:01') === 1
 * getTimeDelta('01:01:01', '02:02:02') === 3661
 * getTimeDelta('01:19:30', '01:20:20') === 50
 *
 * @param {string} x
 * @param {string} y
 * @returns {number} разница между x и y в секундах
 */
function getTimeDelta(x, y) {
  const [h1, m1, s1] = x.split(':').map(Number);
  const [h2, m2, s2] = y.split(':').map(Number);

  const timeInSecondsX = h1 * 3600 + m1 * 60 + s1;
  const timeInSecondsY = h2 * 3600 + m2 * 60 + s2;

  return timeInSecondsY - timeInSecondsX;
}

console.log(getTimeDelta('00:00:00', '00:00:01'));
console.log(getTimeDelta('01:01:01', '02:02:02'));
console.log(getTimeDelta('01:19:30', '01:20:20'));
