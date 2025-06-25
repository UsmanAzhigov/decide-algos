/**
 * Самый простой способ зашифровать строку – сдвиг букв.
 * Под сдвигом понимается замена буквы на предыдущую в алфавите.
 * Если предыдущей буквы нет, она заменяется на последнюю букву алфавита (в этой задаче мы имеем дело с английским алфавитом).
 *
 * Вам прислали секретное сообщение, зашифрованное способом, описанным выше и состоящее из строчных английских букв.
 *
 * Напишите функцию decrypt(secret) которая расшифрует и вернет его.
 *
 * Пример:
 *
 * decrypt('bnqqdbs') === 'correct'
 * decrypt('zmc vd hfmnqd rozbdr') === 'and we ignore spaces'
 *
 * @param {string} secret
 * @returns {string}
 */

function decrypt(secret) {
  let hash = secret.split('');
  const alphabet = 'abcdefghijklmnopqrstuvwxyz'.split('');
  let result = [];
  console.log(hash);

  for (let i = 0; i < hash.length; i++) {
    if (hash[i] === ' ') {
      result.push(' ');
    }

    for (let j = 0; j < alphabet.length; j++) {
      if (hash[i] === alphabet[j]) {
        if (j === alphabet.length - 1) {
          result.push(alphabet[0]);
        } else {
          result.push(alphabet[j + 1]);
        }
      }
    }
  }
  return result.join('');
}
console.log(decrypt('bnqqdbs'));
console.log(decrypt('zmc vd hfmnqd rozbdr'));
