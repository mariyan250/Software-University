function solve(arr1, arr2) {
    arr1.forEach(element => {
        arr2.forEach(element2 => {
            if (element === element2) {
                console.log(element);
            }
        });
    });
}