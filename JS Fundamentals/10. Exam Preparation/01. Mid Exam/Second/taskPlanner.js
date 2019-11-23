function taskPlanner(input) {
    let hours = input.shift().split(" ").map(Number);

    for (let i = 0; i < input.length; i++) {
        let command = input[i].split(" ");
        let commandName = command[0];
        let commandOperation = command[1];

        if (commandName == "End") {
            break;
        }

        switch (commandName) {
            case "Complete":
                let completeIndex = Number(command[1]);

                if (hours[completeIndex]) {
                    hours.splice(completeIndex, 1, 0);
                }

                break;

            case "Change":
                let changeIndex = Number(command[1]);
                let changeTime = Number(command[2]);

                if (hours[changeIndex]) {
                    hours.splice(changeIndex, 1, changeTime);
                }

                break;

            case "Drop":
                let dropIndex = Number(command[1]);

                if (hours[dropIndex]) {
                    hours.splice(dropIndex, 1, -1);
                }

                break;
        }

        if (commandOperation == "Completed") {
            const completedTasks = hours.filter(hour => hour == 0);
            console.log(completedTasks.length);

        } else if (commandOperation == "Incomplete") {
            const incompletedTasks = hours.filter(hour => hour > 0);
            console.log(incompletedTasks.length);

        } else if (commandOperation == "Dropped") {
            const droppedTasks = hours.filter(hour => hour < 0);
            console.log(droppedTasks.length);
        }
    }

    const finalPrint = hours.filter(hour => hour > 0);
    console.log(finalPrint.join(" "));
}