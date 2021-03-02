import { step } from "./util";

function selectionSort(arr: Array<number>): [Array<number>, number] {
  let cnt: number = 0;

  for (let i: number = 0, len: number = arr.length; i < len; i++) {
    let index = i;
    for (let j: number = i + 1; j < len; j++) {
      if (arr[index] > arr[j]) {
        index = j;
      }
      cnt++;
    }
    [arr[i], arr[index]] = [arr[index], arr[i]];
    step(arr, i, index); //显示日志
    cnt++;
  }
  return [arr, cnt];
}

export { selectionSort };