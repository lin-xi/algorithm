function mergeSort(arr: Array<number>): [Array<number>, number] {
  let cnt: number = 0
  let len = arr.length
  let gap = 1;

  while (gap < len) {
    cnt++
    for (let i: number = 0; i < len; i += 2 * gap) {
      cnt++
      for (let left: number = i; left < i + gap; left++) {
        let right = i + gap
        cnt++
        if (arr[left] > arr[right]) {
          [arr[left], arr[right]] = [arr[right], arr[left]]
          let m: number = right
          while (m < right + gap - 1 && arr[m] > arr[m + 1]) {
            cnt++
            [arr[m], arr[m + 1]] = [arr[m + 1], arr[m]]
            m++
          }
        }
      }
    }
    gap *= 2
  }

  return [arr, cnt]
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

function merge(left: Array<number>, right: Array<number>) {
  let result: Array<number> = []
  let i: number = 0;
  let j: number = 0;
  while (left.length > 0 && right.length > 0) {
    if (left[0] < right[0]) {
      result.push(left.shift())
    } else {
      result.push(right.shift())
    }
  }
  return result.concat(left).concat(right)
}

window['mergeSort'] = mergeSort
window['mergeSort2'] = mergeSort2