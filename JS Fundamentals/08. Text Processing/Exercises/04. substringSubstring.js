function solve(word, sentence) {
    let sentenceSequence = sentence.split(" ").map((el) => el.toLowerCase());
    word = word.toLowerCase();

    if (sentenceSequence.includes(word)) {
        console.log(word);
    } else {
        console.log(`${word} not found!`);
    }
}