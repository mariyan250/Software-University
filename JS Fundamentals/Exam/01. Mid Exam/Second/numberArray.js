function numberArray(input) {
    let numbers = input.shift().split(" ").map(Number);

    for (let i = 0; i <= input.length; i++) {
        let element = input[i].split(" ");
        let command = element[0];
        let numSign = element[1];

        if (element == "End") {
            break;
        }

        switch (command) {
            case "Switch":
                let switchIndex = Number(element[1]);

                if (numbers[switchIndex]) {
                    numbers[switchIndex] = 0 - numbers[switchIndex];
                }

                break;

            case "Change":
                let changeIndex = Number(element[1]);
                let changeValue = Number(element[2]);

                if (numbers[changeIndex]) {
                    numbers.splice(changeIndex, 1, changeValue);
                }

                break;
        }

        if (numSign == "Negative") {
            let negativeNums = numbers.filter(element => element < 0).reduce((acc, val) => acc + val);
            console.log(negativeNums);

        } else if (numSign == "Positive") {
            let positiveNums = numbers.filter(element => element > 0).reduce((acc, val) => acc + val);
            console.log(positiveNums);

        } else if (numSign == "All") {
            let sum = numbers.reduce((acc, val) => acc + val);
            console.log(sum);
        }
    }

    let numsToPrint = numbers.filter(element => element >= 0);
    console.log(numsToPrint.join(" "));
}

numberArray(['1 2 3 4 5', 'Switch 4', 'Change 0 -3', 'Sum Negative', 'End']);