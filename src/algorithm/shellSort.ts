import { step } from "./util";

function shellSort(arr: Array<number>): [Array<number>, number] {
  let cnt: number = 0;
  let len = arr.length;
  for (let gap = Math.ceil(arr.length / 2); gap >= 1; gap = (gap == 1 ? 0 : Math.ceil(gap / 2))) {
    for (let i: number = 0; i < gap; i++) {
      for (let j: number = i; j < len - gap; j += gap) {
        cnt++
        let next = j + gap;
        if (arr[j] > arr[next]) {
          step(arr, j, next);
          [arr[j], arr[next]] = [arr[next], arr[j]]
        }
      }
    }
  }
  return [arr, cnt]
}

export { shellSort };