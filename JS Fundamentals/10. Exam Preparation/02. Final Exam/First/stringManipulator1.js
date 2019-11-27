function solve(input) {
    let string = input.shift().split('');

    for (const iterator of input) {
        if (iterator == "End") {
            break;
        }

        let row = iterator.split(' ');

        switch (row[0]) {
            case "Translate":
                let char = row[1];
                let replacement = row[2];

                while (string.includes(char)) {
                    let indexToRemove = string.indexOf(char);
                    string.splice(indexToRemove, 1, replacement);
                }

                console.log(string.join(''));

                break;

            case "Includes":
                let stringIncluded = row[1];

                if (string.join('').includes(stringIncluded)) {
                    console.log('True');
                } else {
                    console.log('False');
                }

                break;

            case "Start":
                let startString = row[1];

                if (string.join('').startsWith(startString)) {
                    console.log('True');
                } else {
                    console.log('False');
                }

                break;

            case "Lowercase":
                string = string.join('').toLowerCase().split('');
                console.log(string.join(''));

                break;

            case "FindIndex":
                let charIndex = row[1];
                let resultIndex = string.lastIndexOf(charIndex);
                console.log(resultIndex);

                break;

            case "Remove":
                let startIndex = Number(row[1]);
                let count = Number(row[2]);
                string.splice(startIndex, count);
                console.log(string.join(''));

                break;
        }
    }
}