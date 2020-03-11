function solve(input) {
    const result = input.reduce((acc, val) => {
        return !acc.includes(val) ? acc.push(val) : [];
    }, []);

    result.sort((a, b) => a.length - b.length || a.localeCompare(b)).map(name => console.log(name));
}