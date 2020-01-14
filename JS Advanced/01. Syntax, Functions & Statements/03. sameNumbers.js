function sameNumbers(num) {
    const digits = num.toString().split("");
    const numberChecker = digits[0];
    let counter = 0;

    digits.forEach(digit => {
        if (digit == numberChecker) {
            counter++;
        }
    })

    const sum = digits.reduce((a, b) => Number(a) + Number(b));

    if (counter == digits.length) {
        console.log(true);
        return sum;
    } else {
        console.log(false);
        return sum;
    }
}