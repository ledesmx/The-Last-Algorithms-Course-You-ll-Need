function qs(arr: number[], lo: number, hi: number) {
  if (lo >= hi) {
    return;
  }

  const mid = partition(arr, lo, hi);
  qs(arr, lo, mid - 1);
  qs(arr, mid + 1, hi);
}

function partition(arr: number[], lo: number, hi: number): number {
  const pivot = arr[hi];
  let idx = lo - 1;
  for (let i = lo; i <= hi; ++i) {
    if (arr[i] <= pivot) {
      idx++;
      const aux = arr[i];
      arr[i] = arr[idx];
      arr[idx] = aux;
    }
  }
  return idx;
}

export function quicksort(arr: number[]) {
  qs(arr, 0, arr.length - 1);
}
