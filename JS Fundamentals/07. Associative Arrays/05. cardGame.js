function cardGame(input) {

    let players = {};

    for (let i = 0; i < input.length; i++) {
        let player = input[i];

        let [name, playerCards] = player.split(": ");
        let cards = playerCards.split(", ");

        if (!name.split(" ").includes(":")) {
            if (!players.hasOwnProperty(name)) {
                let cardsToAdd = [];

                cards.forEach((card) => {
                    if (!cardsToAdd.includes(card)) {
                        cardsToAdd.push(card);
                    }
                });

                players[name] = cardsToAdd;
            } else {
                cards.forEach((card) => {
                    if (!players[name].includes(card)) {
                        players[name].push(card);
                    }
                });
            }
        }
    }

    for (let key in players) {
        let playerPower = 0;

        players[key].forEach((card) => {
            let [power, type] = card.split("");
            switch (power) {
                case "J":
                    if (type == "S") {
                        playerPower += 11 * 4;
                    } else if (type == "H") {
                        playerPower += 11 * 3;
                    } else if (type == "D") {
                        playerPower += 11 * 2;
                    } else if (type == "C") {
                        playerPower += 11;
                    }

                    break;

                case "Q":
                    if (type == "S") {
                        playerPower += 12 * 4;
                    } else if (type == "H") {
                        playerPower += 12 * 3;
                    } else if (type == "D") {
                        playerPower += 12 * 2;
                    } else if (type == "C") {
                        playerPower += 12;
                    }

                    break;

                case "K":
                    if (type == "S") {
                        playerPower += 13 * 4;
                    } else if (type == "H") {
                        playerPower += 13 * 3;
                    } else if (type == "D") {
                        playerPower += 13 * 2;
                    } else if (type == "C") {
                        playerPower += 13;
                    }

                    break;

                case "A":
                    if (type == "S") {
                        playerPower += 14 * 4;
                    } else if (type == "H") {
                        playerPower += 14 * 3;
                    } else if (type == "D") {
                        playerPower += 14 * 2;
                    } else if (type == "C") {
                        playerPower += 14;
                    }

                    break;

                case "1":
                    type = card.split("")[2];
                    if (type == "S") {
                        playerPower += 10 * 4;
                    } else if (type == "H") {
                        playerPower += 10 * 3;
                    } else if (type == "D") {
                        playerPower += 10 * 2;
                    } else if (type == "C") {
                        playerPower += 10;
                    }

                    break;

                default:
                    if (type == "S") {
                        playerPower += Number(power) * 4;
                    }

                    if (type == "H") {
                        playerPower += Number(power) * 3;
                    }

                    if (type == "D") {
                        playerPower += Number(power) * 2;
                    }

                    if (type == "C") {
                        playerPower += Number(power);
                    }

                    break;
            }
        });


        console.log(`${key}: ${playerPower}`);
    }
}