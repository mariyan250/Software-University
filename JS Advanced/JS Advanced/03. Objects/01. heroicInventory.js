function solve(input) {
    return JSON.stringify(input.reduce((acc, val) => {
        let [name, level, items] = val.split(" / ");
        return [...acc, { name, level: +level, items: items ? items.split(", ") : [] }]
    }, []));
}