class Solution {
  /**
   * @param {number[]} nums
   * @return {boolean}
   */
  hasDuplicate(nums) {
    let newArr = new Set();

    for (let num of nums) {
      if (newArr.has(num)) {
        return true;
      }

      newArr.add(num);
    }
    return false;
  }
}

const solution = new Solution();
console.log(solution.hasDuplicate([1, 2, 3, 4])); // false
console.log(solution.hasDuplicate([1, 2, 3, 4, 4])); // true
