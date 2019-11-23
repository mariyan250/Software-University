function solve(input) {
    let words = input.split(' ')
        .filter(word => word.startsWith('#') && word.length > 1)
        .map(word => word.slice(1))
        .filter(word => word.split("").filter(c => c.toLowerCase().charCodeAt(0) >= 97 && c.toLowerCase().charCodeAt(0) <= 122).length === word.length)

    words.forEach(word => {
        console.log(word);
    });
}