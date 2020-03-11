function solve(input) {
    input = input.sort((a, b) => a.length - b.length || a.localeCompare(b));
    input.forEach(element => console.log(element))
}