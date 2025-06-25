class Solution {
  /**
   * @param {string} s
   * @return {boolean}
   */
  isPalindrome(s) {
    return (
      s
        .toLowerCase()
        .replace(/[^a-z0-9]/g, '')
        .split('')
        .reverse()
        .join('') === s.toLowerCase().replace(/[^a-z0-9]/g, '')
    );
  }
}

const solution = new Solution();
console.log(solution.isPalindrome('Was it a car or a cat I saw?')); // true
console.log(solution.isPalindrome('tab a cat')); // falsr
