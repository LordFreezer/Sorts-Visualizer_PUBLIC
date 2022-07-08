# Sorting Visualizer by Chad Marshall
https://sorts.netlify.app/

## About The Project
Inspired by [Clément Mihailescu](https://github.com/clementmihailescu), I set out to create my own sorting algorithm
visualizer. My variation includes merge sort, quick sort with both Lomuto and Hoare's 
partition scheme, heap sort, bubble sort, selection sort, insertion sort, radix sort, and shell sort.

## Built With
<table>
	<tr>
  <img height="50px" class="center-block" src="https://github.com/LordFreezer/Sorts-Visualizer_PUBLIC/blob/ASSETS/src/react.png">
  </tr>
  <tr>
  React
  </tr>
  </table>
  
## Algorithms
### Quick Sort (Hoare Partition)
```
Partition(arr[], lo, hi)
   pivot = arr[lo]
   i = lo - 1  // Initialize left index
   j = hi + 1  // Initialize right index

   // Find a value in left side greater
   // than pivot
   do
      i = i + 1
   while arr[i] < pivot

   // Find a value in right side smaller
   // than pivot
   do
      j--
   while arr[j] > pivot

   if i >= j then 
      return j

   swap arr[i] with arr[j]
   
QuickSort(arr[], lo, hi) 
  if lo < hi then
    pivot = Partition(arr[], lo, hi)
    QuickSort(arr[], lo, pivot)
    QuickSort(arr[], pivot + 1, hi)
```
### Quick Sort (Lomuto Partition)
```
Partition(arr[], lo, hi) 
    pivot = arr[hi]
    i = lo     // place for swapping
    for j := lo to hi – 1 do
        if arr[j] <= pivot then
            i = i + 1 
            swap arr[i] with arr[j]
    swap arr[i] with arr[hi]
    return i
    
 QuickSort(arr[], lo, hi)
    if lo < hi then 
        /* pi is partitioning index,
        arr[p] is now at right place */
        partition = Partition(arr[], lo, hi)
  
        // Separately sort elements before
        // partition and after partition
        QuickSort(arr[], lo, partition - 1)
        QuickSort(arr[], partition + 1, hi)
```
### Heap Sort
```
HeapSort(arr[])
        n = arr.len
  
        // Build heap (rearrange array)
        for i := n / 2 - 1; i to 0 do
            Heapify(arr[], n, i)
  
        // One by one extract an element from heap
        for i := n - 1 to 0 do
            // Move current root to end
            Swap(arr[], i, 0)
  
            // call max heapify on the reduced heap
            Heapify(arr[], i, 0)
  
    // To heapify a subtree rooted with node i which is
    // an index in arr[]. n is size of heap
    Heapify(arr[], n, i)
        // Initialize largest as root
        largest = i 
        l = 2 * i + 1 
        r = 2 * i + 2
  
        // If left child is larger than root
        if l < n and arr[l] > arr[largest] then
            largest = l
  
        // If right child is larger than largest so far
        if r < n and arr[r] > arr[largest] then
            largest = r
  
        // If largest is not root
        if largest does not equal i then
            Swap(arr[], i, largest)
  
            // Recursively heapify the affected sub-tree
            Heapify(arr[], n, largest)
```
### Merge Sort
```
  PerformMerge(arr[], startIdx, middleIdx, endIdx, aux[])
     if startIdx is equal to endIdx then 
         return nothing
     middleIdx = startIdx + endIdx / 2
     PerformMerge(aux[], startIdx, middleIdx, arr[])
     PerformMerge(aux[], middleIdx + 1, endIdx, arr[])
     Merge(arr[], startIdx, middleIdx, endIdx, aux[])
  
  Merge(arr[], startIdx, middleIdx, endIdx, aux[]) 
    // Maintain current index of auxilary array and main array
    k = startIdx
    i = startIdx
    j = middleIdx + 1

    // Until we reach either end of either L or M, pick larger among
    // elements L and M and place them in the correct position at A[p..r]
    while (i <= middleIdx and j <= endIdx) 
       if (aux[i] <= aux[j]) then
           arr[k++] = aux[i++]
       else 
           arr[k++] = aux[j++]
	   
    // When we run out of elements in either L or M,
    // pick up the remaining elements and put in A[p..r]
    while (i <= middleIdx) 
        arr[k++] = aux[i++]
    while (j <= endIdx) 
        arr[k++] = aux[j++]
```
### Bubble Sort
```
BubbleSort(arr[], size) 
  for i := 0 to size - 1 do
    for k := 0 to size - i + 1 do
      if arr[k] > array[k + 1] then
        // swap array[j+1] and array[j]
        Swap(arr[], k, k + 1)
```
### Selection Sort
```
SelectionSort(arr[], size) {
  //variables i, j, min_idx may need to be declared outside of for loop

  // One by one move boundary of unsorted subarray
  for i := 0 to size - 1 do
    // Find the minimum element in unsorted array
    min_idx = i
    for j := i + 1 to size do
      if arr[j] < arr[min_idx]) then
        min_idx = j
 
    // Swap the found minimum element with the first element
    Swap(arr[], min_idx, i)
```
### Insertion Sort
```
InsertionSort(arr[], size) 
  for i := 1 to size do
    key = arr[i]
    j = i - 1

    /* Move elements of arr[0..i-1], that are 
    greater than key, to one position ahead 
    of their current position */
    while j >= 0 and arr[j] > key
      arr[j + 1] = arr[j]
      j = j - 1
      
    arr[j + 1] = key
```
### Count Sort
```
CountSort(arr[], n, exp) 
  //variables output, i, and count may need to declared outside of for loop
  output := array of n elements
  count := array of 10 elements
  
  for i := 0 to 10 do
    count[i] = 0

  // Store count of occurrences in count[]
  for i := 0 to n do
    count[arr[i] / exp % 10]++
 
  // Change count[i] so that count[i] now contains
  // actual position of this digit in output[]
  for i := 1 to 10 do
    count[i] += count[i - 1]

  // Build the output array
  for i := n - 1 to 0 do
    output[count[arr[i] / exp % 10] - 1] = arr[i]
    count[Math.floor(arr[i] / exp) % 10]--

  // Copy the output array to arr[], so that arr[] now
  // contains sorted numbers according to current digit
  for i := 0 to n do
    arr[i] = output[i]
```
### Radix Sort
```
RadixSort(arr[], n) 
  // Find the maximum number to know number of digits
  m := Maximal number in arr

  // Do counting sort for every digit. Note that
  // instead of passing digit number, exp is passed.
  // exp is 10^i where i is current digit number
  exp := 1
  while m / exp > 0
    CountSort(arr[], n, exp)
    exp *= 10
```
### Shell Sort
```
ShellSort(arr[], n) 
  // Start with a big gap, then reduce the gap
  gap := n / 2
  while gap > 0
    // Do a gapped insertion sort for this gap size.
    // The first gap elements a[0..gap-1] are already
    // in gapped order keep adding one more element
    // until the entire array is gap sorted
    for i := gap to n do
      // add a[i] to the elements that have been gap
      // sorted save a[i] in temp and make a hole at
      // position i
      temp = arr[i]

      // shift earlier gap-sorted elements up until
      // the correct location for a[i] is found
      j := i
      while j >= gap and arr[j - gap] > temp
        arr[j] = arr[j - gap];
        j -= gap

      // put temp (the original a[i]) in its correct
      // location
      arr[j] = temp;
    }
    gap = gap / 2
  return arr[];
```


## Usage
On the landing page, you can find a generate an array of random numbers between 10 and 600.
<p align="center">
  <img src="https://github.com/LordFreezer/Sorts-Visualizer_PUBLIC/blob/ASSETS/src/home.png" />
</p>

You can click on a sorting algorithm below to sort the bars on the screen. Below you can see a radix sort
in action.
<p align="center">
  <img src="https://github.com/LordFreezer/Sorts-Visualizer_PUBLIC/blob/ASSETS/src/mid.png" />
</p>

Now the bars are sorted!
<p align="center">
  <img src="https://github.com/LordFreezer/Sorts-Visualizer_PUBLIC/blob/ASSETS/src/end.png" />
</p>

## Contact
You can find more projects like this on my [portfolio](https://thederflinger.com/#projects)

Or you can send me an email [here](https://thederflinger.com/#contact).

## Special Thanks
I would like to thank [Nikhil Sawant](https://github.com/NickSaw22) and [Kevin](https://github.com/Kevin6525) for their 
open-source variations of the project. I used both to debug animation problems in my heap sort and radix sort.


