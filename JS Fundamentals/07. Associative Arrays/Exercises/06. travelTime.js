function travelTime(input) {

    let obj = {};

    for (let token of input) {
        const [country, city, price] = token.split(" > ");

        if (!obj.hasOwnProperty(country)) {
            obj[country] = [];
        }

        let currentTown = obj[country].find((o) => o.city == city);

        if (!currentTown) {
            obj[country].push({
                city,
                price
            });
        } else {
            if (currentTown.price > price) {
                currentTown.price = price;
            }
        }
    }

    let output = "";
    Object.keys(obj)
        .sort()
        .forEach((element) => {
            output += `${element} -> `;
            obj[element].sort((a, b) => a.price - b.price).forEach((o) => {
                output += `${o.city} -> ${o.price} `;
            })
            output += `\n`;
        });

    console.log(output);
}