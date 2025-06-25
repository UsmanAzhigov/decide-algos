const unsortedArray: number[] = [32, 12, 45, 78, 34, 7, 23, 5, 62];

function quichSort(array: number[]): number[] {
  if (array.length <= 1) {
    return array;
  }

  let pivotIndex = Math.floor(array.length / 2);
  let pivot = array[pivotIndex] as number;

  let less = [];
  let greater = [];

  for (let i = 0; i < array.length; i++) {
    if (i === pivotIndex) continue;

    if (array[i] < pivot) {
      less.push(array[i]);
    } else {
      greater.push(array[i]);
    }
  }

  return [...quichSort(less), pivot, ...quichSort(greater)];
}

console.log(quichSort(unsortedArray));
