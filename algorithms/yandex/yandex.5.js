// 1 балл алгоритмы

// Вам задана строка , состоящая из латинских букв, пробелов и знаков препинания.
// Строка называется панграммой, если она содержит каждую из 26 латинских
// букв хотя бы раз. Определите является ли строка  панграммой.
const LETTERS = [
  'A',
  'B',
  'C',
  'D',
  'E',
  'F',
  'G',
  'H',
  'I',
  'J',
  'K',
  'L',
  'M',
  'N',
  'O',
  'P',
  'Q',
  'R',
  'S',
  'T',
  'U',
  'V',
  'W',
  'X',
  'Y',
  'Z',
];

function isPangram(text) {
  text = text.toUpperCase();
  let uniqueLetters = new Set();

  for (let char of text) {
    if (LETTERS.includes(char)) {
      uniqueLetters.add(char);
    }
  }

  console.log(LETTERS.length);

  return uniqueLetters.size === LETTERS.length;
}

console.log(
  isPangram(`A pangram or holoalphabetic sentence is a sentence
using every letter of a given alphabet at least once.`),
); // => false

console.log(isPangram('Waltz, bad nymph, for quick jigs vex.')); // => true
