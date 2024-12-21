function merge(left, right) {
  const res = [];
  let l = 0;
  let r = 0;

  while (l < left.length && r < right.length) {
    res.push(left[l] < right[r] ? left[l++] : right[r++]);
  }

  return res.concat(l < left.length ? left.slice(l) : right.slice(r));
}

function mergesort(arr) {
  if (arr.length <= 1) return arr;

  const len = arr.length;
  const mid = Math.floor(len / 2);

  const l = mergesort(arr.slice(0, mid));
  const r = mergesort(arr.slice(mid, len));

  return merge(l, r);
}

let arr = [5, 1, 3, 8, 9, 2, 4, 0, 7, 6];

arr = mergesort(arr);

console.log("arr:", arr);
