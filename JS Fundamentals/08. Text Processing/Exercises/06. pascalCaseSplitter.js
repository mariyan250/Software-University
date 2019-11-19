function solve(str) {
    str = str.split("");

    let sentence = [];
    let word = [];

    for (let i = 0; i < str.length; i++) {
        if (str[i].charCodeAt(0) >= 65 && str[i].charCodeAt(0) <= 90) {
            word.push(str[i]);

            for (let x = i + 1; x < str.length; x++) {
                if (str[x].charCodeAt(0) >= 65 && str[x].charCodeAt(0) <= 90) {
                    sentence.push(word.join(""));
                    word = [];
                    break;
                } else {
                    word.push(str[x]);
                }
            }
        }
    }

    console.log(sentence);

}

solve('FuckYouNoobIdiot');