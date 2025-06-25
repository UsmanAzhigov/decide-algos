class Solution {
  /**
   * @param {number[]} nums
   * @return {number[][]}
   */
  threeSum(nums) {
    let result = [];

    for (let i = 0; i < nums.length; i++) {
      for (let j = i + 1; j < nums.length; j++) {
        for (let k = j + 1; k < nums.length; k++) {
          if (nums[i] + nums[j] + nums[k] === 0) {
            result.push([nums[i], nums[j], nums[k]].sort((a, b) => a - b));
          }
        }
      }
    }

    const resultFilter = result.filter((arr, index) => {
      return (
        index ===
        result.findIndex((a) => JSON.stringify(a) === JSON.stringify(arr))
      );
    });

    return resultFilter.reverse();
  }
}

const solution = new Solution();
console.log(solution.threeSum([-1, 0, 1, 2, -1, -4])); // [[-1, -1, 2], [-1, 0, 1]]
console.log(solution.threeSum([0, 1, 1])); // []
console.log(solution.threeSum([0, 0, 0])); // [[0, 0, 0]]
