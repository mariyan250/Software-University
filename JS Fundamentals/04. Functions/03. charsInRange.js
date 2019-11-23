function solve(string1, string2) {

    let startAsciiValue = getAsciiValue(string1);
    let endAsciiValue = getAsciiValue(string2);

    let startPoint = Math.min(startAsciiValue, endAsciiValue);
    let endPoint = Math.max(startAsciiValue, endAsciiValue);

    printAsciiSymbols(startPoint, endPoint);

    function getAsciiValue(char) {
        return char.charCodeAt(0);
    }

    function printAsciiSymbols(after, before) {
        let symbols = [];
        for (let i = after + 1; i <= (before - 1); i++) {
            symbols.push(String.fromCharCode(i))
        }

        console.log(symbols.join(" "))
    }
}