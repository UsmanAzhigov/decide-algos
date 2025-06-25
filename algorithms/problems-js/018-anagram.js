/**
 * Слова-анаграммы — это слова, записанные одними и теми же буквами в разном порядке,
 * регистр букв при этом игнорируется.
 * Анаграммами, например, являются слова «Волос» и «СЛОВО».
 *
 * Напишите функцию anagram(x, y) проверяющую, являются ли x и y словами-анаграммами.
 *
 * Пример:
 *
 * anagram('Волос', 'Слово') === true
 * anagram('Живу', 'Вижу') === true
 *
 * @param {string} x
 * @param {string} y
 * @returns {boolean}
 */
function anagram(x, y) {
  return (
    x.toLowerCase().split('').sort().join('') ===
    y.toLowerCase().split('').sort().join('')
  );
}

console.log(anagram('Волос', 'Слово')); // true
console.log(anagram('Живу', 'Вижу')); // true
console.log(anagram('Привет', 'Тевир')); // false
