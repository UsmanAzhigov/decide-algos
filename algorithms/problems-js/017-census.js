/**
 * В доме решили провести перепись всех жильцов и составили список,
 * в котором указали возраст и пол каждого жильца.
 *
 * Напишите функцию census(list) возвращающую номер в списке самого старшего жителя мужского пола.
 *
 * Пример:
 *
 * census([{ age: 12, gender: 'Male' }, { age: 40, gender: 'Male' }]) === 2
 * census([{ age: 40, gender: 'Female' }]) === undefined
 *
 * @param {{age: number, gender: string}[]} list
 * @returns {undefined|number}
 */
function census(list) {
  if (list.length === 1) return undefined;

  list.sort((a, b) => a.age - b.age);

  let maxAge = list[list.length - 1];

  return list.includes(maxAge) ? list.indexOf(maxAge) + 1 : undefined;
}

console.log(
  census([
    { age: 12, gender: 'Male' },
    { age: 40, gender: 'Male' },
  ]),
);
// 2
console.log(census([{ age: 40, gender: 'Female' }]));
