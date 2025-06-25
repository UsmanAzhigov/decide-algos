class Solution {
  /**
   * @param {number[]} nums
   * @param {number} trg
   * @return {number[]}
   */
  twoSum(nums, trg) {
    const result = [];

    for (let i = 0; i < nums.length; i++) {
      for (let j = i + 1; j < nums.length; j++) {
        if (
          nums[i] + nums[j] === trg &&
          nums[i] !== nums[j] &&
          nums[i] < nums[j]
        ) {
          result.push(nums[i], nums[j]);
          break;
        }
      }
    }
    return result;
  }
}

const solution = new Solution();
console.log(solution.twoSum([1, 2, 3, 4], 3)); // [0, 1]
console.log(solution.twoSum([3, 2, 4], 6)); // [1, 2]
console.log(solution.twoSum([3, 3], 6)); // [3, 3]
