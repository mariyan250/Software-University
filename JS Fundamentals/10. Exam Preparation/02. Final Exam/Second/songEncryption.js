function solve(input) {
    for (const line of input) {
        if (line == 'end') {
            break;
        }

        let regex = /^([A-Z'][a-z']+[\s]*[a-z']+):([A-Z+\s*A-Z]+)$/g;

        if (line.match(regex)) {
            let arr = regex.exec(line);
            let [artist, song] = arr.slice(1);

            let key = artist.length;

            let result1 = artist.split('').map(symbol => {
                let result = symbol.toLowerCase().charCodeAt(0) + key;
                if (result >= 65 && result <= 90 || result >= 97 && result <= 122) {
                    return String.fromCharCode(result);
                } else if (symbol == ' ' || symbol == "'") {
                    return symbol;
                } else if (result > 122) {
                    let left = result - 122;
                    let toAdd = String.fromCharCode(97 + left - 1);
                    return toAdd;
                }
            });

            result1[0] = result1[0].toUpperCase();
            result1 = result1.join('');

            let result2 = song.split('').map(symbol => {
                let result = symbol.toLowerCase().charCodeAt(0) + key;
                if (result >= 97 && result <= 122) {
                    return String.fromCharCode(result);
                } else if (symbol == ' ') {
                    return symbol;
                } else if (result > 122) {
                    let left = result - 122;
                    let toAdd = String.fromCharCode(97 + left - 1);
                    return toAdd;
                }
            }).join('').toUpperCase();

            console.log(`Successful encryption: ${result1}@${result2}`);
        } else {
            console.log('Invalid input!');
        }
    }
}