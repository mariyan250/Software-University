function solve(string, char, result) {
    let newString = string.replace('_', char);
    let resultx = newString == result? "Matched": "Not Matched";
    console.log(resultx);
}