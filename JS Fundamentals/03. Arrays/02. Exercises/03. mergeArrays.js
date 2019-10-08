function solve(arr1, arr2) {
    const third = [];
    arr1.forEach((element1, i) => {
        arr2.forEach((element2, n) => {
            if (i == n) {
                if (i % 2 == 0 && n % 2 == 0) {
                    third.push(Number(element1) + Number(element2));
                } else {
                    third.push(element1 + element2);
                }
            }
        })
    });

    console.log(third.join(" - "));
}