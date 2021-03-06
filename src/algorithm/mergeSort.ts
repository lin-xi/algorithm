import { step } from "./util";

function mergeSort(arr: Array<number>): [Array<number>, number] {
  return [mergeArray(arr), 0];
}

function mergeArray(arr: Array<number>): Array<number> {
  if (arr.length == 1) {
    return arr;
  } else {
    let middle = Math.floor(arr.length / 2);
    let left = arr.slice(0, middle);
    let right = arr.slice(middle);
    step(arr, middle);
    return merge(mergeArray(left), mergeArray(right));
  }
}

function merge(left: Array<number>, right: Array<number>): Array<number> {
  let i = 0;
  let j = 0;
  let temp: Array<number> = [];
  while (i < left.length && j < right.length) {
    if (left[i] < right[j]) {
      temp.push(left[i]);
      i++;
    } else {
      temp.push(right[j]);
      j++;
    }
  }
  for (let m = i; m < left.length; m++) {
    temp.push(left[m]);
  }
  for (let n = j; n < right.length; n++) {
    temp.push(right[n]);
  }
  return temp;
}

function mergeSort2(arr: Array<number>): Array<number> {
  let cnt: number = 0
  let result: Array<number> = []

  if (arr.length < 2) {
    return arr
  } else {
    let middle = Math.floor(arr.length / 2)
    let left: Array<number> = arr.slice(0, middle)
    let right: Array<number> = arr.slice(middle)
    result = merge(mergeSort2(left), mergeSort2(right))
    console.log(result)
    return result
  }
}

export { mergeSort }