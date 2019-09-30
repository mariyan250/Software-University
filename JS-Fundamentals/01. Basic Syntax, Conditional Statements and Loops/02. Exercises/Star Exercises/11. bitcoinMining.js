function solve(data) {
    //Containers
    let moneyContainer = 0;
    let bitcoinContainer = 0;
    let bitcoinContainerX = 0;

    //Array length
    let length = data.length;

    //Day container
    let day = 0;

    //Loop over days
    for (let i = 1; i <= length; i++) {
        let gold = Number(data.shift());

        if (i % 3 == 0) {
            gold *= 0.7;
        }

        moneyContainer += gold * 67.51;
        gold = 0;

        if (moneyContainer >= 11949.16) {
            let bitcoins = Math.floor(moneyContainer / 11949.16);
            bitcoinContainer+= bitcoins;
            moneyContainer -= bitcoins * 11949.16;
            bitcoinContainerX++
        }

        if (bitcoinContainerX == 1) {
            day = i;
        }
    }

    //Log resources
    console.log(`Bought bitcoins: ${bitcoinContainer}`);
    if (day) {
     console.log(`Day of the first purchased bitcoin: ${day}`);   
    }
    console.log(`Left money: ${moneyContainer.toFixed(2)} lv.`);
}