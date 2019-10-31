function froggySquad(input) {
    let names = input.shift().split(" ");

    for (let i = 0; i < input.length; i++) {
        let command = input[i].split(" ");
        let commandOperation = command[0];
        let operationName = command[1];

        switch (commandOperation) {
            case "Join":
                let frogName = command[1];

                if (!names.includes(frogName)) {
                    names.push(frogName);
                }

                break;

            case "Jump":
                let name = command[1];
                let jumpIndex = Number(command[2]);

                if (names[jumpIndex]) {
                    names.splice(jumpIndex, 0, name);
                }

                break;

            case "Dive":
                let diveIndex = Number(command[1]);

                if (names[diveIndex]) {
                    names.splice(diveIndex, 1);
                }

                break;

            case "First":
                let firstCountFrogs = Number(command[1]);

                if (firstCountFrogs >= names.length) {
                    console.log(names.join(" "));
                } else {
                    console.log((names.slice(0, firstCountFrogs)).join(" "));
                }

                break;

            case "Last":
                let lastCountFrogs = Number(command[1]);

                if (lastCountFrogs >= names.length) {
                    console.log(names.join(" "));
                } else {
                    let lastFrogs = names.slice(names.length - lastCountFrogs, names.length);
                    console.log(lastFrogs.join(" "));
                }

                break;

            case "Print":
                if (operationName == "Normal") {
                    console.log(`Frogs: ${names.join(" ")}`);
                } else if (operationName == "Reversed") {
                    console.log(`Frogs: ${names.reverse().join(" ")}`);
                }
                break;
        }
    }
}

froggySquad([
    'Blake Muggy Kishko',
    'Join Kvachko',
    'Dive 0',
    'First 10',
    'Print Reversed'
]);