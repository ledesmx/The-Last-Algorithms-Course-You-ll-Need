// Given two crystal balls that will break if dropped from high
// enough distance, determine the exact spot in which it will
// break in the most optimized way.

export function two_crystal_balls(breaks: boolean[]): number {
  const jmpAmount = Math.floor(Math.sqrt(breaks.length));

  let i = jmpAmount;
  for (; i < breaks.length; i += jmpAmount) {
    if (breaks[i]) {
      break;
    }
  }

  i -= jmpAmount;
  for (; i < breaks.length; ++i) {
    if (breaks[i]) {
      return i;
    }
  }

  return -1;
}

export function two_crystal_balls_2(breaks: boolean[]): number {
  const sqrt = Math.floor(Math.sqrt(breaks.length));
  let high = 0;

  while (high < breaks.length) {
    if (breaks[high]) {
      break;
    }
    high += sqrt;
  }

  if (high < sqrt) {
    return high;
  }
  if (high >= breaks.length) {
    return -1;
  }

  high -= sqrt;
  while (!breaks[high]) {
    ++high;
  }

  return high;
}

// Algorithm with unlimited crystal balls. With O(log n)
export function crystal_balls(breaks: boolean[]): number {
  let lo = 0;
  let hi = breaks.length;

  while (lo + 2 < hi) {
    let mid = Math.floor((lo + hi) / 2);
    if (breaks[mid]) {
      hi = mid + 1;
    } else {
      lo = lo = mid + 1;
    }
  }
  while (lo < hi) {
    if (breaks[lo]) {
      return lo;
    } else {
      ++lo;
    }
  }

  return -1;
}
