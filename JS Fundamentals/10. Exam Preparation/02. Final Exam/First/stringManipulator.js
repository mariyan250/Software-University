function solve(input) {
    let sentence = input.shift().split("");
    for (const line of input) {
        let row = line.split(" ");

        switch (row[0]) {
            case "Change":
                let char = row[1];
                let replacement = row[2];

                while (sentence.includes(char)) {
                    let indexOfChar = sentence.indexOf(char);
                    sentence.splice(indexOfChar, 1, replacement);
                }

                console.log(sentence.join(""));

                break;

            case "Includes":
                let str = row[1];

                if (sentence.join("").includes(str)) {
                    console.log("True");
                } else {
                    console.log("False");
                }

                break;

            case "End":
                let endStr = row[1];

                if (sentence.join("").endsWith(endStr)) {
                    console.log("True");
                } else {
                    console.log("False");
                }

                break;

            case "Uppercase":
                sentence = sentence.join("").toUpperCase();
                console.log(sentence);
                sentence = sentence.split("");
                break;

            case "FindIndex":
                let charIndex = row[1];

                if (sentence.includes(charIndex)) {
                    console.log(sentence.indexOf(charIndex))
                }

                break;

            case "Cut":
                let curStartIndex = Number(row[1]);
                let nextLength = Number(row[2]);
                sentence = sentence.splice(curStartIndex, nextLength);
                console.log(sentence.join(""));
                break;
        }
    }
}