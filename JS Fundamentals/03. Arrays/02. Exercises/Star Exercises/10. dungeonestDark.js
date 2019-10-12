function solve(string) {
    let initialHealth = 100;
    let initialCoins = 0;

    const newArr = [];

    const arr = string.split("|");
    arr.forEach((element) => {
        newArr.push(element);
    });

    const arrX = newArr.map(element => element.split(" "));
    for (let i = 0; i < arrX.length; i++) {
        const element = arrX[i];

        for (let n = 0; n < element.length; n++) {
            let item = element.shift();
            let value = Number(element.shift());

            if (item == "potion") {
                if ((initialHealth + value) > 100) {
                    console.log(`You healed for ${100 - initialHealth} hp.`);
                    initialHealth = 100;
                } else {
                    console.log(`You healed for ${value} hp.`);
                    initialHealth += value;
                }
                console.log(`Current health: ${initialHealth} hp.`);

            } else if (item == "chest") {
                console.log(`You found ${value} coins.`);
                initialCoins += value;
            } else {
                initialHealth -= value;

                if (initialHealth > 0) {
                    console.log(`You slayed ${item}.`);
                } else {
                    console.log(`You died! Killed by ${item}.`);
                    console.log(`Best room: ${i + 1}`);
                    break;
                }
            }
        }
    }

    if (initialHealth > 0) {
        console.log(`You've made it!, Coins: ${initialCoins}, Health: ${initialHealth}.`);
    }
}

solve("rat 10|bat 20|potion 10|rat 10|chest 100|boss 70|chest 1000");