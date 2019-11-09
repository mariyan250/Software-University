function solve(input) {
    let names = input.shift().split("|");
    let newArr = [];

    for (let i = 0; i < input.length; i++) {
        let command = input[i].split(" ");

        if (command[0] == "Done") {
            break;
        }

        switch (command[1]) {
            case "Left":
                let moveIndex = Number(command[2]);

                if (names[moveIndex] && names[moveIndex - 1]) {
                    let moveElement = names.splice(moveIndex, 1);
                    names.splice(moveIndex - 1, 0, moveElement.join(""));
                }

                break;

            case "Right":
                let moveRightIndex = Number(command[2]);

                if (names[moveRightIndex] && names[moveRightIndex + 1]) {
                    let moveRightElement = names.splice(moveRightIndex, 1);
                    names.splice(moveRightIndex + 1, 0, moveRightElement.join(""));
                }

                break;

            case "Even":
                let evens = names.filter((num, i) => i % 2 == 0);
                console.log(evens.join(" "));
                break;

            case "Odd":
                let odds = names.filter((number, index) => index % 2 != 0);
                console.log(odds.join(" "));
                break;
        }
    }

    console.log(`You crafted ${names.join("")}!`);
}

solve(['ri|As|er|hb|ng',
    'Move Left 1',
    'Move Right 2',
    'Move Right 3',
    'Move Left 2',
    'Done'
]);