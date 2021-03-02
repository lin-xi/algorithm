function shellSort(arr: Array<number>): [Array<number>, number] {
  let cnt: number = 0;
  let len = arr.length;

  let gap = Math.floor(arr.length / 2)
  while (gap > 0) {
    for (let i: number = 0; i < gap; i++) {
      cnt++

      let j = i;
      while (j >= 0 && arr[j] < arr[j - 1]) {
        cnt++
        [arr[j], arr[j - 1]] = [arr[j - 1], arr[j]]
        j -= gap
      }
    }
    gap = Math.floor(gap / 2)
  }
  return [arr, cnt]
}

window['shellSort'] = shellSort