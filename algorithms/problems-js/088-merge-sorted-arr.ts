/**
 Do not return anything, modify nums1 in-place instead.
 */
function merge(nums1: number[], m: number, nums2: number[], n: number): void {
  const numSlice1 = nums1.slice(0, m);
  const numSlice2 = nums2.slice(0, n);

  const merged = [...numSlice1, ...numSlice2].sort((a, b) => a - b);
  for (let i = 0; i < merged.length; i++) {
    nums1[i] = merged[i];
  }
}

const nums1 = [1, 2, 3, 0, 0, 0];
const m = 3;
const nums2 = [2, 5, 6];
const n = 3;
console.log(merge(nums1, m, nums2, n));
