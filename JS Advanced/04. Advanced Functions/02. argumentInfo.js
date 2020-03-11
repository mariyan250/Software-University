function solve() {
    const a = Object.values(arguments)
        .reduce((acc, val) => {
            let type = typeof val;
            console.log(`${type}: ${val}`);

            if (!acc[type]) {
                acc[type] = 0;
            }

            acc[type]++;

            return acc;
        }, {});

    console.log(a);

    Object.entries(a)
        .sort((a, b) => b[1] - a[1])
        .forEach((kvp) => {
            console.log(`${kvp[0]} = ${kvp[1]}`);
        });
}


solve('cat', 42, function () { console.log('Hello world!'); });
