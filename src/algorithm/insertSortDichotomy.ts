function insertSortDichotomy(arr: Array<number>): [Array<number>, number] {
  let cnt: number = 0

  for (let i: number = 1, len: number = arr.length; i < len; i++) {
    cnt++
    let start: number = 0
    let end: number = i - 1
    while (start <= end) {
      cnt++
      let middle = Math.floor((start + end) / 2)
      if (arr[middle] < arr[i]) {
        start = middle + 1
      } else {
        end = middle - 1
      }
    }
    let ele = arr.splice(i, 1)
    arr.splice(start, 0, ele[0])
  }
  return [arr, cnt]
}

export { insertSortDichotomy };