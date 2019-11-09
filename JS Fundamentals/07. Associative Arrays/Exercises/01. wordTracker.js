function wordTracker(input) {
    let sentence = input.shift();
    let sentenceArray = sentence.split(" ");

    let obj = {}

    sentenceArray.forEach((element) => {
        obj[element] = 0;
    });

    input.forEach((word) => {
        if (obj.hasOwnProperty(word)) {
            obj[word]++;
        }
    });

    Object.keys(obj).sort((a, b) => obj[b] - obj[a])
        .forEach((element) => {
            console.log(`${element} - ${obj[element]}`);
        });
}

wordTracker([
    'this sentence', 'In', 'this', 'sentence', 'you', 'have', 'to', 'count', 'the', 'occurances', 'of', 'the', 'words', 'this', 'and', 'sentence', 'because', 'this', 'is', 'your', 'task'
]);