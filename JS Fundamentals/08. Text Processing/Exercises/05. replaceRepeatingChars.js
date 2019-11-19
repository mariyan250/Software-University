function solve(input) {
    let sequence = [];
    input.split("").forEach((letter, index) => {
        if (letter != input[index + 1]) {
            sequence.push(letter);
        }
    });
    console.log(sequence.join(""));
}