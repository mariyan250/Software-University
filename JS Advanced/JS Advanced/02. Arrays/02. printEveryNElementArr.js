function solve(input) {
    const n = Number(input.pop());

    const result = input.reduce((acc, val, i) => {
        if (i % n == 0) acc.push(val);
        return acc;
    }, []);

    result.forEach(element => console.log(element));
}