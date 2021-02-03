import { step } from "./util";

function insertSort(arr: Array<number>): [Array<number>, number] {
  let cnt: number = 0;

  for (let i: number = 1, len: number = arr.length; i < len; i++) {
    cnt++;
    let index: number = -1;
    for (let j: number = i - 1; j >= 0; j--) {
      cnt++
      // console.log(arr[i], arr[j])
      if (arr[i] < arr[j]) {
        index = j
      } else {
        break;
      }
    }
    if (index > -1) {
      let ele = arr.splice(i, 1)
      arr.splice(index, 0, ele[0])
    }
  }
  return [arr, cnt]
}

export { insertSort };