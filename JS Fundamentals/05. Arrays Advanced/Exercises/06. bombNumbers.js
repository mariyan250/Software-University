function bombNumbers(arr, arr2) {
    let num = arr2[0];
    let power = arr2[1];

    const result = arr.reduce((a, b) => a + b);

    console.log(result);
}

bombNumbers([1, 2, 2, 4, 2, 2, 2, 9], [4, 2]);