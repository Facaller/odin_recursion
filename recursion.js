function fibonacci (n) {
    if (n == 1) return [1];
    if (n == 2) return [1, 1];

    const prev = fibonacci(n - 1);
    const next = prev[prev.length - 1] + prev[prev.length - 2];

    return [...prev, next]
}

console.log(fibonacci(8));

function mergeSort (array) {
    if (array.length <= 1) return array;

    const mid   = Math.ceil(array.length / 2);
    const left  = mergeSort(array.slice(0, mid));
    const right = mergeSort(array.slice(mid));

    return merge(left, right);
}

function merge (arr1, arr2) {
    const result = [];
    let i = 0;
    let j = 0;

    while (i < arr1.length && j < arr2.length) {
        if (arr1[i] < arr2[j]) {
            result.push(arr1[i]);
            i++;
        } else {
            result.push(arr2[j]);
            j++;
        }
    }
    return result.concat(arr1.slice(i).concat(arr2.slice(j)));
}

console.log(mergeSort([3,6,1,43,53,19,9,0,23]));