function bubbleSort(arr: Array<number>): [Array<number>, number] {
  let cnt: number = 0
  for (let i: number = arr.length - 1; i > 0; i--) {
    cnt++;
    for (let j: number = 0; j < i; j++) {
      cnt++;
      if (arr[j] > arr[j + 1]) {
        [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]]
      }
    }
  }
  return [arr, cnt]
}

window['bubbleSort'] = bubbleSort

