function districtArray(arr) {
    for (let i = 0; i < arr.length; i++) {
        for (let j = i + 1; j <= arr.length; j++) {
            debugger;
            if (arr[i] === arr[j]) {
                arr.splice(j, 1);
                j -= 1;
            }
        }
    }
    console.log(arr.join(' '));
}