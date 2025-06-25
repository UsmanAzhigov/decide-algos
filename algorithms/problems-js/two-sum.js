class Solution {
  /**
   * @param {number[]} nums
   * @param {number} target
   * @return {number[]}
   */
  twoSum(nums, target) {
    const result = [];

    for (let i = 0; i < nums.length; i++) {
      for (let j = i + 1; j < nums.length; j++) {
        if (nums[i] + nums[j] === target) {
          result.push(i, j);
          break;
        }
      }
    }
    return result;
  }
}

const solution = new Solution();
console.log(solution.twoSum([2, 7, 11, 15], 9)); // [2, 7]
console.log(solution.twoSum([3, 2, 4], 6)); // [2, 4]
console.log(solution.twoSum([3, 3], 6)); // [3, 3]
