function solve(num1, num2) {
    function calculateFactorial(n) {
        debugger;
        if (n > 1) {
            return n * (calculateFactorial(n - 1));
        }


        if (n == 1) {
            return 1;
        }
    }

    let firstNum = calculateFactorial(num1);
    let secondNum = calculateFactorial(num2);
    let result = firstNum / secondNum;
    console.log(result.toFixed(2));
}