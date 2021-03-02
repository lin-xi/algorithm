import { step } from "./util";

function insertSort(arr: Array<number>): [Array<number>, number] {
  let cnt: number = 0

  for (let i: number = 1; i < arr.length; i++) {
    if (arr[i] < arr[i - 1]) {
      let index = 0;
      for (let j = i - 1; j >= 0; j--) {
        cnt++;
        if (arr[j] < arr[i]) {
          index = j + 1;
          break;
        }
      }
      step(arr, index, i);
      const ele = arr.splice(i, 1)
      arr.splice(index, 0, ele[0]);
    }
  }
  return [arr, cnt]
}

export { insertSort };