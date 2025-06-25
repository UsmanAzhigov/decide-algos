class Solution {
  /**
   * @param {number[]} nums
   * @param {number} k
   * @return {number[]}
   */
  topKFrequent(nums, k) {
    let count = 0;
    let result = [];

    for (let i = 0; i < nums.length; i++) {
      if (nums[i] === nums[i + 1]) {
        result.push(nums[i]);
        count = 0;
      } else {
        if (count === k) {
          return result;
        }
        count++;
      }
    }
    return result
      .filter((item, index) => {
        return result.indexOf(item) === index;
      })
      .slice(0, k);
  }
}

const solution = new Solution();
console.log(solution.topKFrequent([1, 1, 1, 2, 2, 3], 2)); // [1, 2]
console.log(solution.topKFrequent([1, 1], 1)); // [1]
