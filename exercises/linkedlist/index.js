// --- Directions
// Implement classes Node and Linked Lists
// See 'directions' document

class Node {
  constructor(data, next) {
    this.data = data
    this.next = next || null
  }
}

class LinkedList {
  constructor() {
    this.head = null
  }

  insertFirst(data) {
    const newNode = new Node(data)
    if(!this.head) {
      this.head = newNode
    } else {
      newNode.next = this.head
      this.head = newNode
    }
  }

  size() {
    let currentNode = this.head
    let size = 0
    while(currentNode !== null) {
      size++
      currentNode = currentNode.next
    }
    return size
  }

  getFirst() {
    return this.head
  }

  getLast() {
    let currentNode = this.head
    if(this.head === null) return null
    while(currentNode.next !== null) {
      currentNode = currentNode.next
    }
    return currentNode
  }

  clear() {
    this.head = null
  }

  removeFirst() {
    let first = this.head
    this.head = this.head.next
    return first
  }

  removeLast() {
    const size = this.size()
    if(size <= 1) {
      this.head = null
    } else {
    let currentNode = this.head
    let currentSize = 1
    while(currentSize < size - 1) {
      currentSize++
      currentNode = currentNode.next
    }
    currentNode.next = null
    }
  }

  insertLast(data) {
    const newNode = new Node(data)
    if(!this.head) {
      this.head = newNode
    } else {
    const last = this.getLast()
    last.next = newNode
    }
  }

  getAt(index) {
    if(index > this.size() - 1) {
      return null
    }
    let currentIdx = 0
    let currentNode = this.head
    while(currentIdx < index) {
      currentIdx++
      currentNode = currentNode.next
    }
    return currentNode
  }

  removeAt(index) {
    if(index > this.size() - 1) {
      return null
    }
    if(index === 0) {
      this.head = this.head.next
    } else {
    const nodeBefore = this.getAt(index - 1)
    nodeBefore.next = nodeBefore.next.next
    }
  }

  forEach(fn) {
    let currentNode = this.head
    while(currentNode !== null) {
      fn(currentNode)
      currentNode = currentNode.next
    }
  }
}

module.exports = { Node, LinkedList };
