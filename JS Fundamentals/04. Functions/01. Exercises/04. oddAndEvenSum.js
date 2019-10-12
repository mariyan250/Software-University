function solve(num) {

    const allEvenDigits = getEvenDigits(num);
    const allOddDigits = getOddDigits(num);

    function getEvenDigits(num) {
        let evenDigits = [];

        num.toString().split("").forEach((element) => {

            if (element % 2 == 0) {
                evenDigits.push(element);
            }

        });

        return evenDigits;
    }

    function getOddDigits(num) {
        let oddDigits = [];

        num.toString().split("").forEach((element) => {

            if (element % 2 != 0) {
                oddDigits.push(element);
            }

        });

        return oddDigits;
    }

    let oddSum = 0;
    let evenSum = 0;

    allEvenDigits.forEach((num) => {
        evenSum += Number(num);
    });

    allOddDigits.forEach((num) => {
        oddSum += Number(num);
    });

    console.log(`Odd sum = ${oddSum}, Even sum = ${evenSum}`)
}

solve(1000435)