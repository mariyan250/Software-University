function dungeonestDark(input) {
    let rooms = input.shift().split("|");

    let initialHealth = 100;
    let initialCoins = 0;

    for (let i = 0; i < rooms.length; i++) {
        let room = rooms[i].split(" ");

        let itemOrMonster = room[0];
        let value = Number(room[1]);

        switch (itemOrMonster) {
            case "potion":

                if (initialHealth + value > 100) {
                    let toHeal = 100 - initialHealth;
                    console.log(`You healed for ${toHeal} hp.`);
                    initialHealth = 100;
                } else {
                    initialHealth += value;
                    console.log(`You healed for ${value} hp.`);
                }

                console.log(`Current health: ${initialHealth} hp.`);

                break;

            case "chest":
                initialCoins += value;
                console.log(`You found ${value} coins.`);

                break;

            default:

                initialHealth -= value;

                if (initialHealth > 0) {
                    console.log(`You slayed ${itemOrMonster}.`);
                } else {
                    console.log(`You died! Killed by ${itemOrMonster}.`);
                    console.log(`Best room: ${i + 1}`);
                    return;
                }

                break;
        }
    }

    console.log(`You've made it!\nCoins: ${initialCoins}\nHealth: ${initialHealth}`);

}

dungeonestDark(['rat 10|bat 20|potion 10|rat 10|chest 100|boss 70|chest 1000']);