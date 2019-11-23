function sum(num1, num2, num3) {
    let result = num1 + num2;
    let finalResult = 0;

    function subtract() {
        if (result) {
            finalResult = result - num3;
        }

        console.log(finalResult);
    }

    subtract();
}