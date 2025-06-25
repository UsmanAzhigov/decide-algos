const unsortedArray: number[] = [34, 7, 23, 32, 5, 62, 32, 12, 45, 78];
let count = 0;

/**
 * @param {number[]} arr
 * @return {number[]}
 *
 * O(n^2)
 *
 * bubble sort
 */

function bubbleSort(arr: number[]): number[] {
  for (let i = 0; i < arr.length; i++) {
    // Первая фаза сортировки заключается в том, что бы поставить самый большой элемент в конец
    count++;
    for (let j = 0; j < arr.length; j++) {
      if (arr[j] > arr[j + 1]) {
        const temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
      }
    }
  }
  return arr;
}

console.log(bubbleSort(unsortedArray), count);
