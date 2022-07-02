export function getMergeSortAnimations(array) {
  const animations = [];
  if (array.length <= 1) return array;
  const auxiliaryArray = array.slice();
  mergeSortHelper(array, 0, array.length - 1, auxiliaryArray, animations);
  for (let i = 0; i < array.length; i++) {
    console.log(array[i]);
  }
  return animations;
}

function mergeSortHelper(
  mainArray,
  startIdx,
  endIdx,
  auxiliaryArray,
  animations,
) {
  if (startIdx === endIdx) return;
  const middleIdx = Math.floor((startIdx + endIdx) / 2);
  mergeSortHelper(auxiliaryArray, startIdx, middleIdx, mainArray, animations);
  mergeSortHelper(auxiliaryArray, middleIdx + 1, endIdx, mainArray, animations);
  doMerge(mainArray, startIdx, middleIdx, endIdx, auxiliaryArray, animations);
}

function doMerge(
  mainArray,
  startIdx,
  middleIdx,
  endIdx,
  auxiliaryArray,
  animations,
) {
  let k = startIdx;
  let i = startIdx;
  let j = middleIdx + 1;
  while (i <= middleIdx && j <= endIdx) {
    // These are the values that we're comparing; we push them once
    // to change their color.
    animations.push([i, j]);
    // These are the values that we're comparing; we push them a second
    // time to revert their color.
    animations.push([i, j]);
    if (auxiliaryArray[i] <= auxiliaryArray[j]) {
      // We overwrite the value at index k in the original array with the
      // value at index i in the auxiliary array.
      animations.push([k, auxiliaryArray[i]]);
      mainArray[k++] = auxiliaryArray[i++];
    } else {
      // We overwrite the value at index k in the original array with the
      // value at index j in the auxiliary array.
      animations.push([k, auxiliaryArray[j]]);
      mainArray[k++] = auxiliaryArray[j++];
    }
  }
  while (i <= middleIdx) {
    // These are the values that we're comparing; we push them once
    // to change their color.
    animations.push([i, i]);
    // These are the values that we're comparing; we push them a second
    // time to revert their color.
    animations.push([i, i]);
    // We overwrite the value at index k in the original array with the
    // value at index i in the auxiliary array.
    animations.push([k, auxiliaryArray[i]]);
    mainArray[k++] = auxiliaryArray[i++];
  }
  while (j <= endIdx) {
    // These are the values that we're comparing; we push them once
    // to change their color.
    animations.push([j, j]);
    // These are the values that we're comparing; we push them a second
    // time to revert their color.
    animations.push([j, j]);
    // We overwrite the value at index k in the original array with the
    // value at index j in the auxiliary array.
    animations.push([k, auxiliaryArray[j]]);
    mainArray[k++] = auxiliaryArray[j++];
  }
}
// All original work from here and below
function swap(arr, val1, val2) {
  let temp = arr[val2];
  arr[val2] = arr[val1];
  arr[val1] = temp;
}
export function getQuickSortAnimations(array) {
  const animations = [];
  if (array.length <= 1) return array;
  doQuickSortLomuto(array, 0, array.length - 1, animations);
  return animations;
}
export function getQuickSortAnimations_2(array) {
  const animations = [];
  if (array.length <= 1) return array;
  doQuickSortHoare(array, 0, array.length - 1, animations);
  return animations;
}

function doQuickSortLomuto(array, lowIndex, highIndex, animations) {
  if (lowIndex < highIndex) {
    let pivot = partitionLomuto(array, lowIndex, highIndex, animations);
    doQuickSortLomuto(array, lowIndex, pivot - 1, animations);
    doQuickSortLomuto(array, pivot + 1, highIndex, animations);
  }
}
function doQuickSortHoare(array, lowIndex, highIndex, animations) {
  if (lowIndex < highIndex) {
    let pivot = partitionHoare(array, lowIndex, highIndex, animations);
    doQuickSortHoare(array, lowIndex, pivot, animations);
    doQuickSortHoare(array, pivot + 1, highIndex, animations);
  }
}

function partitionLomuto(array, lowIndex, highIndex, animations) {
  let i = lowIndex;
  let pivot = array[highIndex];
  for (let j = lowIndex; j <= highIndex - 1; j++) {
    animations.push([i, j, false]);
    animations.push([i, j, false]);
    if (array[j] <= pivot) {
      animations.push([i, array[j], true]);
      animations.push([j, array[i], true]);
      swap(array, i, j);
      i++;
    }
  }
  animations.push([i, highIndex, false]);
  animations.push([i, highIndex, false]);
  animations.push([i, array[highIndex], true]);
  animations.push([highIndex, array[i], true]);
  swap(array, i, highIndex);

  return i;

}

function partitionHoare(array, lowIndex, highIndex, animations) {
  let i = lowIndex - 1;
  let j = highIndex + 1;
  let pivot = array[lowIndex];
  while (true) {
    do {
      i++;
    } while (array[i] < pivot);

    do {
      j--;
    } while (array[j] > pivot);


    animations.push([i, j, false]);
    animations.push([i, j, false]);

    if (i >= j) {

      return j;
    }
    animations.push([i, array[j], true]);
    animations.push([j, array[i], true]);
    swap(array, i, j);
    console.log(array)
  }


}



