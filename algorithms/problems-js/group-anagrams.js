class Solution {
  /**
   * @param {string[]} strs
   * @return {string[][]}
   */
  groupAnagrams(strs) {
    const map = new Map();

    for (let str of strs) {
      const sorted = str.split('').sort().join('');
      if (!map.has(sorted)) {
        map.set(sorted, []);
      }
      map.get(sorted).push(str);
    }

    return Array.from(map.values());
  }
}
const solution = new Solution();
console.log(solution.groupAnagrams(['eat', 'tea', 'tan', 'ate', 'nat', 'bat'])); // [['eat', 'tea', 'ate'], ['tan', 'nat'], ['bat']]
console.log(solution.groupAnagrams([''])); // [['']]
console.log(solution.groupAnagrams(['a'])); // [['a']]
console.log(solution.groupAnagrams(['abc', 'cba', 'bca', 'xyz', 'zyx'])); // [['abc', 'cba', 'bca'], ['xyz', 'zyx']]
