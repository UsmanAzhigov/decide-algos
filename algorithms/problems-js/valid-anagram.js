class Solution {
  /**
   * @param {string} s
   * @param {string} t
   * @return {boolean}
   */
  isAnagram(s, t) {
    const splitS = s
      .split('')
      .sort((a, b) => a.localeCompare(b))
      .join('');
    const splitT = t
      .split('')
      .sort((a, b) => a.localeCompare(b))
      .join('');

    return splitS === splitT;
  }
}

const solution = new Solution();
console.log(solution.isAnagram('anagram', 'nagaram')); // true
console.log(solution.isAnagram('rat', 'car')); // false
console.log(solution.isAnagram('listen', 'silent')); // true
