function recursiveDivideAndConquer(arr, value, low, high) {
  if (low <= high) {
    const mid = Math.floor((low + high) / 2);

    if (arr[mid] < value) {
      return recursiveDivideAndConquer(arr, value, mid + 1, high);
    }

    if (arr[mid] > value) {
      return recursiveDivideAndConquer(arr, value, low, mid - 1);
    }

    return mid;
  }

  return null;
}

function binarySearchDivideAndConquer(arr, value) {
  const low = 0;
  const high = arr.length - 1;

  return recursiveDivideAndConquer(arr, value, low, high);
}

function binarySearch(arr, value) {
  let low = 0;
  let high = arr.length - 1;

  while (low <= high) {
    const mid = Math.floor((high + low) / 2);

    if (arr[mid] < value) {
      low = mid + 1;
      continue;
    }

    if (arr[mid] > value) {
      high = mid - 1;
      continue;
    }

    return mid;
  }

  return null;
}

let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const divideAndConquerPos = binarySearchDivideAndConquer(arr, 9);
const pos = binarySearch(arr, 1);

console.log("divideAndConquerPos:", divideAndConquerPos);
console.log("pos:", pos);
