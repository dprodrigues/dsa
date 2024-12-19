function partition(arr, left, right) {
  const pivot = arr[Math.floor((right + left) / 2)];
  let l = left;
  let r = right;

  while (l <= r) {
    while (arr[l] < pivot) l++;
    while (arr[r] > pivot) r--;

    if (l <= r) {
      [arr[l], arr[r]] = [arr[r], arr[l]];
      l++;
      r--;
    }
  }

  return l;
}

function quicksort(arr, left = 0, right = arr.length - 1) {
  if (arr.length <= 1) return arr;

  let pi = partition(arr, left, right);

  if (left < pi - 1) quicksort(arr, left, pi - 1);

  if (pi < right) quicksort(arr, pi, right);

  return arr;
}

let arr = [5, 1, 3, 8, 9, 2, 4, 0, 7, 6];

arr = quicksort(arr);

console.log("arr:", arr);
