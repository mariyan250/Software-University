function solve(input) {
    let inputsNumber = Number(input.shift());

    for (let i = 0; i < input.length; i++) {
        let row = input[i];
        let regex = /([@|*])[A-Z][a-z]{2,}\1: \[([A-z]*[a-z]*)\]\|\[([A-z]*[a-z]*)\]\|\[([A-z]*[a-z]*)\]\|$/g;

        if (row.match(regex)) {
            let firstLetter = row.match(/([@|*])[A-Z][a-z]{2,}\1/g).join("");

            if (firstLetter.includes("@")) {
                firstLetter = firstLetter.split("@");
            } else {
                firstLetter = firstLetter.split("*");
            }

            let first = firstLetter[1];
            let letters = regex.exec(row).slice(2);

            letters.forEach(letter => {
                letters.splice(letters.indexOf(letter), 1, letter.charCodeAt(0))
            });

            console.log(`${first}: ${letters.join(" ")}`);

        } else {
            console.log("Valid message not found!");
        }
    }
}