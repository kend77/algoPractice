// --- Directions
// Implement bubbleSort, selectionSort, and mergeSort

function bubbleSort(arr) {
  let sorted = false
  for(let i = 0; i < arr.length && !sorted; i++) {
    sorted = true
    for(let j = 0; j < arr.length - i; j++) {
      if(arr[j] > arr[j + 1]) {
        sorted = false
        swap(arr, j, j + 1)
      }
    }
  }
  return arr
}

function swap(arr, i, j) {
  let temp = arr[i]
  arr[i] = arr[j]
  arr[j] = temp
}

function selectionSort(arr) {
  for(let i = 0; i < arr.length; i++) {
    let smallest = i
    for(let j = i + 1; j < arr.length; j++) {
      if(arr[j] < arr[smallest]) {
        smallest = j
      }
    }
    swap(arr, i, smallest)
  }
  return arr
}

function mergeSort(arr) {
  if(arr.length < 2) {
    return arr
  }
  let splits = split(arr)
  let left = splits[0]
  let right = splits[1]

  return merge(mergeSort(left), mergeSort(right))
}

function split(arr) {
  let middle = arr.length / 2
  let left = arr.slice(0, middle)
  let right = arr.slice(middle)
  return [left, right]
}

function merge(left, right) {
  let leftIdx = 0
  let rightIdx = 0
  let merged = []

  while(leftIdx < left.length && rightIdx < right.length) {
    if(left[leftIdx] < right[rightIdx]) {
      merged.push(left[leftIdx])
      leftIdx++
    }
    else {
      merged.push(right[rightIdx])
      rightIdx++
    }
  }

  for(; leftIdx < left.length; leftIdx++) merged.push(left[leftIdx])
  for(; rightIdx < right.length; rightIdx++) merged.push(right[rightIdx])

  return merged
}

module.exports = { bubbleSort, selectionSort, mergeSort, merge };
