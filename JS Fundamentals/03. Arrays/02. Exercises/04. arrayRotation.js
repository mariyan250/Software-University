function solve(arr, rotations) {
    let newArr = "";
    for (let index = 1; index <= rotations; index++) {
        arr.forEach((element, i) => {
            if (i == 0) {
                arr.push(element);
                arr.shift();
            }
        });
    }

    arr.forEach(element => {
        newArr += `${element} `;
    })
    
    console.log(newArr);
}

solve([51, 47, 32, 61, 21], 2);