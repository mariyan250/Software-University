function solve(words, text) {
    let separatedWords = words.split(", ");
    text.split(" ")
        .forEach(word => {
            let lengthX = '*'.repeat(word.length);

            if (word === lengthX) {
                text = text.replace(word, separatedWords.find((w) => w.length === lengthX.length));
            }

        });

    console.log(text);
}