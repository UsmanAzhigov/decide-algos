export function getCompressedString(text) {
  const wordPattern = /[\p{L}\p{N}_]+|[.,!?]|\s+/gu;
  const wordKeyPattern = /^[\p{L}\p{N}_]+$/u;

  const freq = new Map();
  const order = [];
  const tokens = [];

  let match;
  while ((match = wordPattern.exec(text)) !== null) {
    const token = match[0];
    if (wordKeyPattern.test(token)) {
      const key = token.toLowerCase();
      freq.set(key, (freq.get(key) || 0) + 1);
      if (!order.includes(key)) order.push(key);
      tokens.push({ type: 'word', value: token, key });
    } else {
      tokens.push({ type: 'other', value: token });
    }
  }

  const sortedWords = [...freq.entries()]
    .sort((a, b) => {
      if (b[1] !== a[1]) return b[1] - a[1];
      return order.indexOf(a[0]) - order.indexOf(b[0]);
    })
    .map(([word]) => word);

  const wordToIndex = new Map();
  sortedWords.forEach((word, index) => {
    wordToIndex.set(word, index);
  });

  return tokens
    .map((t) =>
      t.type === 'word' ? wordToIndex.get(t.key).toString() : t.value,
    )
    .join('');
}

function test() {
  const res1 =
    getCompressedString('Hello my name is Vitaliy! And what is your name?') ===
    '2 3 0 1 4! 5 6 1 7 0?';
  const res2 = getCompressedString('пр!и!вет!') === '0!1!2!';
  const res3 =
    getCompressedString('Привет, привет, привет...') === '0, 0, 0...';
  const res4 = getCompressedString('abc123 abc abc123 ABC123') === '0 1 0 0';
  const res5 =
    getCompressedString(
      'Привет, как у тебя дела?\nДа, вроде, хорошо, а у тебя?',
    ) === '2, 3 0 1 4?\n5, 6, 7, 8 0 1?';
  const res6 = getCompressedString('A B C D a b c d') === '0 1 2 3 0 1 2 3';
  const res7 = getCompressedString('1word 2word word1 word_2') === '0 1 2 3';
  const res8 =
    getCompressedString('    Multiple     spaces   stay  intact ') ===
    '    0     1   2  3 ';
  const res9 =
    getCompressedString('One! Two? Three. One, one.') === '0! 1? 2. 0, 0.';
  const res10 = getCompressedString('') === '';
  return (
    res1 &&
    res2 &&
    res3 &&
    res4 &&
    res5 &&
    res6 &&
    res7 &&
    res8 &&
    res9 &&
    res10
  );
}

console.log(test() ? '✅ All tests passed' : '❌ Some tests failed');
