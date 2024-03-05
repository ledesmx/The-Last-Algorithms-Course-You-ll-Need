export function two_crystal_balls(breaks: boolean[]): number {
    let lo = 0;
    let hi = breaks.length;

    while(lo + 2 < hi) {
        let mid = Math.floor((lo + hi) / 2);
        if(breaks[mid]) {
            hi = mid + 1;
        } else {
            lo = lo = mid + 1;
        }
    }
    while(lo < hi) {
        if(breaks[lo]) {
            return lo;
        } else {
            ++lo;
        }
    }

    return -1;
}