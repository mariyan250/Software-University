function solve(input) {
    for (const line of input) {
        if (line == "end") {
            break;
        }

        let regex = /^([A-Z'][a-z']+[\s]*[a-z']+):([A-Z]+[\s*[A-Z]+)$/g;

        if (line.match(regex)) {
            let arr = regex.exec(line);
            let [artist, song] = arr.slice(1);

            let artistLength = artist.length;

            let result1 = artist.split('').map(symbol => {
                let result = symbol.charCodeAt(0) + artistLength;
                if (result >= 60 && result <= 90 || result >= 97 && result <= 122) {
                    return String.fromCharCode(result);
                } else if (symbol == " " || symbol == "'") {
                    return symbol;
                } else if (result > 90 && result < 97) {
                    let left = result - 90;
                    let toAdd = String.fromCharCode(97 + left - 1);
                    return toAdd;
                } else if (result > 122) {
                    let left = result - 122;
                    let toAdd = String.fromCharCode(97 + left - 1);
                    return toAdd;
                }

            }).join('');

            let result2 = song.split('').map(symbol => {
                let result = symbol.charCodeAt(0) + artistLength;
                if (result >= 60 && result <= 90) {
                    return String.fromCharCode(result);
                } else if (symbol == " ") {
                    return symbol;
                } else if (result > 90) {
                    let left = result - 90;
                    let toAdd = String.fromCharCode(97 + left - 1);
                    return toAdd;
                }
            }).join('').toUpperCase();

            console.log(`Successful encryption: ${result1}@${result2}`);
        } else {
            console.log("Invalid input!");
        }
    }
}