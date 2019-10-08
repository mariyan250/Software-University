function solve(arr, num) {

    for (let i = 0; i < arr.length; i++) {
        let element = arr[i];

        for (let n = i + 1; n <= arr.length; n++) {
            let element2 = arr[n];

            if (element + element2 == num) {
               console.log(element, element2);
            }
        }
    }
}