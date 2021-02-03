function quickSort(arr: Array<number>): Array<number> {
  let stack: Array<Array<number>> = []

  let l: number = 0
  let h: number = arr.length - 1

  stack.push([l, h])

  while (stack.length > 0) {
    let item: Array<number> = stack.pop()

    let low: number = item[0]
    let high: number = item[1]
    let middle: number = arr[low]

    while (low < high) {
      while (high > low && arr[high] >= middle) {
        high--
      }
      // [arr[low], arr[high]] = [arr[high], arr[low]]
      arr[low] = arr[high]

      while (low < high && arr[low] <= middle) {
        low++
      }
      // [arr[low], arr[high]] = [arr[high], arr[low]]
      arr[high] = arr[low]
    }
    arr[low] = middle;
    if (low > item[0]) {
      stack.push([item[0], low - 1])
    }
    if (low < item[1]) {
      stack.push([low + 1, item[1]])
    }
  }

  return arr
}

function quickSort2(arr: Array<number>, l: number, h: number): Array<number> {
  let low: number = l
  let high: number = h
  let middle: number = arr[low]

  while (low < high) {
    while (high > low && arr[high] >= middle) {
      high--
    }
    // [arr[low], arr[high]] = [arr[high], arr[low]]
    arr[low] = arr[high]

    while (low < high && arr[low] <= middle) {
      low++
    }
    // [arr[low], arr[high]] = [arr[high], arr[low]]
    arr[high] = arr[low]
  }
  arr[low] = middle;
  if (low > l) {
    quickSort2(arr, l, low - 1)
  }
  if (low < h) {
    quickSort2(arr, low + 1, h)
  }
  return arr
}

window['quickSort'] = quickSort
window['quickSort2'] = quickSort2