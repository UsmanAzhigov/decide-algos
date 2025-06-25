class Solution {
  /**
   * @param {number[]} nums
   * @return {number[]}
   */
  productExceptSelf(nums) {
    const result = [];

    for (let i = 0; i < nums.length; i++) {
      const product = nums
        .filter((_, idx) => idx !== i)
        .reduce((acc, num) => {
          if (num === 0) {
            return 0;
          }
          return acc * num;
        }, 1);
      result.push(product);
    }

    return result;
  }
}
const solution = new Solution();
console.log(solution.productExceptSelf([1, 2, 4, 6])); // [48,24,12,8]
console.log(solution.productExceptSelf([-1, 0, 1, 2, 3])); // [0,-6,0,0,0]
