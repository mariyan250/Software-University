function solve(input) {
    let sum = 0;

    console.log('Bought furniture:');
    for (const sentence of input) {
        if (sentence == "Purchase") {
            break;
        }

        let data = sentence.match(/>>\w+<<\d*\.?\d+!\d+/g);

        if (data) {
            let name = data[0].split(">>").join("").split("<<")[0];
            let price = data[0].split(">>").join("").split("<<")[1].split("!")[0];
            let quantity = data[0].split(">>").join("").split("<<")[1].split("!")[1];
            console.log(name);

            sum += Number(price) * Number(quantity);
        }
    }

    console.log('Total money spend: ' + sum.toFixed(2));
}