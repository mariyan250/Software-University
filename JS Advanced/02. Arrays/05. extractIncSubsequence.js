function solve(input) {
    let current = 0;
    input.forEach(number => {
        if (number >= current) {
            current = number;
            console.log(number);
        }
    });
}