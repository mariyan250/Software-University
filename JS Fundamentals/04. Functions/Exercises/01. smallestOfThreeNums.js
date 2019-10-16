function solve(num1, num2, num3) {
    const arr = [];
    let initialNum = num1;
    arr.push(num1, num2, num3);
    arr.forEach((element) => {
        if (element < initialNum) {
            initialNum = element;
        }
    });
    console.log(initialNum);
}

solve(3, 3, 2)