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


