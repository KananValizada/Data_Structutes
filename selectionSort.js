function selectSort(arr) {
  for (let x = 0; x < arr.length; x++) {
    let min = x;
    let temp = arr[x];
    for (let y = x + 1; y < arr.length; y++) {
      if (arr[y] < arr[min]) {
        min = y;
      }
    }
    arr[x] = arr[min];
    arr[min] = temp;
  }

  return arr;
}

console.log(selectSort([123, 32, 54, 32, 765, 32, 12, 44, 22, 8, 5]));
