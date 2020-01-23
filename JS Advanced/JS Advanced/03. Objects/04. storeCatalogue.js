function solve(input) {
    const result = input.reduce((acc, val) => {
        const [item, price] = val.split(" : ");
        if (!acc.hasOwnProperty(item)) {
            acc[item] = Number(price);
        }

        return acc;
    }, {});

    const data = Object.keys(result).sort((a, b) => a.localeCompare(b));
    data.map((element, i) => {
        if (i == 0) {
            console.log(element.split("")[0]);
            console.log(`${element}: ${result[element]}`);
        } else if (data[i - 1] && element.split("")[0] != data[i - 1].split("")[0]) {
            console.log(element.split("")[0]);
            console.log(`${element}: ${result[element]}`);
        } else {
            console.log(`${element}: ${result[element]}`);
        }
    });
}