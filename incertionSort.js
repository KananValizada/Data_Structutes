function incertionSort(arr) {
  let max = arr[0];
  for (let a = 1; a < arr.length; a++) {
    if (arr[a] > arr[max]) {
      arr[a] = arr[max];
    }
  }
}
