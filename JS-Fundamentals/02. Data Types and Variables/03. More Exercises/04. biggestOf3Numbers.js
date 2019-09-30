function solve(num1 ,num2, num3) {
    let biggest = num1;
    let arr = [];
    arr.push(num1, num2, num3);
    for (num of arr) {
        if (num >= biggest) {
            biggest =num;
        }
    }
}

solve(1,2,3);