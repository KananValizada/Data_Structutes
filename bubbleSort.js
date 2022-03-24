function bubSort(arr) {
  for (let a = 0; a < arr.length; a++) {
    for (let b = 0; b < arr.length; b++) {
      if (arr[b] > arr[b + 1]) {
        let temp = arr[b];
        arr[b] = arr[b + 1];
        arr[b + 1] = temp;
      }
    }
  }

  return arr;
}

console.log(bubSort([1, 5, 2, 52, 98, 25, 44, 19, 63]));
