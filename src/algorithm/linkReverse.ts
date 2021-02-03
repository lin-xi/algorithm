function linkReverse() {
  let list: Link = new Link()
  let pre = list.head
  let cur = pre.next
  let next

  while (cur) {
    next = cur.next
    cur.next = pre
    pre = cur
    cur = next
  }

  list.head = pre
  return list
}

class Link {

  public head;


}



function Node() {
  this.head = null;
  this.next = null;
  this.value = null
}


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

export { linkReverse };