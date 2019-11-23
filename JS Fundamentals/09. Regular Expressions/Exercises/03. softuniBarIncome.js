function solve(input) {
    let sum = 0;

    for (let index = 0; index < input.length; index++) {
        const element = input[index];
        if (element == "end of shift") {
            break;
        }

        let regex = /%([A-Z][a-z]+)%[^\|\$%.]*<([\w]+)>[^\|\$%.]*\|[^\|\$%.]*(\d+)\|[^\|\$%.\d]*(\d+\.?[\d]+)[^\|\$%.]*\$/g;
        let match = regex.exec(element);

        debugger;
        if (match) {
            const [name, product, quantity, price] = match.slice(1);

            console.log(`${name}: ${product} - ${(Number(price) * Number(quantity)).toFixed(2)}`);
            sum += Number(price) * Number(quantity);
        }
    }

    console.log(`Total income: ${sum.toFixed(2)}`);
}