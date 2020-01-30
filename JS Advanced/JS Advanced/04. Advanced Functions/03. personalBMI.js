function solve(name, age, weight, height) {
    const BMI = Math.round(Number(weight) / Number(height / 100 * height / 100));

    function checkBMI(BMi) {
        if (BMI < 18.5) {
            return 'underweight';
        } else if (BMI < 25) {
            return 'normal';
        } else if (BMI < 30) {
            return 'overweight';
        } else {
            return 'obese';
        }
    }

    const result = {
        name,
        personalInfo: {
            age,
            weight,
            height
        },
        BMI,
        status: checkBMI(BMI)
    }

    if (result.status == 'obese') {
        result.recommendation = 'admission required';
    }

    return result;
}