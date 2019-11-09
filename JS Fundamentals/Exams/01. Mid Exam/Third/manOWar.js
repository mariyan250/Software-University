function manOWar(input) {
    let ourShip = input.shift().split(">").map(Number).filter(ship => ship >= 1 && ship <= 1000);
    let warShip = input.shift().split(">").map(Number).filter(ship => ship >= 1 && ship <= 1000);

    let maxHealthCapacity = Number(input.shift());

    for (let i = 0; i < input.length; i++) {
        let element = input[i].split(" ");

        if (element == "Retire") {
            break;
        }

        switch (element[0]) {
            case "Fire":
                let fireIndex = Number([element[1]]);
                let fireDamage = Number(element[2]);

                if (fireIndex < -200 || fireIndex > 200) {
                    break;
                }

                if (fireDamage < 1 || fireDamage > 1000) {
                    break;
                }

                if (warShip[fireIndex]) {
                    warShip[fireIndex] -= fireDamage;
                }

                if (warShip[fireIndex] <= 0) {
                    console.log("You won! The enemy ship has sunken.");
                    return;
                }

                break;

            case "Defend":
                let startIndex = Number(element[1]);
                let endIndex = Number([element[2]]);
                let defendDamage = Number(element[3]);

                if (startIndex < -200 || startIndex > 200) {
                    break;
                }

                if (endIndex < -200 || startIndex > 200) {
                    break;
                }

                if (ourShip[startIndex] && ourShip[endIndex]) {

                    for (let x = startIndex; x <= endIndex; x++) {
                        ourShip[x] -= defendDamage;

                        if (ourShip[x] <= 0) {
                            console.log("You lost! The pirate ship has sunken.");
                            return;
                        }
                    }
                }

                break;

            case "Repair":
                let repairIndex = Number(element[1]);
                let repairHealth = Number(element[2]);

                if (repairIndex < -200 || repairIndex > 200) {
                    break;
                }

                if (repairHealth < 1 || repairHealth > 1000) {
                    break;
                }

                if (ourShip[repairIndex]) {
                    ourShip[repairIndex] += repairHealth;

                    if (ourShip[repairIndex] > maxHealthCapacity) {
                        ourShip[repairIndex] = maxHealthCapacity;
                    }
                }

                break;

            case "Status":
                let repairNeedSections = ourShip.filter(section => section < maxHealthCapacity * 0.2);

                console.log(`${repairNeedSections.length} sections need repair.`);
                break;
        }
    }

    console.log(`Pirate ship status: ${ourShip.reduce((a, b) => a + b)}`);
    console.log(`Warship status: ${warShip.reduce((a, b) => a + b)}`);
}

manOWar([
    '2>3>4>5>2',
    '6>7>8>9>10>11',
    '20',
    'Status',
    'Fire 2 3',
    'Defend 0 4 11',
    'Repair 3 18',
    'Retire'
]);