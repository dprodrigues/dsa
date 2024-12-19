function bubblesort(arr) {
  for (let i = 0; i < arr.length; i++) {
    let isSorted = true;

    for (let j = 0; j < arr.length - 1 - i; j++) {
      if (arr[j] > arr[j + 1]) {
        isSorted = false;

        [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
      }
    }

    if (isSorted) break;
  }

  return arr;
}

let arr = [5, 1, 3, 8, 9, 2, 4, 0, 7, 6];

arr = bubblesort(arr);

console.log("arr:", arr);
