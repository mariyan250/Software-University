function solve(input) {
    let cards = input.shift().split(":");
    let newDeck = [];

    for (let i = 0; i < input.length; i++) {
        let command = input[i].split(" ");
        let commandName = command[0];

        if (commandName == "Ready") {
            break;
        }

        switch (commandName) {
            case "Add":
                let addCard = command[1];

                if (cards.includes(addCard)) {
                    let indexOfCard = cards.indexOf(addCard);
                    newDeck.push(cards[indexOfCard]);
                } else {
                    console.log("Card not found.");
                }

                break;

            case "Insert":
                let cardName = command[1];
                let cardIndexInsert = Number(command[2]);

                if (cards.includes(cardName) && cards[cardIndexInsert]) {
                    newDeck.splice(cardIndexInsert, 0, cardName);
                } else {
                    console.log('Error!');
                }

                break;

            case "Remove":
                let cardNameForRemove = command[1];

                if (newDeck.includes(cardNameForRemove)) {
                    let indexOfCardToRemove = newDeck.indexOf(cardNameForRemove);
                    newDeck.splice(indexOfCardToRemove, 1);
                } else {
                    console.log('Card not found.');
                }

                break;

            case "Swap":
                let cardOne = command[1];
                let cardTwo = command[2];

                if (command[1] && command[2]) {
                    let cardOnePosition = newDeck.indexOf(cardOne);
                    let cardTwoPosition = newDeck.indexOf(cardTwo);

                    newDeck[cardOnePosition] = cardTwo;
                    newDeck[cardTwoPosition] = cardOne;
                }

                break;

            case "Shuffle":
                newDeck.reverse();
                break;
        }
    }

    console.log(newDeck.join(" "));
}