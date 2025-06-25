const numbers: number[] = [1, 3, 5, 7, 9, 11, 13, 15, 17, 19];

function binarySearch(numbers: number[], item: number): number {
  let start = 0;
  let end = numbers.length - 1;

  while (start <= end) {
    const mid = Math.floor((start + end) / 2);

    if (numbers[mid] === item) {
      return numbers[mid];
    }

    if (item < numbers[mid]) {
      end = mid - 1;
    } else {
      start = mid + 1;
    }
  }

  return -1;
}

console.log(binarySearch(numbers, 15));
