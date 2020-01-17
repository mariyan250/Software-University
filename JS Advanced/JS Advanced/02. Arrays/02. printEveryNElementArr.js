function solve(input) {
    const n = Number(input.pop());
    const result = input.filter((element, i) => {
        if (i % n == 0) {
            return element;
        }
    })

    console.log(result.join("\n"));
}