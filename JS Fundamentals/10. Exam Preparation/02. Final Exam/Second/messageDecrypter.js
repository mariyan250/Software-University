function solve(input) {
    let num = Number(input.shift());

    for (const line of input) {
        let regex = /^([%$])[A-Z][a-z]{3,}\1: \[([0-9]+)\]\|\[([0-9]+)\]\|\[([0-9]+)\]\|$/g;

        if (line.match(regex)) {
            let match = regex.exec(line);
            let name = line.match(/([$%])[A-Z][a-z]{3,}\1/g)[0];
            name = name.split(match[1])[1];
            const [one, two, three] = match.slice(2);

            console.log(`${name}: ${String.fromCharCode(one,two,three)}`);

        } else {
            console.log('Valid message not found!');
        }
    }
}