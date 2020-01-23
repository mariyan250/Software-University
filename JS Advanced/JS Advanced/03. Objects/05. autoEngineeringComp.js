function solve(input) {
    const result = input.reduce((acc, val) => {
        const [brand, model, produced] = val.split(" | ");
        if (acc.hasOwnProperty(brand)) {
            const check = acc[brand].find(o => o.model == model);
            if (check) {
                check.produced += Number(produced);
            } else {
                acc[brand].push({ model, produced: Number(produced) });
            }
        } else {
            acc[brand] = [{ model: model, produced: Number(produced) }];
        }

        return acc;
    }, {});

    Object.keys(result).map(element => {
        console.log(element);
        result[element].forEach(o => console.log(`###${o.model} -> ${o.produced}`));
    });
}