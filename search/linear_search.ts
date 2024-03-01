function linear_search(haystack: number[], needle: number): boolean {
    for(let i = 0; i < haystack.length; ++i) {
        if(haystack[i] === needle) {
            return true;
        }
    }
    return false;
}

const tests = [
    {
        stack: [1, 5, 98, 2],
        number: 5,
        result: true,
    },
    {
        stack: [1, 5, 98, 2],
        number: 10,
        result: false,
    },
    {
        stack: [-15, 500, 1000, 123, -135, 1345, -556, -3, 145, 0, 4, 777],
        number: 777,
        result: true,
    },
    {
        stack: [-15, 500, 1000, 123, -135, 1345, -556, -3, 145, 0, 4, 777],
        number: 999,
        result: false,
    },
];

tests.forEach(test => {
    const result = linear_search(test.stack, test.number);
    const succeded = result === test.result;
    console.log(succeded ? 'SUCCEDED' : 'FAILED');
    console.log(test.stack, test.number, `Expected: ${test.result}`, `result: ${result}`);
})