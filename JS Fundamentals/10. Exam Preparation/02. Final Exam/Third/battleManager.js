function solve(input) {
    let obj = {};

    for (const line of input) {
        let row = line.split(":");

        switch (row[0]) {
            case "Add":
                let personName = row[1];
                let personHealth = Number(row[2]);
                let personEnergy = Number(row[3]);

                if (obj.hasOwnProperty(personName)) {
                    obj[personName].health += personHealth;
                } else {
                    obj[personName] = {
                        health: personHealth,
                        energy: personEnergy
                    }
                }

                break;

            case "Attack":
                let attackerName = row[1];
                let defenderName = row[2];
                let damage = Number(row[3]);

                if (obj.hasOwnProperty(attackerName) && obj.hasOwnProperty(defenderName)) {
                    obj[defenderName].health -= damage;
                    if (obj[defenderName].health <= 0) {
                        console.log(`${defenderName} was disqualified!`);
                        delete obj[defenderName];
                    }
                    obj[attackerName].energy -= 1;
                    if (obj[attackerName].energy <= 0) {
                        console.log(`${attackerName} was disqualified!`);
                        delete obj[attackerName];
                    }
                }

                break;

            case "Delete":
                let deleteUsername = row[1];

                if (deleteUsername == "All") {
                    obj = {};
                } else if (obj.hasOwnProperty(deleteUsername)) {
                    delete obj[deleteUsername];
                }

                break;
        }
    }

    // Sorting
    console.log(`People count: ${Object.keys(obj).length}`);
    Object.keys(obj).sort((a, b) => obj[b].health - obj[a].health || a.localeCompare(b)).forEach(element => {
        console.log(`${element} - ${obj[element].health} - ${obj[element].energy}`);
    })
}