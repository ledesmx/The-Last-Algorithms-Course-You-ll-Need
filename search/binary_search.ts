export function binary_search(arr: number[], n: number): boolean {
  let lo = 0;
  let hi = arr.length;

  while (lo < hi) {
    let mid = Math.floor((lo + hi) / 2);
    let midn = arr[mid];

    if (midn === n) {
      return true;
    }
    if (midn > n) {
      hi = mid;
    } else {
      lo = mid + 1;
    }
  }

  return false;
}
