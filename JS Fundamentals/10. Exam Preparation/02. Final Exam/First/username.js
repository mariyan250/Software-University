function solve(input) {
    let name = input.shift();

    for (const line of input) {
        let commands = line.split(" ");
        let command = commands[0];


        switch (command) {
            case "Case":
                let lowerOrUpper = commands[1];

                if (lowerOrUpper == 'lower') {
                    name = name.toLowerCase();
                    console.log(name);
                } else if (lowerOrUpper == 'upper') {
                    name = name.toUpperCase();
                    console.log(name);
                }

                break;

            case "Reverse":
                let startIndex = Number(commands[1]);
                let endIndex = Number(commands[2]);

                if (name[startIndex] && name[endIndex]) {
                    name = name.split("");
                    let x = name.slice(startIndex, endIndex + 1);
                    console.log(x.reverse().join(""));
                    name = name.join("");
                }

                break;

            case "Cut":
                let substring = commands[1];

                if (name.includes(substring)) {
                    let index = name.indexOf(substring);
                    name = name.split("");
                    name.splice(index, substring.length);
                    name = name.join("");
                    console.log(name);
                } else {
                    console.log(`The word ${name} doesn't contain ${substring}.`);
                }
                break;

            case "Replace":
                debugger;
                let char = commands[1];
                name = name.split("");

                while (name.includes(char)) {
                    let i = name.indexOf(char);
                    name.splice(i, 1, "*");
                }

                name = name.join("");
                console.log(name);
                break;

            case "Check":
                let c = commands[1];

                if (name.includes(c)) {
                    console.log("Valid");
                } else {
                    console.log(`Your username must contain ${c}.`);
                }

                break;
        }

    }
}