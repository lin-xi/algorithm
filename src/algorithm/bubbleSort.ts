
import { step } from "./util";

function bubbleSort(arr: Array<number>): [Array<number>, number] {
  let cnt: number = 0
  for (let i: number = arr.length - 1; i > 0; i--) {
    for (let j: number = 0; j < i; j++) {
      if (arr[j] > arr[j + 1]) {
        [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
        step(arr, j, j + 1); //显示日志
      }
      cnt++;
    }
    cnt++;
  }
  return [arr, cnt];
}

export { bubbleSort };