export function getHeapSortAnimations(array) {
  const animations = [];
  if (array.length <= 1) return array;
  let size = array.length;
  doHeapSort(array, size, animations);
  return animations;
}
//Recursive heapify function. We call until we find the root of the array
function heapify(array, size, i, animations) {
  let root = i;
  let left = 2 * i + 1;
  let right = 2 * i + 2;
  if (left < size && array[left] > array[root]) {
    animations.push([root, left, false]);
    animations.push([root, left, false]);
    root = left;
  }
  if (right < size && array[right] > array[root]) {
    animations.push([root, right, false]);
    animations.push([root, right, false]);
    root = right;
  }
  //Root has changed because i was not the root
  if (root !== i) {
    animations.push([root, array[i], true]);
    animations.push([i, array[root], true]);
    //If root is not i, then swap the values, call heapify recursively
    swap(array, root, i);
    heapify(array, size, root, animations);
  }
}
function doHeapSort(array, size, animations) {
  // Create max heap
  for (let i = (size / 2) - 1; i >= 0; i--) {
    heapify(array, size, i, animations);
  }
  // Now do the actual heap sort
  for (let i = size - 1; i >= 0; i--) {
    animations.push([i, array[0], true]);
    animations.push([0, array[i], true]);
    swap(array, i, 0);
    heapify(array, i, 0, animations);
  }
}
export function getBubbleSortAnimations(array) {
  const animations = [];
  if (array.length <= 1) return array;
  let size = array.length;
  doBubbleSort(array, size, animations);
  return animations;
}
function doBubbleSort(array, size, animations) {
  for (let i = 0; i < size - 1; i++) {
    for (let k = 0; k < size - (i + 1); k++) {
      animations.push([i, k, false]);
      animations.push([i, k, false]);
      if (array[k] > array[k + 1]) {
        animations.push([k, array[k + 1], true]);
        animations.push([k + 1, array[k], true]);
        swap(array, k, k + 1);
      }
    }
  }
}


export function getSelectionSortAnimations(array) {
  const animations = [];
  if (array.length <= 1) return array;
  let size = array.length;
  doSelectionSort(array, size, animations);
  return animations;
}

function doSelectionSort(array, size, animations) {
  var i, j, min_idx;

  // One by one move boundary of unsorted subarray
  for (i = 0; i < size - 1; i++) {
    // Find the minimum element in unsorted array
    min_idx = i;
    for (j = i + 1; j < size; j++) {
      animations.push([i, j, false]);
      animations.push([i, j, false]);
      if (array[j] < array[min_idx]) {
        animations.push([min_idx, j, false]);
        animations.push([min_idx, j, false]);
        min_idx = j;
      }
    }
    // Swap the found minimum element with the first element
    animations.push([min_idx, array[i], true]);
    animations.push([i, array[min_idx], true]);
    swap(array, min_idx, i);
  }
}

export function getInsertionSortAnimations(array) {
  const animations = [];
  if (array.length <= 1) return array;
  let size = array.length;
  doInsertionSort(array, size, animations);
  return animations;
}
function doInsertionSort(array, size, animations) {
  let i, key, j;
  for (i = 1; i < size; i++) {
    key = array[i];
    j = i - 1;

    /* Move elements of arr[0..i-1], that are 
    greater than key, to one position ahead 
    of their current position */

    while (j >= 0 && array[j] > key) {
      animations.push([j, j + 1, false]);
      animations.push([j, j + 1, false]);

      array[j + 1] = array[j];
      animations.push([j, array[j + 1], true]);
      animations.push([j + 1, array[j], true]);
      j = j - 1;

    }
    array[j + 1] = key;
  }
}

export function getRadixSortAnimations(array) {
  const animations = [];
  if (array.length <= 1) return array;
  let size = array.length;
  doRadixSort(array, size, animations);
  return animations;
}

function getMax(arr, n) {
  let mx = arr[0];
  for (let i = 1; i < n; i++)
    if (arr[i] > mx)
      mx = arr[i];
  return mx;
}

// A function to do counting sort of arr[] according to
// the digit represented by exp.
function countSort(arr, n, exp, animations) {
  let output = new Array(n); // output array
  let i;
  let count = new Array(10);
  for (let i = 0; i < 10; i++)
    count[i] = 0;

  // Store count of occurrences in count[]
  for (i = 0; i < n; i++) {
    animations.push(["1", i]);
    animations.push(["2", i]);
    count[Math.floor(arr[i] / exp) % 10]++;
  }


  // Change count[i] so that count[i] now contains
  // actual position of this digit in output[]
  for (i = 1; i < 10; i++)
    count[i] += count[i - 1];

  // Build the output array
  for (i = n - 1; i >= 0; i--) {
    animations.push(["1", i]);
    animations.push(["2", i]);
    animations.push(["3", count[Math.floor(arr[i] / exp) % 10] - 1, arr[i]]);
    output[count[Math.floor(arr[i] / exp) % 10] - 1] = arr[i];
    count[Math.floor(arr[i] / exp) % 10]--;
  }

  // Copy the output array to arr[], so that arr[] now
  // contains sorted numbers according to current digit
  for (i = 0; i < n; i++)
    arr[i] = output[i];
}

// The main function to that sorts arr[] of size n using
// Radix Sort
function doRadixSort(arr, n, animations) {
  // Find the maximum number to know number of digits
  let m = getMax(arr, n);

  // Do counting sort for every digit. Note that
  // instead of passing digit number, exp is passed.
  // exp is 10^i where i is current digit number
  for (let exp = 1; Math.floor(m / exp) > 0; exp *= 10)
    countSort(arr, n, exp, animations);
}
