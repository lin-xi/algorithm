function cocktailSort(arr: Array<number>): [Array<number>, number] {
  let cnt: number = 0
  let start = 0;
  for (let i: number = arr.length - 1; i > start; i--) {
    cnt++;
    for (let j: number = start; j < i; j++) {
      cnt++
      if (arr[j] > arr[j + 1]) {
        [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]]
      }
    }
    for (let k: number = i - 1; k > start; k--) {
      cnt++
      if (arr[k] < arr[k - 1]) {
        [arr[k], arr[k - 1]] = [arr[k - 1], arr[k]]
      }
    }
    start++;
  }
  return [arr, cnt]
}

export { cocktailSort };