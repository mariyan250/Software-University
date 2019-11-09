function questJournal(input) {
    const quests = input.shift().split(", ");

    for (let i = 0; i < input.length; i++) {
        let element = input[i].split(" - ");
        let command = element[0];
        let quest = element[1];


        if (element == "Retire!") {
            console.log(quests.join(", "));
            break;
        }

        switch (command) {
            case "Start":
                if (!quests.includes(quest)) {
                    quests.push(quest);
                }

                break;

            case "Complete":
                if (quests.includes(quest)) {
                    let questIndex = quests.indexOf(quest);
                    quests.splice(questIndex, 1);
                }

                break;

            case "Side Quest":
                let sideQuest = quest.split(":");
                let firstQuest = sideQuest[0];
                let secondQuest = sideQuest[1];
                let questIn = quests.indexOf(firstQuest);

                if (quests.includes(firstQuest) && !quests.includes(secondQuest)) {
                    quests.splice(questIn + 1, 0, secondQuest);
                }

                break;

            case "Renew":
                if (quests.includes(quest)) {
                    let indexOfQuest = quests.indexOf(quest);
                    const removeIndex = quests.splice(indexOfQuest, 1);
                    quests.push(removeIndex);
                }

                break;
        }
    }
}

questJournal([
    'Hello World, For loop, If else',
    'Start - While loop',
    'Complete - For loop',
    'Retire!'
]);