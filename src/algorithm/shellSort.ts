function shellSort(arr: Array<number>): [Array<number>, number] {
  let cnt: number = 0
  let len = arr.length

  let gap = Math.floor(len / 2)
  while (gap > 0) {
    cnt++
    for (let i: number = gap; i < len; i++) {
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