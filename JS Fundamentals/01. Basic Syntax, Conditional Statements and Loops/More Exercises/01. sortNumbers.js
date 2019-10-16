function solve(num1, num2, num3) {
    let first = 0;
    let second = 0;
    let third = 0;

    if (num1 > num2 && num1 > num3) {
        first = num1;

        if (num2 > num3) {
            second = num2;
            third = num3
        } else {
            second = num3;
            third = num2;
        }
    } else if (num2 > num1 && num2 > num3) {
        first = num2;

        if (num1 > num3) {
            second = num1;
            third = num3
        } else {
            second = num3;
            third = num1;
        }
    } else {
        first = num3;

        if (num1 > num2) {
            second = num1;
            third = num2;
        } else {
            second = num2;
            third = num1;
        }
    }

    console.log(first);
    console.log(second);
    console.log(third);
}