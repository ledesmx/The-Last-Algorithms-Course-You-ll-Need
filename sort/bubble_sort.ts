export function bubble_sort(list: number[]): void {
    for(let i = 0; i < list.length; ++i) {
        for(let j = 0; j < list.length - 1 - i; ++j) {
            if(list[j] > list[j + 1]) {
                let temp = list[j];
                list[j] = list[j + 1];
                list[j + 1] = temp;
            }
        }
    }
}