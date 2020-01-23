function solve(input) {
    let top = [];

    const result = input.reduce((acc, val) => {
        const [fruit, quantity] = val.split(" => ");
        if (!acc.hasOwnProperty(fruit)) {
            acc[fruit] = { quantity: Number(quantity), bottles: 0 }
            if (acc[fruit].quantity >= 1000) {
                top.push(fruit);
                const bottles = Math.floor(acc[fruit].quantity / 1000);
                acc[fruit].bottles = Number(bottles);
                acc[fruit].quantity = Number(acc[fruit].quantity % 1000);
            }
        } else {
            acc[fruit].quantity += Number(quantity);
            if (acc[fruit].quantity >= 1000) {
                if (!top.includes(fruit)) {
                    top.push(fruit);
                }
                const bottles = Number(Math.floor(acc[fruit].quantity / 1000));
                acc[fruit].bottles += Number(bottles);
                acc[fruit].quantity = acc[fruit].quantity % 1000;
            }
        }

        return acc;
    }, {});

    top.forEach(e => {
        console.log(`${e} => ${result[e].bottles}`);
    });
}

solve(['Kiwi => 234',
    'Pear => 2345',
    'Watermelon => 3456',
    'Kiwi => 4567',
    'Pear => 5678',
    'Watermelon => 6789',
    'Watermelon => 2000']
)