function solve(input) {
    let initialSum = 1;

    const result = input.reduce((acc, val) => {
        if (val == "add") {
            acc.push(initialSum);
        } else {
            acc.pop();
        }

        initialSum++;

        return acc;
    }, [])

    return result.length > 0 ? result.join("\n") : 'Empty';
}